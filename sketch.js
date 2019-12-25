var population;
var rocketNum = 20;
var screenSize = 900;
var goal;

function setup()
{
    createCanvas(screenSize, screenSize);
    background(95);
    colorMode(HSB);
    noStroke();

    goal = new Goal(screenSize / 2, 20, 20);

    population = new Population(rocketNum, goal, screenSize / 2, screenSize / 2);
    
}

function draw()
{
    background(95);

    population.update();
    population.show(); 

    goal.show();
}