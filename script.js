const prompt = require('prompt-sync')();
let Myposition = {
    pos : 0,
    get position(){
        return this.pos;
    },
    set position(num){
        this.pos = num
    }
};

 
let playGame = (num,points,firstTime)=>{
    let array = ["W", "S", "S", "D", "B", "D", "W", "B", "B", "D", "W", "S", "W", "D", "B", "D", "S", "W", "B", "S"]
    if(num<0){
        console.log("You are moving down");
    }else{
        console.log("You are moving up");
    }

    
    if(firstTime){
        num = Math.abs(num)
        Myposition.position += num
    }else{
        Myposition.position += num
    }
    current_pos = Myposition.position

    if(current_pos>19){
        Myposition.position = 19
    }else if(current_pos<0){
        Myposition.position = 0
    }
    var status = array[Myposition.position]

 
    switch (status){
        case "B":
            console.log("Safe Place");
            points += 2
        break;
        case "W":
            console.log("You Picked A Wizard");
            points += 3
        break;
        case "S":
            console.log("You Picked A Sword");
            points += 4
        break;
        case "D":
            console.log("A Demon has attack");
            points -= 5
        break;
    }
console.log(    `Status : ${status}`);
console.log(    `Random : ${num}`);
console.log(    `Position: ${current_pos}`);
    console.log(`Score : ${points}`);
    return points 
       
}

var score = 0
firstTime= true
do{
    console.log("What do you want to do?\nGenerate Move\t[1]\nExit Game\t[2]\n")
    var quest = prompt("Decision: ")
    if (quest==1){
        random_num = Math.floor(Math.random() * (4 - (-4) + 1)) + (-4)
        var a = playGame(random_num,score,firstTime)
        firstTime = false
        score +=a
        console.log()
    }else {
        break;
    }
    
}while(score>0)
console.log(`Congratulations your score is ${score}`);
