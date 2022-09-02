'use strict';

// console.log('Hello World!');

// let x= 11;


let emsg = 'HELLO'
let stars;

function rating(){
    while(true){
        stars = prompt('Rate us 1-5 Stars!');

        if (stars > 5){alert('Please enter a number 1-5');}
        else if (stars < 1){alert('Please enter a number 1-5');}
        else if (isNaN(stars)){alert('Please enter a number 1-5');}
        else{break;}
    }
    for(let i = 1; i <= stars; i++){
        document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU" alt="star" class="star"/>');
    }}


function greeting (){
    let elitist = prompt('Are you a Fellow Food Elitist?');
    if (elitist == 'yes'){
        alert('Welcome Brethren!!')}
        else if(elitist == 'Yes'){
        alert('Welcome Brethren!!')}
        else if (elitist == 'No'){
        alert('YOU ARE NOT WELCOME HERE!!')}
        else if(elitist == 'no'){
        alert('YOU ARE NOT WELCOME HERE!!')}
        else{}

    }






function eatThis(){
    let answer = prompt('Would you eat this oil soaked mess?');
    let message;
    if (answer == 'yes'){
        message = 'You disgust me.'
        alert(message)}
        else if(answer == 'Yes'){
        message = 'You disgust me.';
        alert(message)}
        else if (answer == 'No'){
        message = 'Thank you for being civilized!';
        alert(message)}
        else if(answer == 'no'){
        message = 'Thank you for being civilized!';
        alert(message)}
        else{}
    }

 function eatThat(){
     let answer = prompt('Would you eat this oil soaked mess?');
     let message;
     if (answer == 'yes'){
            message = 'Congratulations, You chose the right answer.'
            alert(message)}
            else if(answer == 'Yes'){
            message = 'Congratulations, You chose the right answer.';
            alert(message)}
            else if (answer == 'No'){
            message = 'Get better opinions';
            alert(message)}
            else if(answer == 'no'){
            message = 'Get better opinions';
            alert(message)}
            else{}
        }

function  alertSatire(){
    alert ('THIS WEBSITE IS SATIRE!!')
}