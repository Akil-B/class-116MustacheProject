function preload(){
    mustache=loadImage('https://i.postimg.cc/XJRpDzdZ/mustache-student-math-favorite-for-friday-the-the-1.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoded);

poseNet.on('pose', gotPosses);
}
function modelLoded(){
    console.log("Posenet is Initialized ");

}
mustacheX=0;
mustacheY=0;
 function gotPosses(results){
    if(results.length>0){
        console.log(results);
        mustacheX=results[0].pose.nose.x;
        console.log("mustache x="+mustacheX );
        mustacheY=results[0].pose.nose.y;
        console.log("mustache y="+mustacheY );
    }
 }

function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,255,255);
    //circle(mustacheX,mustacheY,20);
    image(mustache,mustacheX-35,mustacheY+10,70,40);
}
function take_snapshot(){
    save('My_mustache.png');
}