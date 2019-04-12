import glob from 'globby';
import { copyFile } from 'fs-extra';
import { parallel } from '../parallel';

export default class FilePattern {
  constructor() {
    this.from = process.cwd();
    this.to = './';
    this.patterns = '*/**'; // default pattern
  }

  async copy() {
    const paths = await glob(this.patterns, { cwd: this.from });

    await parallel(paths.map(path => copyFile(path)), 8);
  }
}
