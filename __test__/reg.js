function copyRegExp (regExp) {
  console.log(regExp.global);

  let attrs = '';
  if (regExp.global) attrs += 'g';
  if (regExp.ignoreCase) attrs += 'i';
  if (regExp.multiline) attrs += 'm';
  let newRegExp = new RegExp(regExp, attrs);
  newRegExp.lastIndex = regExp.lastIndex;
  return newRegExp;
}
// copyRegExp(/\d/igm)

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
console.log(person.name);
console.log(person.isHuman);

// expected output: "My name is Matthew. Am I human? true"