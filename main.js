function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.center();

    poseNet=ml5.poseNet(video,modelloaded);

    poseNet.on('pose',gotposes);
}

function draw()
{
    background("gray");
}

function modelloaded()
{
    console.log("posenet is initialized");
}

function gotposes(results)
{
    if(results.length > 0)
    console.log(results);
}