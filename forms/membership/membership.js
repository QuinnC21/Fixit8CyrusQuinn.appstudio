let inputName = ""
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnGo.onclick=function(){
  inputName = inptName.value
  if (members.includes(inputName)) {
    lblOutput.value = inputName + " does have a membership." 
    lblOutput.backgroundColor = "#ADD8E6"
  } else{
    lblOutput.value = inputName + " doesn't have a membership." 
    lblOutput.backgroundColor = "#ADD8E6"
    members.push(inputName)
  }
}

btnRe.onclick=function(){
  ChangeForm(welcome)
}