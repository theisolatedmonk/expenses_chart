const balamt = document.getElementById('balamt');
const totalamt = document.getElementById('totalamt');
const percent = document.getElementById('percent');

const mondayDiv = document.getElementById('mon1');
const tuedayDiv = document.getElementById('tue1');
const wednesdayDiv = document.getElementById('wed1');
const thursdayDiv = document.getElementById('thu1');
const fridayDiv = document.getElementById('fri1');
const saturdayDiv = document.getElementById('sat1');
const sundayDiv = document.getElementById('sun1');

const mondayAmt = document.getElementById('mon_amt');
const tuesdayAmt = document.getElementById('tue_amt');
const wednesdayAmt = document.getElementById('wed_amt')
const thursdayAmt = document.getElementById('thu_amt');
const fridayAmt = document.getElementById('fri_amt');
const saturdayAmt = document.getElementById('sat_amt');
const sundayAmt = document.getElementById('sun_amt');


const days = [mondayDiv, tuedayDiv, wednesdayDiv, thursdayDiv, fridayDiv, saturdayDiv, sundayDiv]
const daysAmt = [mondayAmt, tuesdayAmt, wednesdayAmt, thursdayAmt, fridayAmt, saturdayAmt, sundayAmt]

const d = new Date();
let weekday = d.getDay()

fetch('\data.json')
    .then(response => response.json())
    .then(data => {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i].amount === 'number') {
                sum += data[i].amount;
            }
        }
        totalamt.innerHTML = `$ ${sum}`;
        // console.log(sum);


        for (let i = 0; i < days.length; i++) {
            days[i].style.height = `${data[i].amount}%`
            days[weekday - 1].style.backgroundColor = "skyblue"
        }

        for (let i = 0; i < daysAmt.length; i++) {
            daysAmt[i].innerHTML = `${data[i].amount}`
        }
        // console.log(data[0].amount);

        // console.log(mondayDiv.)

        // days[0].style.height = `${data[0].amount}px`



    })
    .catch(error => console.error(error));