
var points = 0, score=0, current_pos = 0, img = ""
var firstTime = true, killed = false

function restartGame(){
    window.location.reload(true)
}
function QuitGame(){
    window.alert(`Congratulations, you earned ${points} points.`)
}

function StartGame(choice){
    if(img!=""){
        document.getElementById(img).style.visibility = "hidden"
        img=""
    }
    if(killed){

        window.alert("YOU ARE KILLED!")
        restartGame()
        window.alert("NEW GAME! GOODLUCK")
    }
    console.log("What do you want to do?\nGenerate Move\t[1]\nExit Game\t[0]\n")
   
    console.log("Decision: 1")

    random_num = Math.floor(Math.random() * (4 - (-4) + 1)) + (-4)
    let array = ["W", "S", "S", "D", "B", "D", "W", "B", "B", "D", "W", "S", "W", "D", "B", "D", "S", "W", "B", "S"]
    
    if(firstTime){
        random_num = Math.abs(random_num)
    }

    if(current_pos+random_num>19){
        current_pos = 19
    }else if (current_pos+random_num<0){
        current_pos = 0
    }else{
        current_pos += random_num
    }

    var status = array[current_pos]
 
    switch (status){
    case "B":
        console.log("Safe Place");
        points += 2
        score = 2
    break;
    case "W":
        console.log("You Picked A Wizard");
        points += 3
        score = 3
    break;
    case "S":
        console.log("You Picked A Sword");
        points += 4
        score = 4
    break;
    case "D":
        console.log("A Demon has attack");
        points -= 5
        score  = -5
    break;
}
   firstTime = false
   var str = ""
   for (var i = 0; i < 19; i++){
        if(i == current_pos){
            str += status
        }else{
            str += " |.| "
        }
   }
   img += "arr"+current_pos
   document.getElementById(img).style.visibility = "visible"
   document.getElementById(img).style.opacity = 1;
   document.getElementById("moveid").innerHTML = random_num
   var statusCard = 0
   if(random_num==0){
    statusCard = "Same Position"
   }else if(random_num>0){
    statusCard = "Going Up"
   }else if(random_num<0){
    statusCard = "Going Down"
   }
   document.getElementById("statusid").innerHTML = statusCard
   document.getElementById("pointsid").innerHTML = points
   document.getElementById("scoreid").innerHTML = score>0? "+"+score:score
   console.log()

   if(points<=0){
    killed = true
   }

console.log()
}
