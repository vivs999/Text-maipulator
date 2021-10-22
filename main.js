function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(700,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}
difference = 0;
leftWristX = 0;
rightWristX = 0;
function modelLoaded(){
    console.log("Model is Loaded");
}

function gotPose(results){
    if(results.length>0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background('#0000ff');
    
    textSize(difference);
    fill ('#ffff00');
    text ("Vivaan", 50, 400);
}