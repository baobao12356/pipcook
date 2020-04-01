const fse = require('fs-extra');
const path = require('path');
const glob = require('glob-promise');

/**
 * prepare a working dir for developer to develop plugins
 */
const dataset = async (cmdObj) => {
  const pluginType = cmdObj && cmdObj[0];

  if (!pluginType) {
    console.log('Please provide a plugin type');
    return;
  }

  if (pluginType === 'coco-merge') {
    const newDir = path.join(process.cwd(), 'merge-data');
    fse.ensureDirSync(newDir);

    const imageDirs = await glob(path.join(process.cwd(), 'images', '*'));

    const newJson = {
      info: {
        description: "dataset generated by pipcook",
        url: "http:\/\/mscoco.org",
        version: "1.0",
        year: 2014,
        contributor: "Microsoft COCO group",
        date_created: "2015-01-27 09:11:52.357475"
      },
      images: [],
      licenses: [
        {
          url: "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/2.0\/",
          id: 1,
          name: "Attribution-NonCommercial-ShareAlike License"
        }
      ],
      annotations: [],
      categories: []
    };

    let imageNum = 1;
    let annotationNum = 1;
    const categoryMap = {};
    let categoryNum = 1;
    for (let i = 0; i < imageDirs.length; i++) {
      const imageDir = imageDirs[i];
      try {
        fse.lstatSync(imageDir).isDirectory();
        let dirName = imageDir.split(path.sep);
        dirName = dirName[dirName.length - 1];
        if (!fse.pathExistsSync(path.join(process.cwd(), 'annotations', dirName + '.json'))) {
          throw new Error('no corresponding annotation');
        }
        const json = require(path.join(process.cwd(), 'annotations', dirName + '.json'));

        json.images.forEach((image) => {
          newJson.images.push({
            license: 1,
            file_name: image.file_name,
            coco_url: image.coco_url,
            height: image.height,
            width: image.width,
            id: imageNum
          });
          imageNum++;
        });

        json.categories.forEach((category) => {
          const categoryName = category.name;
          if (categoryMap[categoryName]) {
            return;
          } else {
            categoryMap[categoryName] = categoryNum;
            newJson.categories.push({
              id: categoryNum,
              name: categoryName,
              supercategory: categoryName
            });
            categoryNum++;
          }
        });

        json.annotations.forEach((annotation) => {
          newJson.annotations.push({
            id: annotationNum,
            image_id: newJson.images.find((img) => img.file_name == 
              (json.images.find((image) => image.id === annotation.image_id).file_name)).id,
            category_id: newJson.categories.find((cate) => cate.name == 
              (json.categories.find((category) => category.id === annotation.category_id).name)).id,
            segmentation: [],
            iscrowd: 0,
            area: annotation.area,
            bbox: annotation.bbox
          });
          annotationNum++;
        });

        const imageFiles = await glob(path.join(imageDir, '*'));
        imageFiles.forEach((image) => {
          let imageName = image.split(path.sep);
          imageName = imageName[imageName.length - 1];
          fse.copySync(image, path.join(process.cwd(), 'merge-data', 'images', imageName));
        });
      } finally {
        // TODO(yorkie): remove the try-catch block.
      } 
    }

    fse.outputJSONSync(path.join(process.cwd(), 'merge-data', 'annotation.json'), newJson);
  }
};

module.exports = dataset;
