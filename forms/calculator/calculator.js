let inputNum1 = ""
let inputNum2 = ""

function Add(x, y){
   return z= x+y
}

function Mult(x, y){
   return z= x*y
}

btnAdd.onclick=function(){
  inputNum1 = inptNum1.value
  inputNum2 = inptNum2.value
  parNum1 = parseInt(inputNum1,10)
  parNum2 = parseInt(inputNum2,10)
  lblResult.value = `${accountName}, the sum of ${inputNum1} plus ${inputNum2} is ${Add(parNum1, parNum2)}`
  lblResult.backgroundColor = "#ADD8E6"
}

btnMult.onclick=function(){
  inputNum1 = inptNum1.value
  inputNum2 = inptNum2.value
  parNum1 = parseInt(inputNum1,10)
  parNum2 = parseInt(inputNum2,10)
  lblResult.value = `${accountName}, the result of ${inputNum1} times ${inputNum2} is ${Mult(parNum1, parNum2)}`
  lblResult.backgroundColor = "#ADD8E6"
}

btnRe2.onclick=function(){
  ChangeForm(welcome)
}
