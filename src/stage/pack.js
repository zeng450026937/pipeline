import Pipeline from '../pipeline';
import staging from '../action/staging';
import packElectron from '../action/pack-electron';
import packFile from '../action/pack-file';

const stage = new Pipeline('pack');

stage.pipe(staging('pack'));
stage.pipe(packElectron);
stage.pipe(packFile);

export default stage;
