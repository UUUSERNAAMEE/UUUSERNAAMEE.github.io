let elFirstCoefficient = document.getElementById("first-coefficient");
let elSecondCoefficient = document.getElementById("second-coefficient");
let elThirdCoefficient = document.getElementById("third-coefficient");
let elQuadraticSolution = document.getElementById("quadratic-solution");
let CalcQuadratic = document.getElementById("calc-quadratic");
 
CalcQuadratic.oneclick = function(){
   let firstCoefficient = elfirstCoefficient.value;
   let secondCoefficient = elsecondCoefficient.value;
   let thirdCoefficient = elthirdCoefficient.value;
   let quadraticSolution = (-secondCoefficient+sqrt(secondCoefficient**2-4(firstCoefficient*thirdCoefficient))/(2*firstCoefficient);
elQuadraticSolution.value = quadraticSolution;
}
