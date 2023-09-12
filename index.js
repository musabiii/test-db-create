const fs = require("fs");

const answerPath = "./answers2"
const resultPath = "./result2.js"
const dbPath = "./db/db2.txt"

const answers = require(answerPath);

fs.readFile(dbPath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const dataArr = data.split("\n");

  arrObj = [];

  let obj = {};
  obj.options = [];
  idQ = 1;
  idO = 1;
  let div = "";
  dataArr.forEach((el) => {
    if (el!=="\r") {
      el = el.substring(0, el.length - 1);
      if (el[2] == "." && el[2] !== "\t") {
        obj = {};
        obj.title = el;
        obj.options = [];
        obj.id = idQ;
        obj.answerId = answers[idQ];
        idQ = idQ + 1;
        idO = 1;
        obj.div = div;
        arrObj.push(obj);
      } else if (el.substring(0, 20) == "Управление торговлей") {
        div = el;
      } else {
        optionsObj = {
          id: idO,
          title: el,
        };
        idO = idO + 1;
        obj.options.push(optionsObj);
      }
    }
  });
  var json = JSON.stringify(arrObj);

  fs.writeFile(resultPath, json, (err) => {
    if (err) {
      console.error(err);
    }
  });
});
