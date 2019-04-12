export default class MetaData {
  constructor(pkg = {}) {
    this.pkg = pkg;
  }

  get name() { return this.pkg.name; }

  get description() { return this.pkg.description; }
  
  get homepage() { return this.pkg.homepage; }

  get license() { return this.pkg.license; }
  
  get author() { return this.pkg.author; }

  get build() { return this.pkg.build; }

  get dependencies() { return this.pkg.dependencies; }

  get version() { return this.pkg.version; }

  get productName() { return this.pkg.productName; }

  get main() { return this.pkg.main; }
}
