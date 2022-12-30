let elSphereRadius = document.getElementById("sphere-radius");
let elSphereVolume = document.getElementById("sphere-volume");
let CalcSphereVolume = document.getElementById("calc-sphere-volume");
 
CalcSphereVolume.oneclick = function(){
   let sphereRadius = elSphereRadius.value;
   let sphereVolume = 4/3*Math.PI*sphereRadius**3;
elSphereVolume.value = sphereVolume;
}
