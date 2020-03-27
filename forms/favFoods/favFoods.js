let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
  lstGroupFoods.clear()
  for (i = 0; i<goodFoods.length; i++){
    lstGroupFoods.addItem(goodFoods[i])
    }
}
lstGroupFoods.onclick = function(){
  lblFood.value = `You picked  ${goodFoods[lstGroupFoods.value]}`
}
btnNextForm1.onclick=function(){
  ChangeForm(describeYou)
}
