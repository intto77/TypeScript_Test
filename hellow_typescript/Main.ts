class Main {
  private name: String = "";
  constructor() {
    this.name = "Main";
  }
}

let NewMain: Main = new Main();

export { NewMain as Main };
