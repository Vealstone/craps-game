function playCraps() {
    var die1 = 5
    var die2 = 2
    var sum = die1+die2
    document.getElementById("die1Dis").innerHTML=die1;
    document.getElementById("die2Dis").innerHTML=die2;
    document.getElementById("sumDis").innerHTML=sum;
    if (sum == 7 || sum == 11)
    { document.getElementById("resultDis").innerHTML= "Crap-You Lose";
    }
    else if (die1== die2 && die1%2 == 0)
    { document.getElementById("resultDis").innerHTML= "Doubles-You Win"
 
    }
    

}
    