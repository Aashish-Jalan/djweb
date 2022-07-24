song1 = "";
song2 = "";
lwX = 0;
lwY = 0;
rwX = 0;
rwY = 0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);

  
}

function gotPoses(results)
{
   if(results.length >0)
   console.log(results);
   lwX = results[0].pose.leftWrist.x;
   lwY = results[0].pose.leftWrist.y;
   console.log("LeftX = " + lwX + " LeftY = " + lwY );

   rwX = results[0].pose.rightWrist.x;
   rwY = results[0].pose.rightWrist.y;
   console.log("RightX = " + rwX + " RightY = " + rwY );

}

function modelLoaded()
{
    console.log("running");
}

function draw()
{
    image(video, 0 , 0 , 600 , 500);
}
