// if tip = x
// tip amount = (0.xx * bill)/people
//total =   (1.xx * bill)/people

let bills = document.querySelector(".bills");
let selectTip = document.querySelector(".select-tip")
let customTip = document.querySelector(".custom-tip")
let tip = "";
let noOfPeople = document.querySelector(".people")
let noOfPeopleValue = noOfPeople.value;
let cost1 = document.querySelector(".cost1")
let cost2 = document.querySelector(".cost2")
let resetButton = document.querySelector(".reset-button")
let msg = document.querySelector(".error-message")
let people = document.querySelector(".people")

window.onload = ()=>{
    reset();
}
selectTip.addEventListener("click", (e)=>{
    if(e.target.value){
    tip = parseInt(e.target.value)/100;
    output();
    output2();
    }
    else{
        return;
    }
})

customTip.addEventListener("keyup", (e)=>{
    if(e.target.value){
        tip = parseInt(e.target.value)/100;
        output();
        output2()
    }else{
        return;
    }
})

bills.addEventListener("keyup", ()=>{
    if(noOfPeopleValue == "" && tip == ""){
        output2()
        return;
    }else{
        output()
    output2()
    }
    
    
} )     

noOfPeople.addEventListener("keyup", ()=>{
    noOfPeopleValue = noOfPeople.value;
    output();
    output2()
    if(noOfPeopleValue == 0){
        msg.classList.add("error-message-active")
        people.classList.add("people-active")
    }else{
        msg.classList.remove("error-message-active")
        people.classList.remove("people-active")
    }
})



resetButton.addEventListener("click", ()=>{
    reset();
})



function output(){
    // for tip
    if(bills.value !== "" && noOfPeopleValue == ""){
        noOfPeopleValue = 1;
        cost1.textContent = cost1.textContent.replace("0.00", `${((bills.value *tip)).toFixed(2)}`);
    }
    else if(noOfPeopleValue!=="" && bills.value !== ""){
        if(noOfPeopleValue == 0){
            cost1.textContent = `0.00`
        }else{
        cost1.textContent = `${((bills.value *tip)/noOfPeopleValue).toFixed(2)}`;
        }
    }
    else if(noOfPeopleValue == "" && tip == !""){
        cost1.textContent = `${((bills.value *tip)).toFixed(2)}`;
    }
    else if (bills.value == "" && tip == ""){
        cost1.textContent = `0.00`
    }
    else{
        cost1.textContent = `${((bills.value *tip)/noOfPeopleValue).toFixed(2)}`;
    }
}

function output2 (){
    if(bills.value !== "" && tip !== ""){
        cost2.textContent = `${((bills.value * (tip + 1) )/ noOfPeopleValue).toFixed(2)}`
    }
    else if(bills.value !== "" && tip == ""){
        if(noOfPeopleValue == ""){
            noOfPeopleValue = 1;
            cost2.textContent = `${((bills.value )/ noOfPeopleValue).toFixed(2)}`
        }
        else if(noOfPeopleValue == 0){
            cost2.textContent = `0.00`
        }else{
            cost2.textContent = `${((bills.value )/ noOfPeopleValue).toFixed(2)}`
        }
    }
}

function reset (){
    tip = "";
    noOfPeople.value = "";
    bills.value =  "";
    customTip.value = ""
    cost1.textContent = `0.00`
    cost2.textContent = `0.00`
}

// i feel this can be greatly improved, it took me alot of thoughts to get it to this stage.
// hopefully i will gaim enough understanding to improve this later on.
