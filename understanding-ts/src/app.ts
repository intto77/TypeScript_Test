class Person {
  private fullName: String = "";

  constructor(private firstName: String, private lanstName: String) {
    this.fullName = firstName + " " + lanstName;
  }

  public getName(): String {
    return this.fullName;
  }
}

let person: Person = new Person("taewoon", "kim");

console.log(person.getName());
