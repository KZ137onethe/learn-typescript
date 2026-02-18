function getInputSomething() {
  return "1341534";
}

function loadFromDatabase(id) {
  if (Number.isNaN(id))
    return;

  // .... load from database
  return {
    id,
    name: "张三",
    age: 25,
  };
}

let s = getInputSomething();
let id = Number.parseInt(s);

const { name, age } = loadFromDatabase(id);
console.log(name, age);
