import Pipeline from '../pipeline';
import staging from '../action/staging';
import resolvePath from '../action/resolve-path';
import resolveMetaData from '../action/resolve-metadata';

const stage = new Pipeline('prepare');

stage.pipe(staging('prepare'));
stage.pipe(resolvePath);
stage.pipe(resolveMetaData);

export default stage;
