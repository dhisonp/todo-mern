// const uuid = require("uuidv4");
var randomSentence = require("random-sentence");
var fs = require("fs");

var alphabet = ["a", "b", "c", "d", "e", "f", "g"];

function generateData() {
  const dataCount = 9;
  var dataArray = [];
  for (var i = 0; i < dataCount; i++) {
    const newData = {
      id: i,
      taskName: randomSentence({ min: 3, max: 6 }),
    };
    dataArray.push(newData);
  }
  return dataArray;
}

function writeToFile(data) {
  var fileName = "mockData.json";
  var filePath = "./client/src/data/";
  data = JSON.stringify(data);
  fs.writeFile(filePath + fileName, data, "utf8", function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Data is saved. Check file: " + fileName);
  });
}

const generate = generateData();
writeToFile(generate);
