
let bill;

document.querySelector("#bill").addEventListener("change", function(){
    bill = document.querySelector("#bill").value;
    people = document.querySelector("#people").value;
    output();
});

let people; 
document.querySelector("#people").addEventListener("keyup", function(){
    people = document.querySelector("#people").value;
    if (people === 0){
        people.ClassList.toggle("error-message-active");
    }
    bill = document.querySelector("#bill").value;
    output();
});

let tip = document.querySelector(".select-tip");

let tipValue;
tip.addEventListener("click", function(e){
   tipValue = (parseInt(e.target.value))/100 * bill;
   people = document.querySelector("#people").value;
    bill = document.querySelector("#bill").value;
    document.querySelector("#custom-tip").value = 0;
    output();
})

let customTip = document.querySelector("#custom-tip");
customTip.addEventListener("keyup", function(e){
    tipValue = (parseInt(e.target.value))/100 * bill;
   people = document.querySelector("#people").value;
    bill = document.querySelector("#bill").value;
    output();
})
bill = document.querySelector("#bill").value;
people = document.querySelector("#people").value;

output();

let cost1 = document.querySelector(".cost1").innerText.split('$')[1];
let cost2 = document.querySelector(".cost2").innerText.split('$')[1];

let reset = document.querySelector(".reset-button");
reset.addEventListener("click", function(){
    document.querySelector("#bill").value = 0;
    document.querySelector("#people").value = 0;
    document.querySelector("#custom-tip").value = 0;
    document.querySelector(".cost1").innerText.split('$')[1].value = 0;
})

function output(){
    if(isNaN(bill)){
        result = 0;
    }else if(isNaN(people)){
            result = (bill + tipValue).toFixed(2);
        }else if(isNaN(tipValue)){
            result = (bill * people).toFixed(2);
        }else{
            result = ((bill + tipValue) * people).toFixed(2);
        }
        if (isNaN(tipValue) === false){
        document.querySelector(".cost1").innerText = `$${tipValue.toFixed(2)}`;
    }
        document.querySelector(".cost2").innerText = `$${result}`;
}




