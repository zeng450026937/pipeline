import Pipeline from './pipeline';

import generateReport from './action/generate-report';

import prepareStage from './stage/prepare';
import packStage from './stage/pack';
import buildStage from './stage/build';

const pipeline = new Pipeline('builder');

pipeline.pipe(generateReport);
pipeline.pipe(prepareStage);
pipeline.pipe(packStage);
pipeline.pipe(buildStage);

pipeline.start();
