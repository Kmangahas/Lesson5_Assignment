// Program Name: Seminole Trojans
// Program Topics: Variables, Functions, Arrays, Loops
// Author: Kristopher Mangahas
// Date: 10/09/12
// Filename: seminole.js
// 

//global variables
var daysOfWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var opponents = ["Lightning", "Combines", "Combines", "Combines", "Lightning", "Lightning", "Lightning", "Lightning", "Barn Raisers", "Barn Raisers", "Barn Raisers", "Sodbusters", "Sodbusters", "Sodbusters", "Sodbusters", "(off)", "River Riders", "River Riders", "River Riders", "Big Dippers", "Big Dippers", "Big Dippers", "(off)", "Sodbusters", "Sodbusters", "Sodbusters", "Combines", "Combines", "Combines", "(off)", "(off)"];
var gameLocation = ["away", "away", "away", "away", "home", "home", "home", "home", "home","home","home" ,"away","away", "away", "away", "" ,"away","away","away","away","away","away","","home" ,"home" ,"home" ,"home" ,"home" ,"home" , "", "" ];

//Function to place daysOfWeek values in header row cells
//


function addColumnHeaders(){
  var i = 0;
  
  while (i < 7) {
    document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
    i++;
  }// end of while loop
  
}//end of addColumnHeaders function
//This statement will add the column headers to the page immediantly when the page loads in the browser


//Function to place day of month value in first p element
//Within each table data cell that has an id

function addCalendarDates(){
  var i = 1;
  var paragraphs = "";
  do{
    var tableCell = document.getElementById("08-" + i);
    paragraphs = tableCell.getElementsByTagName("p");
    paragraphs[0].innerHTML = i;
    i++;
  }while (i < 32);
  
}// end of addCalendarDates


//This Function will place the game information in the calendar
//Funcito to place opponents and gameLocaiton values in the map
//second p element within each table data cell that has an id
function addGameInfo(){ 
  
  var paragraphs = "";
  for (var i = 0; i < 31; i++){
    var date = i +1;
    var tableCell = document.getElementById("08-" + date);
    paragraphs = tableCell.getElementsByTagName("p");
    paragraphs[1].innerHTML += opponents[i];
    if (gameLocation[i] === "away") {
       paragraphs[1].innerHTML = "@ ";
       paragraphs[1].innerHTML += opponents[i];
    } //end of if away statement
    
    else if (gameLocation[i] === "home") {
        paragraphs[1].innerHTML = "vs ";
        paragraphs[1].innerHTML += opponents[i];
    }//end of else if
    
  }// end of for loop
  
}//end of addGameInfo



function setUpPage(){
  
  
  addColumnHeaders();
  addCalendarDates();
  addGameInfo();
  
}//end of setUpPage





window.addEventListener("load", setUpPage(), false);