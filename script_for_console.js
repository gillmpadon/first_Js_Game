const prompt = require('prompt-sync')();



var points = 0, score=0, current_pos = 0
var firstTime = true
do{
    console.log("What do you want to do?\nGenerate Move\t[1]\nExit Game\t[0]\n")
    choice = prompt("Decision: ")
    console.log()
    if(choice==0){
        console.log(`Congratulations, you earned ${points} points.`);
        break;
    }
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
    console.log(`Your Move : ${random_num}`);
    console.log((random_num<0)? "You are moving down!":"You are moving up!");

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
   console.log(str)
   console.log((score==-5)? "You lost 5 points "  : "You earned: " + score+" points");
 
   console.log()
   if(points<=0){
    console.log("You are killed")
   }
}while(points>0)
console.log()

