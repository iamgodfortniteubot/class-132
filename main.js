img = "";
status = "";

function preload()
{
img = loadImage('dog_cat.jpg');
}

function setup()
{
canvas = createCanvas(600, 400);
canvas.center();

object_detector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : detecting objects";
}

function modelLoaded()
{
console.log("modeloaded");
status = true;
object_detector.detect(img, gotresults);
}

function gotresults(error, results)
{
if(error)
{
console.log(error);
}
console.log(results);
}

function draw()
{
image(img, 0, 0, 600, 400);
fill('green');
text("dog", 45, 75);
noFill();
stroke('green');
rect(30, 60, 400, 300);

fill('red');
text("cat", 320, 120);
noFill();
stroke('red');
rect(300, 90, 270, 300);
}