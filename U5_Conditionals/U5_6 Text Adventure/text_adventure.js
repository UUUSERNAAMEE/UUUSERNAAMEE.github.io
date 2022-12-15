alert("It's late. You've just finished your work at the lab and are ready to head home.");
let home_or_lab = prompt ("[1] Go home [2] Stay a little longer and explore");
if(home_or_lab == 1) {
let car_or_lab = prompt ("You hastily lock the door and head to your car. Despite the pleasant cool of the night air you, you feel an eerie sense that someone is watching you. Dark shapes begin to appear in the corners of your eyes. You begin to run. [1] Run to the car [2] Run back to the lab");

if(car_or_lab == 1){
alert("You reach the car and get inside. You drive away as quickly as you can. You escape.");

} else if (car_or_lab == 2){
alert("You slam into the door only to find it locked. Searching though your pockets, you realize you dropped the key some 30 ft away. You are consumed by the figures.");
}
}

if (home_or_lab == 2){
let save_or_spare = prompt ("Curiosity overwhelms you. There's something you've always wanted to see. You carefully make your way towards an old and forgotten experiment. You unveil the contents: a small box with a strange creature stuck inside. It cries out in horror at the sight of you. [1] Leave it be [2] Free it");

if (save_or_spare == 1){
alert("You take one long look at the creature. Once, long ago, it might have resembled a human. But that doesn't matter now. You cover the box and never touch it again.");

} else if (save_or_spare == 2){
alert("Though you've freed it from it's prison, it just sits motionless on the floor. You both watch each other for what seems like a long time. Soon, you begin to see light coming from a nearby window. It's already morning. You put the creature back in the box and let it be.");
}
}
