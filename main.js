noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function preload()
{

}

function setup()
{
canvas=createCanvas(500,500);
canvas.position(600,100);
video=createCapture(VIDEO);
video.size(500,500);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}

function modelLoaded()
{
    console.log("posenet is loaded");
}

function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nosex="+noseX+" ,nosey="+noseY);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
    }
}


function draw()
{
 background('#34a832');
 document.getElementById("square_side").innerHTML="Width and Height of the Square="+difference+"px";
 fill('#3256a8');
 stroke('#3256a8');
 square(noseX,noseY,difference);
}