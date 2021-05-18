const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

//var backgroundImg_2, backgroundImg_3, backgroundImg_4,
//backgroundImg_5, backgroundImg_6,backgroundImg_7,backgroundImg_8,
//backgroundImg_9,backgroundImg_10,backgroundImg_11,backgroundImg_12;


var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    //getBackgroundImg()
    
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    // add condition to check if any background image is there to add
    background("lightblue");
    Engine.update(engine);

    // write code to display time in correct format here
    text("TIME RIGHT NOW IS : " +  hour() , 200,200);
    fill("Green");
    
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    
    //change the data in JSON format
    var responseJSON = await response.json();

    // write code slice the datetime
    var datetime = responseJSON.datetime;
    min = datetime.slice(13,16);
    hour = datetime.slice(11,13);
    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 04 && hour <= 06 ){
        bg = loadImage("sunrise1.png");
    }
    else if (hour >=06 && hour <= 08){
        bg = loadImage("sunrise2.png");
    }
    else if (hour >= 08 && hour <= 10){
        bg = loadImage("sunrise3.png");
    }
    else if (hour >= 23 && hour <= 00 ){
        bg = loadImage("sunset1.png");

    }
    else if (hour >=10 && hour <= 22 ){
        bg = loadImage("sunrise4.png");
    }
    else{
        bg = loadImage("sunset12.png");
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    //console.log(backgroundImg);
}
