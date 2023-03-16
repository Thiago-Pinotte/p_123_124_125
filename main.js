difference = 0;
rightWristX = 0;
leftWristX = 0;
  function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(400, 400);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPose) 
  }

  function modelLoaded() {
    console.log("modelo inicializado")
  }

  function gotPose(results) {
    if (results.length>0) {
       console.log(results)
       leftWristX=results[0].pose.leftWrist.x;
       rightWristX=results[0].pose.rightWrist.x;
       difference=floor(leftWristX-rightWristX);
       console.log("leftWristX= " + leftWristX + "rightWristX= " + rightWristX + "difference= " + difference);

    }
  }

  function draw() {
     background("orange") 
     document.getElementById("square_side").innerHTML="O tamanho da fonte será: " + difference + "px"
     textSize(difference)
     fill("blue")
     text("Thiago", 50, 300) 
  }