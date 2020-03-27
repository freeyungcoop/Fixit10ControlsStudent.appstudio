var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  selExcerises.clear()
  for(i=0; i <= exercises.length - 1; i++)
    selExercises.addItem(ecercises[i])
}

selExercises.onfocusout=function(){
  var message = "You decided to choose:"
  for (i=0; i<=selExercises.text.length - 1; i++)
    message = message + " " + selExercises.text[i]
    NSB.MsgBox(message)
}



btnFavFood.onclick=function(){
  ChangeForm(favFoods)
}
