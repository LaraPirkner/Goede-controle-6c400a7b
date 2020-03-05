let answers = ['Paris', '8', 'Ijsselmeer'];

function checkIt(){
    var correct = 0;

    /*question 1*/
    var input1 = document.getElementById("answer1").value;
    if (input1 == answers[0]){
        document.getElementById("answer1");
        correct +=1;
        document.getElementById("answer1").style.background = "green";
    }  else {
        document.getElementById("answer1")
        document.getElementById("answer1").style.background = "red";
    }
    
    /*question 2*/
    var input2 = document.getElementById("answer2").value;
    if (input2 == answers[1]){
        document.getElementById("answer2")
        correct +=1;
        document.getElementById("answer2").style.background = "green";
    }   else {
        document.getElementById("answer2")
        document.getElementById("answer2").style.background = "red";
    }    

    /*question 3*/
    var input3 = document.getElementById("answer3").value;
    if (input3 == answers[2]){
        document.getElementById("answer3")
        correct +=1;
        document.getElementById("answer3").style.background = "green";
    }   else {
        document.getElementById("answer3")
        document.getElementById("answer3").style.background = "red";
    }   

    if (correct == 3){
        document.getElementById("points").innerText = "All answers are correct!";
    } else {
        document.getElementById("points").innerText = "Try again";
     }
}
