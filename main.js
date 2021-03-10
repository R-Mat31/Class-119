function preload(){}
function setup(){
 canvas = createCanvas(200, 200);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EU1mUdmjZ/model.json", model_loaded);
}
function draw(){
 image(video, 0, 0, 300, 300);
 classifier.classify(video, got_result);
}
function model_loaded(){
 console.log("Model Loaded");
}
function got_result(error, results){
 if(error){
  console.error(error);
 }
 else{
  console.log(results);
  document.getElementById("object").innerHTML = results[0].label;
  document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(2);
 }
}