let inputHeight = document.querySelector('#height');
let inputWeight = document.querySelector('#weight');
let btnSend = document.querySelector('.send');
let btnClean = document.querySelector('.clean');
let listRecord = document.querySelector('.list-unstyled');
let average = document.querySelector('.average');
let arrayBMIrecord = [];
var BMIData = {
    "overThin":{
        class:"text-secondary",
        nameStatus:"體重過輕"
        },
    "normal":{
        class:"text-primary",
        nameStatus: "正常"
        },
    "warning":{
        class:"text-warning",
        nameStatus: "過重"
        },
    "danger":{
        class:"text-danger",
        nameStatus: "危險"
        }
    }

function render(){
    let str = "";
    arrayBMIrecord.forEach(function(item){
        return str+=`<li class=\"${BMIData[item.status].class} card border-primary mb-1\">`+`<div class=\"${BMIData[item.status].class} card-body text-center\">`+
            '<h4 class="mb-2">'+BMIData[item.status].nameStatus+'</h4>'+
            '<p class="mb-0">'+"BMI是 "+item.BMI+'</p>'+
            '<p class="mb-0">'+"身高是 "+item.height+'</p>'+
            '<p class="mb-0">'+"體重是 "+item.weight+'</p>'+
            '</div>'+'</li>'
    })
    listRecord.innerHTML = str;
}

function calculateBMI(){
    let height = inputHeight.value;
    let kg = inputWeight.value;
    let BMI =  Math.round(kg/((height/100)**2))
    let userRecord = {
        height:'',
        weight:'',
        BMI:'',
        status:'',
    }
    userRecord.height = Number(height);
    userRecord.weight = Number(kg);
    userRecord.BMI = BMI;
    if (BMI < 18.5){
        userRecord.status = 'overThing'
    }
    if ( BMI < 18.5 ){
        userRecord.status='overThin'
    } else if (BMI >= 18.5 && BMI <= 23){
        userRecord.status='normal';
    } else if (BMI > 23 && BMI <=35){
        userRecord.status='warning';
    } else {
        userRecord.status='danger';
    }
      // 增加物件到陣列
    arrayBMIrecord.unshift(userRecord);
    
      //渲染畫面
    render();
    render2();
    inputHeight.value = '';
    inputWeight.value = '';
}

function render2(){
    let times = arrayBMIrecord.length;
    let all_bmi = 0;
    arrayBMIrecord.forEach(function(item){
        all_bmi = all_bmi+item.BMI;
    })
    let results = Math.round(all_bmi/times);
    average.innerHTML = `目前紀錄為${times}次，BMI平均為${results}`;
}

btnSend.addEventListener('click', calculateBMI);
btnClean.addEventListener( 'click' , () =>{
    arrayBMIrecord = [];
    listRecord.innerHTML = '';
});


