noseX=0;
noseY=0;
difference=0;
LeftWristx=0;
RightWrist=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(900,500);
    canvas. position(600,100);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poses',gotPoses);
}

function draw()
{
    background('#060cbf');
    fill('#60466b');
    stroke('#60466b');
    square(noseX,noseY,difference);
    document.getElementById("square_sides").innerHTML="The width and height of the square will be = " + difference + "px";
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+ noseX + "noseY=" + noseY);
        LeftWristx=results[0].pose.leftWrist.x;
        RightWristx=results[0].pose.rightWrist.x;
        difference=floor(LeftWristx-RightWristx);
        console.log("LeftWristx="+ LeftWristx + "RightWristx=" + RightWristx + "difference=" + difference);
    }
}