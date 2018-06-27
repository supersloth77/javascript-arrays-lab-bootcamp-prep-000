const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(addition) {
  kittens.push(addition);
  return kittens;
}

function destructivelyPrependKitten(addition) {
  kittens.unshift(addition);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(addition) {
  newKittens = kittens.push(addition);
  return newKittens;
}
