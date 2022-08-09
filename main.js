function setup() {
    video = creatCapture(Video);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    background('#FF0000');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}