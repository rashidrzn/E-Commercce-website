
setTimeout(cheackTheValue,60000);

function getRadioValue(radioArray) {
    for ( let i = 0; i < radioArray.length; i = i + 1 ) {
        if ( radioArray[i].checked ) {
            return radioArray[i].value;
        }
    }
    return "";
}


function cheackTheValue(myform){

    let score=0;

   
    //for q1.....

    let selectedradiooption1=getRadioValue(myform.q1);
    if(selectedradiooption1==""){
        alert ("you missed the question! ");
    }

    if(selectedradiooption1=="c"){
        document.querySelector("#A1").innerHTML="correct!";
        score=score+2;
            
    }
    else if(selectedradiooption1!='c'){
        score=score-1;
        document.querySelector("#A1").innerHTML="your answer is wrong, the correct answer is c";
        document.querySelector("#A1").classList.add("incorrect") ;
    }

    //for q2.....

    let selectedradiooption2=getRadioValue(myform.q2);
    if(selectedradiooption2=="b"){
        document.querySelector("#A2").innerHTML="correct!";
        score=score+2;
 
    }
    else if(selectedradiooption2!='b'){
        score=score-1;
        document.querySelector("#A2").innerHTML="your answer is wrong, the correct answer is b";
        document.querySelector("#A2").classList.add("incorrect") ;
    }

//for q3.....

    let selectedradiooption3=getRadioValue(myform.q3);
    if(selectedradiooption3=="a"){
        document.querySelector("#A3").innerHTML="correct!";
        score=score+2;

    }
    else if(selectedradiooption3!='a'){
        score=score-1;
        document.querySelector("#A3").innerHTML="your answer is wrong, the correct answer is a";
        document.querySelector("#A3").classList.add("incorrect") ;
    }

//for q4.....

    let selectedradiooption4=getRadioValue(myform.q4);
    if(selectedradiooption4=="d"){
        document.querySelector("#A4").innerHTML="correct!";
        score=score+2;
  
    }
    else if(selectedradiooption4!='d'){
        score=score-1;
        document.querySelector("#A4").innerHTML="your answer is wrong, the correct answer is d";
        document.querySelector("#A4").classList.add("incorrect") ;
    }

//for q5.....

    let selectedradiooption5=getRadioValue(myform.q5);
    if(selectedradiooption5=="b"){
        document.querySelector("#A5").innerHTML="correct!";
        score=score+2;
    }
    else if(selectedradiooption5!='b'){
        score=score-1;
        document.querySelector("#A5").innerHTML="your answer is wrong, the correct answer is b";
        document.querySelector("#A5").classList.add("incorrect") ;
    }

//for q6.....

    let selectedradiooption6=getRadioValue(myform.q6);
    if(selectedradiooption6=="b"){
        document.querySelector("#A6").innerHTML="correct!";
        score=score+2;   
    }
    else if(selectedradiooption6!='b'){
        score=score-1;
        document.querySelector("#A6").innerHTML="your answer is wrong, the correct answer is b";
        document.querySelector("#A6").classList.add("incorrect") ;
    }

//for q7.....

    let selectedradiooption7=getRadioValue(myform.q7);
    if(selectedradiooption7=="a"){
        document.querySelector("#A7").innerHTML="correct!";
        score=score+2;
   
    }
    else if(selectedradiooption7!='a'){
        score=score-1;
        document.querySelector("#A7").innerHTML="your answer is wrong, the correct answer is a";
        document.querySelector("#A7").classList.add("incorrect") ;
    }

//for q8.....
    let selectedradiooption8=getRadioValue(myform.q8);
    if(selectedradiooption8=="b"){
        document.querySelector("#A8").innerHTML="correct!";
        score=score+2;

    }
    else if(selectedradiooption8!='b'){
        score=score-1;
        document.querySelector("#A8").innerHTML="your answer is wrong, the correct answer is b";
        document.querySelector("#A8").classList.add("incorrect") ;
    }

//for q9.....

    let selectedradiooption9=getRadioValue(myform.q9);
    if(selectedradiooption9=="d"){
        document.querySelector("#A9").innerHTML="correct!";
        score=score+2;

    }
    else if(selectedradiooption9!='d'){
        score=score-1;
        document.querySelector("#A9").innerHTML="your answer is wrong, the correct answer is d";
        document.querySelector("#A9").classList.add("incorrect") ;
    }

//for q10.....

    let selectedradiooption10=getRadioValue(myform.q10);
    if(selectedradiooption10=="b"){
        document.querySelector("#A10").innerHTML="correct!";
        score=score+2;

    }
    else if(selectedradiooption10!='b'){
        score=score-1;
        document.querySelector("#A10").innerHTML="your answer is wrong, the correct answer is b";
        document.querySelector("#A10").classList.add("incorrect") ;
    }

/*
    for(let j=1;j<=10;j++){
        if(selectedradiooption(i)==""){
            alert("you missed the question no"+(i));
        }
    }   */

   
    document.getElementById("score").innerHTML="score: " + score ;


    if(score<0){
        document.body.style.backgroundColor="red";
    }
    else if(score>0 && score<=10){
        document.body.style.backgroundColor="#f8c004";
    }
    else if(score>10 && score<=20){
        document.body.style.backgroundColor="#a7ea0f";
    }


    }



// this is for timer ................



let tim;     
let min = (00);
let sec = 60;
let f = new Date();
function f1() {
    f2();
    document.getElementById("starttime").innerHTML = "You started your Exam at : " + f.getHours() + ":" + f.getMinutes(); 
}


function f2() {
    if (parseInt(sec) > 0) {
        sec = parseInt(sec) - 1; 
        document.getElementById("showtime").innerHTML = " Time left   <br/>  " +'0'+ min + " : " + sec + "";
        tim = setTimeout("f2()", 1000);
        
    }
    else {
        if (parseInt(sec) == 0) {
            // min = parseInt(min) - 1;
            window.setTimeout(document.formquiz.submit(), 60*1000);
            cheackTheValue(myform);
            setTimeout("cheackTheValue", 60*1000);
            // if (parseInt(min) == 0) {
                clearTimeout(tim);
               
            }
            else {
                sec = 60;
                document.getElementById("showtime").innerHTML = "Your Left Time  =" + min + " : " + sec + "";
                tim = setTimeout("cheackTheValue", 60*1000);
            }
        }
       
    }
