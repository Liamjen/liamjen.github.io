var gravStrength = 0.01;
var dnaStrength = 0.2;

class Rocket
{
    constructor(x, y)
    {
        this.pos = createVector(x, y);
        this.acceleration = createVector();
        this.velocity = createVector();
        this.gravity = createVector(0, 1);
        this.gravity.setMag(gravStrength);
        this.size = 20;
        this.dna = new DNA(250, dnaStrength);
        this.score = 0;
        this.step = 0;
        this.foundGoal = false;

        this.colorVal = Math.random() * 255;
    }

    update(goal)
    {
        if(this.pos.dist(goal.pos) < 20)
        {
            this.pos = createVector(goal.pos.x, goal.pos.y);
            this.foundGoal = true;
            this.score = 1 + (1 / this.step);
        }
        else if(!this.foundGoal)
        {
            this.velocity = createVector();
            this.velocity.add(this.gravity);
            this.velocity.add(this.dna.dna[this.step++]);
            this.acceleration.add(this.velocity);
            this.pos.add(this.acceleration);
        }
    }

    show()
    {
        push();
        fill(this.colorVal, 255, 255);
        rect(this.pos.x, this.pos.y, this.size / 2, this.size);
        pop();
    }

    setDNA(newDNA)
    {
        this.dna.dna = newDNA.dna.slice();
    }

    setScore(goal)
    {
        if(!this.foundGoal)
        {
            this.score = 1 / this.pos.dist(goal.pos);            
        }
    }
}