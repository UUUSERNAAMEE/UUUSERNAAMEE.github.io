let elFirstCoefficient = document.getElementById("first-coefficient");
let elSecondCoefficient = document.getElementById("second-coefficient");
let elThirdCoefficient = document.getElementById("third-coefficient");

let elQuadraticSolutionA = document.getElementById("quadratic-solution-a");
let elQuadraticSolutionB = document.getElementById("quadratic-solution-b");

let CalcQuadratic = document.getElementById("calc-quadratic");

CalcQuadratic.onclick = function(){
   let firstCoefficient = elfirstCoefficient.value;
   let secondCoefficient = elsecondCoefficient.value;
   let thirdCoefficient = elthirdCoefficient.value;
   let piece = secondCoefficient**2-4*firstCoefficient*thirdCoefficient;
   
   if (piece > 0) {
      let QuadraticSolutionA = (-secondCoefficient + Math.sqrt(piece))/(2*firstCoefficient);
      let QuadraticSolutionB = (-secondCoefficient - Math.sqrt(piece))/(2*firstCoefficient);
   elQuadraticSolutionA.value = QuadraticSolutionA;
   elQuadraticSolutionB.value = QuadraticSolutionB;
      console.log("the value(s) of x are " +QuadraticSolutionA+", " +QuadraticSolutionB+".");
   }
   
   else if (piece == 0) {
      QuadraticSolutionA = QuadraticSolutionB= -secondCoefficient / (2*firstCoefficient);
      elQuadraticSolutionA.value = QuadraticSolutionA;
      elQuadraticSolutionB.value = QuadraticSolutionB;
      console.log("the value(s) of x are " +QuadraticSolutionA+", " +QuadraticSolutionB+".");
   }
   
   else {
      let real = (-secondCoefficient / (2*firstCoefficient));
      let imagionary = (Math.sqrt(-piece) / (2 * firstCoefficient));
      elQuadraticSolutionA.value = QuadraticSolutionA;
      elQuadraticSolutionB.value = QuadraticSolutionB;
      console.log("the value(s) of x are " +QuadraticSolutionA+", " +QuadraticSolutionB+".");
   }
}
