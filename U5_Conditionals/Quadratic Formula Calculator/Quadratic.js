let elRectLength = document.getElementById("rect-length");
let elRectWidth = document.getElementById("rect-width");
let elRectArea = document.getElementById("rect-area");
let CalcRectArea = document.getElementById("calc-rect-area");
 
let elSphereRadius = document.getElementById("sphere-radius");
let elSphereVolume = document.getElementById("sphere-volume");
let CalcSphereVolume = document.getElementById("calc-sphere-volume");
 
let elCircleRadius = document.getElementById("circle-radius");
let elCircleArea = document.getElementById("circle-area");
let CalcCircleArea = document.getElementById("calc-circle-area");
 
CalcRectArea.oneclick = function(){
   let rectLength = elRectLength.value;
   let rectWidth = elRectWidth.value;
   let rectArea = rectLength*rectWidth;
elRectArea.value = rectArea;
}
 
CalcSphereVolume.oneclick = function(){
   let sphereRadius = elSphereRadius.value;
   let sphereVolume = 4/3*Math.PI*sphereRadius**3;
elSphereVolume.value = sphereVolume;
}
 
CalcCircleArea.oneclick = function(){
   let circleRadius = elCircleRadius.value;
   let CircleArea = Math.PI*circleRadius**2
elCircleArea.value = CircleArea;
}
