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
    }
}


function draw()
{
 background('#34a8');
}