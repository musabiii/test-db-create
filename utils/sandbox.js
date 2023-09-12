obj = {};

for (let index = 0; index < 100; index++) {
  obj[index + 1] = rndInt = randomIntFromInterval(1, 6)

}

json = JSON.stringify(obj);
console.log(json);


function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }