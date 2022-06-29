"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
"use strict";

var inputHeight = document.querySelector('#height');
var inputWeight = document.querySelector('#weight');
var btnSend = document.querySelector('.send');
var btnClean = document.querySelector('.clean');
var listRecord = document.querySelector('.list-unstyled');
var average = document.querySelector('.average');
var arrayBMIrecord = [];
var BMIData = {
  "overThin": {
    "class": "text-secondary",
    nameStatus: "體重過輕"
  },
  "normal": {
    "class": "text-primary",
    nameStatus: "正常"
  },
  "warning": {
    "class": "text-warning",
    nameStatus: "過重"
  },
  "danger": {
    "class": "text-danger",
    nameStatus: "危險"
  }
};

function render() {
  var str = "";
  arrayBMIrecord.forEach(function (item) {
    return str += "<li class=\"".concat(BMIData[item.status]["class"], " card border-primary mb-1\">") + "<div class=\"".concat(BMIData[item.status]["class"], " card-body text-center\">") + '<h4 class="mb-2">' + BMIData[item.status].nameStatus + '</h4>' + '<p class="mb-0">' + "BMI是 " + item.BMI + '</p>' + '<p class="mb-0">' + "身高是 " + item.height + '</p>' + '<p class="mb-0">' + "體重是 " + item.weight + '</p>' + '</div>' + '</li>';
  });
  listRecord.innerHTML = str;
}

function calculateBMI() {
  var height = inputHeight.value;
  var kg = inputWeight.value;
  var BMI = Math.round(kg / Math.pow(height / 100, 2));
  var userRecord = {
    height: '',
    weight: '',
    BMI: '',
    status: ''
  };
  userRecord.height = Number(height);
  userRecord.weight = Number(kg);
  userRecord.BMI = BMI;

  if (BMI < 18.5) {
    userRecord.status = 'overThing';
  }

  if (BMI < 18.5) {
    userRecord.status = 'overThin';
  } else if (BMI >= 18.5 && BMI <= 23) {
    userRecord.status = 'normal';
  } else if (BMI > 23 && BMI <= 35) {
    userRecord.status = 'warning';
  } else {
    userRecord.status = 'danger';
  } // 增加物件到陣列


  arrayBMIrecord.unshift(userRecord); //渲染畫面

  render();
  render2();
  inputHeight.value = '';
  inputWeight.value = '';
}

function render2() {
  var times = arrayBMIrecord.length;
  var all_bmi = 0;
  arrayBMIrecord.forEach(function (item) {
    all_bmi = all_bmi + item.BMI;
  });
  var results = Math.round(all_bmi / times);
  average.innerHTML = "\u76EE\u524D\u7D00\u9304\u70BA".concat(times, "\u6B21\uFF0CBMI\u5E73\u5747\u70BA").concat(results);
}

btnSend.addEventListener('click', calculateBMI);
btnClean.addEventListener('click', function () {
  arrayBMIrecord = [];
  listRecord.innerHTML = '';
});
//# sourceMappingURL=all.js.map
