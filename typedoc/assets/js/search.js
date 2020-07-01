var typedoc = typedoc || {};
            typedoc.search = typedoc.search || {};
            typedoc.search.data = {"kinds":{"4":"Enumeration","16":"Enumeration member","32":"Variable","64":"Function","128":"Class","256":"Interface","512":"Constructor","1024":"Property","65536":"Type literal","2097152":"Object literal","4194304":"Type alias"},"rows":[{"id":0,"kind":128,"name":"PipelineGenContext","url":"classes/pipelinegencontext.html","classes":"tsd-kind-class"},{"id":1,"kind":1024,"name":"pipelines","url":"classes/pipelinegencontext.html#pipelines","classes":"tsd-kind-property tsd-parent-kind-class","parent":"PipelineGenContext"},{"id":2,"kind":1024,"name":"nlpReferences","url":"classes/pipelinegencontext.html#nlpreferences","classes":"tsd-kind-property tsd-parent-kind-class","parent":"PipelineGenContext"},{"id":3,"kind":1024,"name":"visionReferences","url":"classes/pipelinegencontext.html#visionreferences","classes":"tsd-kind-property tsd-parent-kind-class","parent":"PipelineGenContext"},{"id":4,"kind":4194304,"name":"PipelineNode","url":"index.html#pipelinenode","classes":"tsd-kind-type-alias"},{"id":5,"kind":65536,"name":"__type","url":"index.html#pipelinenode.__type","classes":"tsd-kind-type-literal tsd-parent-kind-type-alias tsd-is-not-exported","parent":"PipelineNode"},{"id":6,"kind":4194304,"name":"AppModule","url":"index.html#appmodule","classes":"tsd-kind-type-alias"},{"id":7,"kind":256,"name":"LearnableCallback","url":"interfaces/learnablecallback.html","classes":"tsd-kind-interface"},{"id":8,"kind":4194304,"name":"Learnable","url":"index.html#learnable","classes":"tsd-kind-type-alias"},{"id":9,"kind":64,"name":"createLearnable","url":"index.html#createlearnable","classes":"tsd-kind-function"},{"id":10,"kind":64,"name":"compile","url":"index.html#compile","classes":"tsd-kind-function"},{"id":11,"kind":128,"name":"Image","url":"classes/image.html","classes":"tsd-kind-class"},{"id":12,"kind":1024,"name":"height","url":"classes/image.html#height","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Image"},{"id":13,"kind":1024,"name":"width","url":"classes/image.html#width","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Image"},{"id":14,"kind":1024,"name":"pixels","url":"classes/image.html#pixels","classes":"tsd-kind-property tsd-parent-kind-class","parent":"Image"},{"id":15,"kind":256,"name":"VisionObject","url":"interfaces/visionobject.html","classes":"tsd-kind-interface"},{"id":16,"kind":1024,"name":"label","url":"interfaces/visionobject.html#label","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"VisionObject"},{"id":17,"kind":1024,"name":"position2d","url":"interfaces/visionobject.html#position2d","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"VisionObject"},{"id":18,"kind":1024,"name":"outline","url":"interfaces/visionobject.html#outline","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"VisionObject"},{"id":19,"kind":256,"name":"Position2D","url":"interfaces/position2d.html","classes":"tsd-kind-interface"},{"id":20,"kind":1024,"name":"x","url":"interfaces/position2d.html#x","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Position2D"},{"id":21,"kind":1024,"name":"y","url":"interfaces/position2d.html#y","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Position2D"},{"id":22,"kind":256,"name":"NamedEntityProp","url":"interfaces/namedentityprop.html","classes":"tsd-kind-interface"},{"id":23,"kind":1024,"name":"sentence","url":"interfaces/namedentityprop.html#sentence","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"NamedEntityProp"},{"id":24,"kind":1024,"name":"entities","url":"interfaces/namedentityprop.html#entities","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"NamedEntityProp"},{"id":25,"kind":256,"name":"TextAnswer","url":"interfaces/textanswer.html","classes":"tsd-kind-interface"},{"id":26,"kind":1024,"name":"answer","url":"interfaces/textanswer.html#answer","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"TextAnswer"},{"id":27,"kind":1024,"name":"confidence","url":"interfaces/textanswer.html#confidence","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"TextAnswer"},{"id":28,"kind":256,"name":"TranslationResult","url":"interfaces/translationresult.html","classes":"tsd-kind-interface"},{"id":29,"kind":1024,"name":"lang","url":"interfaces/translationresult.html#lang","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"TranslationResult"},{"id":30,"kind":1024,"name":"output","url":"interfaces/translationresult.html#output","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"TranslationResult"},{"id":31,"kind":64,"name":"classify","url":"index.html#classify","classes":"tsd-kind-function"},{"id":32,"kind":64,"name":"getNamedEntity","url":"index.html#getnamedentity","classes":"tsd-kind-function"},{"id":33,"kind":64,"name":"getAnswers","url":"index.html#getanswers","classes":"tsd-kind-function"},{"id":34,"kind":64,"name":"getSummary","url":"index.html#getsummary","classes":"tsd-kind-function"},{"id":35,"kind":64,"name":"translate","url":"index.html#translate","classes":"tsd-kind-function"},{"id":36,"kind":64,"name":"createArtwork","url":"index.html#createartwork","classes":"tsd-kind-function"},{"id":37,"kind":64,"name":"generate","url":"index.html#generate","classes":"tsd-kind-function"},{"id":38,"kind":64,"name":"detectObject","url":"index.html#detectobject","classes":"tsd-kind-function"},{"id":39,"kind":64,"name":"segmentObject","url":"index.html#segmentobject","classes":"tsd-kind-function"},{"id":40,"kind":256,"name":"Statistic","url":"interfaces/statistic.html","classes":"tsd-kind-interface"},{"id":41,"kind":1024,"name":"metricName","url":"interfaces/statistic.html#metricname","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Statistic"},{"id":42,"kind":1024,"name":"metricValue","url":"interfaces/statistic.html#metricvalue","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Statistic"},{"id":43,"kind":256,"name":"EvaluateResult","url":"interfaces/evaluateresult.html","classes":"tsd-kind-interface"},{"id":44,"kind":1024,"name":"pass","url":"interfaces/evaluateresult.html#pass","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"EvaluateResult"},{"id":45,"kind":128,"name":"EvaluateError","url":"classes/evaluateerror.html","classes":"tsd-kind-class"},{"id":46,"kind":1024,"name":"result","url":"classes/evaluateerror.html#result","classes":"tsd-kind-property tsd-parent-kind-class","parent":"EvaluateError"},{"id":47,"kind":512,"name":"constructor","url":"classes/evaluateerror.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"EvaluateError"},{"id":48,"kind":1024,"name":"name","url":"classes/evaluateerror.html#name","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"EvaluateError"},{"id":49,"kind":1024,"name":"message","url":"classes/evaluateerror.html#message","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"EvaluateError"},{"id":50,"kind":1024,"name":"stack","url":"classes/evaluateerror.html#stack","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-overwrite tsd-is-inherited","parent":"EvaluateError"},{"id":51,"kind":1024,"name":"TypeError","url":"classes/evaluateerror.html#typeerror","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-static","parent":"EvaluateError"},{"id":52,"kind":256,"name":"DataDescriptor","url":"interfaces/datadescriptor.html","classes":"tsd-kind-interface"},{"id":53,"kind":1024,"name":"type","url":"interfaces/datadescriptor.html#type","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"DataDescriptor"},{"id":54,"kind":1024,"name":"shape","url":"interfaces/datadescriptor.html#shape","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"DataDescriptor"},{"id":55,"kind":1024,"name":"names","url":"interfaces/datadescriptor.html#names","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"DataDescriptor"},{"id":56,"kind":256,"name":"Metadata","url":"interfaces/metadata.html","classes":"tsd-kind-interface"},{"id":57,"kind":1024,"name":"feature","url":"interfaces/metadata.html#feature","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Metadata"},{"id":58,"kind":1024,"name":"label","url":"interfaces/metadata.html#label","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Metadata"},{"id":59,"kind":1024,"name":"labelMap","url":"interfaces/metadata.html#labelmap","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Metadata"},{"id":60,"kind":256,"name":"Sample","url":"interfaces/sample.html","classes":"tsd-kind-interface"},{"id":61,"kind":1024,"name":"data","url":"interfaces/sample.html#data","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Sample"},{"id":62,"kind":1024,"name":"label","url":"interfaces/sample.html#label","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Sample"},{"id":63,"kind":256,"name":"DataLoader","url":"interfaces/dataloader.html","classes":"tsd-kind-interface"},{"id":64,"kind":1024,"name":"len","url":"interfaces/dataloader.html#len","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"DataLoader"},{"id":65,"kind":65536,"name":"__type","url":"interfaces/dataloader.html#len.__type-1","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"DataLoader.len"},{"id":66,"kind":1024,"name":"getItem","url":"interfaces/dataloader.html#getitem","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"DataLoader"},{"id":67,"kind":65536,"name":"__type","url":"interfaces/dataloader.html#getitem.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"DataLoader.getItem"},{"id":68,"kind":256,"name":"UniDataset","url":"interfaces/unidataset.html","classes":"tsd-kind-interface"},{"id":69,"kind":1024,"name":"metadata","url":"interfaces/unidataset.html#metadata","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"UniDataset"},{"id":70,"kind":1024,"name":"dataStatistics","url":"interfaces/unidataset.html#datastatistics","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"UniDataset"},{"id":71,"kind":1024,"name":"validationResult","url":"interfaces/unidataset.html#validationresult","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"UniDataset"},{"id":72,"kind":65536,"name":"__type","url":"interfaces/unidataset.html#validationresult.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"UniDataset.validationResult"},{"id":73,"kind":1024,"name":"trainLoader","url":"interfaces/unidataset.html#trainloader","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"UniDataset"},{"id":74,"kind":1024,"name":"validationLoader","url":"interfaces/unidataset.html#validationloader","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"UniDataset"},{"id":75,"kind":1024,"name":"testLoader","url":"interfaces/unidataset.html#testloader","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"UniDataset"},{"id":76,"kind":256,"name":"SegmentationRLE","url":"interfaces/segmentationrle.html","classes":"tsd-kind-interface"},{"id":77,"kind":1024,"name":"counts","url":"interfaces/segmentationrle.html#counts","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"SegmentationRLE"},{"id":78,"kind":1024,"name":"size","url":"interfaces/segmentationrle.html#size","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"SegmentationRLE"},{"id":79,"kind":256,"name":"ImageLabel","url":"interfaces/imagelabel.html","classes":"tsd-kind-interface"},{"id":80,"kind":1024,"name":"name","url":"interfaces/imagelabel.html#name","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ImageLabel"},{"id":81,"kind":1024,"name":"categoryId","url":"interfaces/imagelabel.html#categoryid","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ImageLabel"},{"id":82,"kind":1024,"name":"bndbox","url":"interfaces/imagelabel.html#bndbox","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ImageLabel"},{"id":83,"kind":65536,"name":"__type","url":"interfaces/imagelabel.html#bndbox.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"ImageLabel.bndbox"},{"id":84,"kind":1024,"name":"segmentation","url":"interfaces/imagelabel.html#segmentation","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ImageLabel"},{"id":85,"kind":1024,"name":"iscrowd","url":"interfaces/imagelabel.html#iscrowd","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ImageLabel"},{"id":86,"kind":256,"name":"ImageMetadata","url":"interfaces/imagemetadata.html","classes":"tsd-kind-interface"},{"id":87,"kind":1024,"name":"labelMap","url":"interfaces/imagemetadata.html#labelmap","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"ImageMetadata"},{"id":88,"kind":1024,"name":"isBitMask","url":"interfaces/imagemetadata.html#isbitmask","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ImageMetadata"},{"id":89,"kind":1024,"name":"feature","url":"interfaces/imagemetadata.html#feature","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"ImageMetadata"},{"id":90,"kind":1024,"name":"label","url":"interfaces/imagemetadata.html#label","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"ImageMetadata"},{"id":91,"kind":256,"name":"ImageSample","url":"interfaces/imagesample.html","classes":"tsd-kind-interface"},{"id":92,"kind":1024,"name":"data","url":"interfaces/imagesample.html#data","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ImageSample"},{"id":93,"kind":1024,"name":"label","url":"interfaces/imagesample.html#label","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ImageSample"},{"id":94,"kind":256,"name":"ImageDataLoader","url":"interfaces/imagedataloader.html","classes":"tsd-kind-interface"},{"id":95,"kind":1024,"name":"getItem","url":"interfaces/imagedataloader.html#getitem","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"ImageDataLoader"},{"id":96,"kind":65536,"name":"__type","url":"interfaces/imagedataloader.html#getitem.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"ImageDataLoader.getItem"},{"id":97,"kind":1024,"name":"len","url":"interfaces/imagedataloader.html#len","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"ImageDataLoader"},{"id":98,"kind":65536,"name":"__type","url":"interfaces/imagedataloader.html#len.__type-1","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"ImageDataLoader.len"},{"id":99,"kind":256,"name":"ImageDataset","url":"interfaces/imagedataset.html","classes":"tsd-kind-interface"},{"id":100,"kind":1024,"name":"metadata","url":"interfaces/imagedataset.html#metadata","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"ImageDataset"},{"id":101,"kind":1024,"name":"trainLoader","url":"interfaces/imagedataset.html#trainloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"ImageDataset"},{"id":102,"kind":1024,"name":"validationLoader","url":"interfaces/imagedataset.html#validationloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"ImageDataset"},{"id":103,"kind":1024,"name":"testLoader","url":"interfaces/imagedataset.html#testloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"ImageDataset"},{"id":104,"kind":1024,"name":"dataStatistics","url":"interfaces/imagedataset.html#datastatistics","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"ImageDataset"},{"id":105,"kind":1024,"name":"validationResult","url":"interfaces/imagedataset.html#validationresult","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"ImageDataset"},{"id":106,"kind":65536,"name":"__type","url":"interfaces/imagedataset.html#validationresult.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"ImageDataset.validationResult"},{"id":107,"kind":256,"name":"CocoDataset","url":"interfaces/cocodataset.html","classes":"tsd-kind-interface"},{"id":108,"kind":1024,"name":"trainAnnotationPath","url":"interfaces/cocodataset.html#trainannotationpath","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CocoDataset"},{"id":109,"kind":1024,"name":"validationAnnotationPath","url":"interfaces/cocodataset.html#validationannotationpath","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CocoDataset"},{"id":110,"kind":1024,"name":"testAnnotationPath","url":"interfaces/cocodataset.html#testannotationpath","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CocoDataset"},{"id":111,"kind":1024,"name":"metadata","url":"interfaces/cocodataset.html#metadata","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite tsd-is-inherited","parent":"CocoDataset"},{"id":112,"kind":1024,"name":"trainLoader","url":"interfaces/cocodataset.html#trainloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite tsd-is-inherited","parent":"CocoDataset"},{"id":113,"kind":1024,"name":"validationLoader","url":"interfaces/cocodataset.html#validationloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite tsd-is-inherited","parent":"CocoDataset"},{"id":114,"kind":1024,"name":"testLoader","url":"interfaces/cocodataset.html#testloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite tsd-is-inherited","parent":"CocoDataset"},{"id":115,"kind":1024,"name":"dataStatistics","url":"interfaces/cocodataset.html#datastatistics","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"CocoDataset"},{"id":116,"kind":1024,"name":"validationResult","url":"interfaces/cocodataset.html#validationresult","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"CocoDataset"},{"id":117,"kind":65536,"name":"__type","url":"interfaces/cocodataset.html#validationresult.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"CocoDataset.validationResult"},{"id":118,"kind":256,"name":"VocDataset","url":"interfaces/vocdataset.html","classes":"tsd-kind-interface"},{"id":119,"kind":1024,"name":"trainXmlPaths","url":"interfaces/vocdataset.html#trainxmlpaths","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"VocDataset"},{"id":120,"kind":1024,"name":"validationXmlPaths","url":"interfaces/vocdataset.html#validationxmlpaths","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"VocDataset"},{"id":121,"kind":1024,"name":"testXmlPaths","url":"interfaces/vocdataset.html#testxmlpaths","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"VocDataset"},{"id":122,"kind":1024,"name":"metadata","url":"interfaces/vocdataset.html#metadata","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite tsd-is-inherited","parent":"VocDataset"},{"id":123,"kind":1024,"name":"trainLoader","url":"interfaces/vocdataset.html#trainloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite tsd-is-inherited","parent":"VocDataset"},{"id":124,"kind":1024,"name":"validationLoader","url":"interfaces/vocdataset.html#validationloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite tsd-is-inherited","parent":"VocDataset"},{"id":125,"kind":1024,"name":"testLoader","url":"interfaces/vocdataset.html#testloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite tsd-is-inherited","parent":"VocDataset"},{"id":126,"kind":1024,"name":"dataStatistics","url":"interfaces/vocdataset.html#datastatistics","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"VocDataset"},{"id":127,"kind":1024,"name":"validationResult","url":"interfaces/vocdataset.html#validationresult","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"VocDataset"},{"id":128,"kind":65536,"name":"__type","url":"interfaces/vocdataset.html#validationresult.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"VocDataset.validationResult"},{"id":129,"kind":4194304,"name":"SegmentationPolygon","url":"index.html#segmentationpolygon","classes":"tsd-kind-type-alias"},{"id":130,"kind":256,"name":"CsvSample","url":"interfaces/csvsample.html","classes":"tsd-kind-interface"},{"id":131,"kind":1024,"name":"data","url":"interfaces/csvsample.html#data","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CsvSample"},{"id":132,"kind":1024,"name":"label","url":"interfaces/csvsample.html#label","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CsvSample"},{"id":133,"kind":256,"name":"CsvMetadata","url":"interfaces/csvmetadata.html","classes":"tsd-kind-interface"},{"id":134,"kind":1024,"name":"feature","url":"interfaces/csvmetadata.html#feature","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"CsvMetadata"},{"id":135,"kind":65536,"name":"__type","url":"interfaces/csvmetadata.html#feature.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"CsvMetadata.feature"},{"id":136,"kind":1024,"name":"label","url":"interfaces/csvmetadata.html#label","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"CsvMetadata"},{"id":137,"kind":1024,"name":"labelMap","url":"interfaces/csvmetadata.html#labelmap","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"CsvMetadata"},{"id":138,"kind":256,"name":"CsvDataLoader","url":"interfaces/csvdataloader.html","classes":"tsd-kind-interface"},{"id":139,"kind":1024,"name":"getItem","url":"interfaces/csvdataloader.html#getitem","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"CsvDataLoader"},{"id":140,"kind":65536,"name":"__type","url":"interfaces/csvdataloader.html#getitem.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"CsvDataLoader.getItem"},{"id":141,"kind":1024,"name":"len","url":"interfaces/csvdataloader.html#len","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"CsvDataLoader"},{"id":142,"kind":65536,"name":"__type","url":"interfaces/csvdataloader.html#len.__type-1","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"CsvDataLoader.len"},{"id":143,"kind":256,"name":"CsvDataset","url":"interfaces/csvdataset.html","classes":"tsd-kind-interface"},{"id":144,"kind":1024,"name":"trainCsvPath","url":"interfaces/csvdataset.html#traincsvpath","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CsvDataset"},{"id":145,"kind":1024,"name":"validationCsvPath","url":"interfaces/csvdataset.html#validationcsvpath","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CsvDataset"},{"id":146,"kind":1024,"name":"testCsvPath","url":"interfaces/csvdataset.html#testcsvpath","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CsvDataset"},{"id":147,"kind":1024,"name":"trainLoader","url":"interfaces/csvdataset.html#trainloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"CsvDataset"},{"id":148,"kind":1024,"name":"validationLoader","url":"interfaces/csvdataset.html#validationloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"CsvDataset"},{"id":149,"kind":1024,"name":"testLoader","url":"interfaces/csvdataset.html#testloader","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"CsvDataset"},{"id":150,"kind":1024,"name":"metadata","url":"interfaces/csvdataset.html#metadata","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"CsvDataset"},{"id":151,"kind":1024,"name":"dataStatistics","url":"interfaces/csvdataset.html#datastatistics","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"CsvDataset"},{"id":152,"kind":1024,"name":"validationResult","url":"interfaces/csvdataset.html#validationresult","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"CsvDataset"},{"id":153,"kind":65536,"name":"__type","url":"interfaces/csvdataset.html#validationresult.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"CsvDataset.validationResult"},{"id":154,"kind":256,"name":"UniModel","url":"interfaces/unimodel.html","classes":"tsd-kind-interface"},{"id":155,"kind":1024,"name":"model","url":"interfaces/unimodel.html#model","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"UniModel"},{"id":156,"kind":1024,"name":"predict","url":"interfaces/unimodel.html#predict","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"UniModel"},{"id":157,"kind":1024,"name":"metrics","url":"interfaces/unimodel.html#metrics","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"UniModel"},{"id":158,"kind":1024,"name":"config","url":"interfaces/unimodel.html#config","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"UniModel"},{"id":159,"kind":256,"name":"ModelDefineArgsType","url":"interfaces/modeldefineargstype.html","classes":"tsd-kind-interface"},{"id":160,"kind":1024,"name":"recoverPath","url":"interfaces/modeldefineargstype.html#recoverpath","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ModelDefineArgsType"},{"id":161,"kind":1024,"name":"jobId","url":"interfaces/modeldefineargstype.html#jobid","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"ModelDefineArgsType"},{"id":162,"kind":1024,"name":"modelDir","url":"interfaces/modeldefineargstype.html#modeldir","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"ModelDefineArgsType"},{"id":163,"kind":1024,"name":"dataDir","url":"interfaces/modeldefineargstype.html#datadir","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"ModelDefineArgsType"},{"id":164,"kind":256,"name":"ModelTrainArgsType","url":"interfaces/modeltrainargstype.html","classes":"tsd-kind-interface"},{"id":165,"kind":1024,"name":"modelPath","url":"interfaces/modeltrainargstype.html#modelpath","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ModelTrainArgsType"},{"id":166,"kind":1024,"name":"jobId","url":"interfaces/modeltrainargstype.html#jobid","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"ModelTrainArgsType"},{"id":167,"kind":1024,"name":"modelDir","url":"interfaces/modeltrainargstype.html#modeldir","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"ModelTrainArgsType"},{"id":168,"kind":1024,"name":"dataDir","url":"interfaces/modeltrainargstype.html#datadir","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"ModelTrainArgsType"},{"id":169,"kind":256,"name":"PipcookPlugin","url":"interfaces/pipcookplugin.html","classes":"tsd-kind-interface"},{"id":170,"kind":256,"name":"DataCollectType","url":"interfaces/datacollecttype.html","classes":"tsd-kind-interface"},{"id":171,"kind":256,"name":"DataAccessType","url":"interfaces/dataaccesstype.html","classes":"tsd-kind-interface"},{"id":172,"kind":256,"name":"DataProcessType","url":"interfaces/dataprocesstype.html","classes":"tsd-kind-interface"},{"id":173,"kind":256,"name":"ModelLoadType","url":"interfaces/modelloadtype.html","classes":"tsd-kind-interface"},{"id":174,"kind":256,"name":"ModelDefineType","url":"interfaces/modeldefinetype.html","classes":"tsd-kind-interface"},{"id":175,"kind":256,"name":"ModelTrainType","url":"interfaces/modeltraintype.html","classes":"tsd-kind-interface"},{"id":176,"kind":256,"name":"ModelEvaluateType","url":"interfaces/modelevaluatetype.html","classes":"tsd-kind-interface"},{"id":177,"kind":4194304,"name":"PluginTypeI","url":"index.html#plugintypei","classes":"tsd-kind-type-alias"},{"id":178,"kind":4194304,"name":"ArgsType","url":"index.html#argstype","classes":"tsd-kind-type-alias"},{"id":179,"kind":4,"name":"OutputType","url":"enums/outputtype.html","classes":"tsd-kind-enum"},{"id":180,"kind":16,"name":"Data","url":"enums/outputtype.html#data","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"OutputType"},{"id":181,"kind":16,"name":"Model","url":"enums/outputtype.html#model","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"OutputType"},{"id":182,"kind":16,"name":"Evaluate","url":"enums/outputtype.html#evaluate","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"OutputType"},{"id":183,"kind":16,"name":"Merge","url":"enums/outputtype.html#merge","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"OutputType"},{"id":184,"kind":16,"name":"ModelToSave","url":"enums/outputtype.html#modeltosave","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"OutputType"},{"id":185,"kind":16,"name":"OriginData","url":"enums/outputtype.html#origindata","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"OutputType"},{"id":186,"kind":16,"name":"NotSet","url":"enums/outputtype.html#notset","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"OutputType"},{"id":187,"kind":32,"name":"PIPCOOK_HOME_PATH","url":"index.html#pipcook_home_path","classes":"tsd-kind-variable"},{"id":188,"kind":32,"name":"PIPCOOK_PLUGINS","url":"index.html#pipcook_plugins","classes":"tsd-kind-variable"},{"id":189,"kind":32,"name":"PIPCOOK_LOGS","url":"index.html#pipcook_logs","classes":"tsd-kind-variable"},{"id":190,"kind":32,"name":"PIPCOOK_DAEMON","url":"index.html#pipcook_daemon","classes":"tsd-kind-variable"},{"id":191,"kind":32,"name":"PIPCOOK_DAEMON_SRC","url":"index.html#pipcook_daemon_src","classes":"tsd-kind-variable"},{"id":192,"kind":32,"name":"PIPCOOK_DAEMON_PUBLIC","url":"index.html#pipcook_daemon_public","classes":"tsd-kind-variable"},{"id":193,"kind":32,"name":"PIPCOOK_DAEMON_CONFIG","url":"index.html#pipcook_daemon_config","classes":"tsd-kind-variable"},{"id":194,"kind":32,"name":"PIPCOOK_BOARD","url":"index.html#pipcook_board","classes":"tsd-kind-variable"},{"id":195,"kind":32,"name":"PIPCOOK_BOARD_SRC","url":"index.html#pipcook_board_src","classes":"tsd-kind-variable"},{"id":196,"kind":32,"name":"PIPCOOK_BOARD_BUILD","url":"index.html#pipcook_board_build","classes":"tsd-kind-variable"},{"id":197,"kind":32,"name":"PIPCOOK_TMPDIR","url":"index.html#pipcook_tmpdir","classes":"tsd-kind-variable"},{"id":198,"kind":32,"name":"KERAS_DIR","url":"index.html#keras_dir","classes":"tsd-kind-variable"},{"id":199,"kind":32,"name":"TORCH_DIR","url":"index.html#torch_dir","classes":"tsd-kind-variable"},{"id":200,"kind":32,"name":"PIPCOOK_DATASET","url":"index.html#pipcook_dataset","classes":"tsd-kind-variable"},{"id":201,"kind":32,"name":"PIPCOOK_RUN","url":"index.html#pipcook_run","classes":"tsd-kind-variable"},{"id":202,"kind":32,"name":"PIPCOOK_APP","url":"index.html#pipcook_app","classes":"tsd-kind-variable"},{"id":203,"kind":32,"name":"PIPCOOK_STORAGE","url":"index.html#pipcook_storage","classes":"tsd-kind-variable"},{"id":204,"kind":64,"name":"createAnnotationFile","url":"index.html#createannotationfile","classes":"tsd-kind-function"},{"id":205,"kind":64,"name":"createAnnotationFromJson","url":"index.html#createannotationfromjson","classes":"tsd-kind-function"},{"id":206,"kind":64,"name":"parseAnnotation","url":"index.html#parseannotation","classes":"tsd-kind-function"},{"id":207,"kind":64,"name":"download","url":"index.html#download","classes":"tsd-kind-function"},{"id":208,"kind":64,"name":"downloadAndExtractTo","url":"index.html#downloadandextractto","classes":"tsd-kind-function"},{"id":209,"kind":64,"name":"compressTarFile","url":"index.html#compresstarfile","classes":"tsd-kind-function"},{"id":210,"kind":64,"name":"unZipData","url":"index.html#unzipdata","classes":"tsd-kind-function"},{"id":211,"kind":64,"name":"getModelDir","url":"index.html#getmodeldir","classes":"tsd-kind-function"},{"id":212,"kind":64,"name":"getMetadata","url":"index.html#getmetadata","classes":"tsd-kind-function"},{"id":213,"kind":64,"name":"transformCsv","url":"index.html#transformcsv","classes":"tsd-kind-function"},{"id":214,"kind":64,"name":"convertPascal2CocoFileOutput","url":"index.html#convertpascal2cocofileoutput","classes":"tsd-kind-function"},{"id":215,"kind":64,"name":"getOsInfo","url":"index.html#getosinfo","classes":"tsd-kind-function"},{"id":216,"kind":64,"name":"shuffle","url":"index.html#shuffle","classes":"tsd-kind-function"},{"id":217,"kind":4,"name":"PipelineStatus","url":"enums/pipelinestatus.html","classes":"tsd-kind-enum"},{"id":218,"kind":16,"name":"INIT","url":"enums/pipelinestatus.html#init","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"PipelineStatus"},{"id":219,"kind":16,"name":"RUNNING","url":"enums/pipelinestatus.html#running","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"PipelineStatus"},{"id":220,"kind":16,"name":"SUCCESS","url":"enums/pipelinestatus.html#success","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"PipelineStatus"},{"id":221,"kind":16,"name":"FAIL","url":"enums/pipelinestatus.html#fail","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"PipelineStatus"},{"id":222,"kind":4194304,"name":"PipelineDBParams","url":"index.html#pipelinedbparams","classes":"tsd-kind-type-alias"},{"id":223,"kind":4194304,"name":"PipelineDB","url":"index.html#pipelinedb","classes":"tsd-kind-type-alias"},{"id":224,"kind":256,"name":"RunConfigI","url":"interfaces/runconfigi.html","classes":"tsd-kind-interface"},{"id":225,"kind":1024,"name":"name","url":"interfaces/runconfigi.html#name","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"RunConfigI"},{"id":226,"kind":1024,"name":"plugins","url":"interfaces/runconfigi.html#plugins","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"RunConfigI"},{"id":227,"kind":32,"name":"DATACOLLECT","url":"index.html#datacollect","classes":"tsd-kind-variable"},{"id":228,"kind":32,"name":"DATAACCESS","url":"index.html#dataaccess","classes":"tsd-kind-variable"},{"id":229,"kind":32,"name":"DATAPROCESS","url":"index.html#dataprocess","classes":"tsd-kind-variable"},{"id":230,"kind":32,"name":"MODELLOAD","url":"index.html#modelload","classes":"tsd-kind-variable"},{"id":231,"kind":32,"name":"MODELDEFINE","url":"index.html#modeldefine","classes":"tsd-kind-variable"},{"id":232,"kind":32,"name":"MODELTRAIN","url":"index.html#modeltrain","classes":"tsd-kind-variable"},{"id":233,"kind":32,"name":"MODELEVALUATE","url":"index.html#modelevaluate","classes":"tsd-kind-variable"},{"id":234,"kind":32,"name":"PLUGINS","url":"index.html#plugins","classes":"tsd-kind-variable"},{"id":235,"kind":2097152,"name":"constants","url":"index.html#constants","classes":"tsd-kind-object-literal"},{"id":236,"kind":32,"name":"IMAGE_CLASSIFICATION","url":"index.html#image_classification","classes":"tsd-kind-variable"},{"id":237,"kind":32,"name":"OBJECT_DETECTION","url":"index.html#object_detection","classes":"tsd-kind-variable"},{"id":238,"kind":32,"name":"TEXT_CLASSIFICATION","url":"index.html#text_classification","classes":"tsd-kind-variable"}]};