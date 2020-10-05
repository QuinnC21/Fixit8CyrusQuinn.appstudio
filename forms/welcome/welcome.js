
welcome.onshow=function(){
  lblMessage.value = "Welcome to the app, account " + accountName + ". \n Please select a button." 
  lblMessage.backgroundColor = "#ADD8E6"
}

btnMem.onclick=function(){
  ChangeForm(membership)
}

btnCal.onclick=function(){
  ChangeForm(calculator)
}

btnCon.onclick=function(){
  ChangeForm(twoControls)
}