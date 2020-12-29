// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число

// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
    );
  }
}

const mango = new User('Mango', 2, 20);
mango.getInfo();

const poly = new User('Poly', 3, 17);
poly.getInfo();
