canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

kiteWidth=70;
kiteHeight=120;
kiteImage="kite-png.png";
kiteX=10;
kiteY=10;

backgroundImage="sky.jpeg";

function add(){
    backgroundImageTag=new Image();
    backgroundImageTag.onload=uploadBackground;
    backgroundImageTag.src=backgroundImage;
    kiteImageTag=new Image();
    kiteImageTag.onload=uploadKite;
    kiteImageTag.src=kiteImage;
}

function uploadBackground(){
    ctx.drawImage(backgroundImageTag,0,0,canvas.width,canvas.height);
}

function uploadKite(){
    ctx.drawImage(kiteImageTag,kiteX,kiteY,kiteWidth,kiteHeight);
}

window.addEventListener("keydown",myKeydown);

function myKeydown(e){
    keyPressed=e.keyCode;
    if (keyPressed=="38"){
        up();
    }
    if (keyPressed=="40"){
        down();
    }
    if (keyPressed=="37"){
        left();
    }
    if (keyPressed=="39"){
        right();
    }
}

function up(){
    if (kiteY>0){
        kiteY=kiteY-10;
        uploadBackground();
        uploadKite();
    }
}

function down(){
    if (kiteY<400){
        kiteY=kiteY+10;
        uploadBackground();
        uploadKite();
    }
}

function left(){
    if (kiteX>0){
        kiteX=kiteX-10;
        uploadBackground();
        uploadKite();
    }
}

function right(){
    if (kiteX<600){
        kiteX=kiteX+10;
        uploadBackground();
        uploadKite();
    }
}