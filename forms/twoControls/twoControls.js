ddAnim.onclick = function(s) {
    if (typeof(s) == "object") {
        return;
    }
    NSB.MsgBox(`${accountName}'s favorite animal is ${ddAnim.selection}`);
  tstDog_title.innerText = "Custom title";
  tstDog_subtitle.innerText = "Custom Subtitle";
  tstDog.innerHTML = "<b>Dogs > cats. </b>";
  $("#tstDog").toast("show");
}

tstDog.onclick=function(){
  
}

btnRe3.onclick=function(){
  ChangeForm(welcome)
}