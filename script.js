
const currency_one_el=document.getElementById("currency-one");
const currency_two_el=document.getElementById("currency-two");
const rate_el=document.getElementById("rate");

const amount_one_el=document.getElementById("amount-one");
const amount_two_el=document.getElementById("amount-two");




function execute(){
const currency_one=currency_one_el.value;
const currency_two=currency_two_el.value;

const URL="https://open.exchangerate-api.com/v6/latest/" + currency_one;
console.log(URL);

fetch(URL)
    .then(res => res.json())  //res in fetch gives only status and prototype
                          // but not data and data must be fomatted either in json or in other format
     .then(data=>{
     	       console.log(data);

     	 const reqData=data.rates[currency_two];

             rate_el.innerText=`1 ${currency_one} = ${reqData} ${currency_two} `;
     	amount_two_el.value=(reqData*amount_one_el.value).toFixed(2);

     	 console.log(reqData);
          //const allData= data.rates.EUR;
            //console.log(allData);

     });
}


	
	amount_one_el.addEventListener("change",execute);
    currency_one_el.addEventListener("change",execute);
    amount_two_el.addEventListener("change",execute);
    currency_two_el.addEventListener("change",execute);

	execute();