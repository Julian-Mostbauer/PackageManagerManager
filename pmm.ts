export class PMM {
  private static _instance: PMM;

  private constructor() {}

  public static get Instance(): PMM {
    if (!this._instance) {
      this._instance = new PMM();
    }
    return this._instance;
  }

  public test() {
    return 123;
  }
}
