import Pipeline from '../pipeline';
import staging from '../action/staging';

const stage = new Pipeline('build');

stage.pipe(staging('build'));

export default stage;
