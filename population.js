var maxFrameTime = 300;

class Population
{
    constructor(rocketNum, goal, startX, startY)
    {
        this.rockets = [];
        this.rocketNum = rocketNum;
        this.goal = goal;
        this.generation = 1;
        this.startX = startX;
        this.startY = startY;

        for(var i = 0; i < this.rocketNum; i++)
        {
            this.rockets[i] = new Rocket(startX, startY);
        }
    }

    update()
    {
        maxFrameTime--;
        if(maxFrameTime > 0)
        {
            for(var i = 0; i < this.rocketNum; i++)
            {
                this.rockets[i].update(this.goal);
            }
        }
        else
        {
            for(var i = 0; i < this.rocketNum; i++)
            {
                this.rockets[i].setScore(this.goal);
            }

            var rocket1 = this.rockets[0];
            var rocket2 = this.rockets[0];

            for(var i = 1; i < this.rocketNum; i++)
            {
                if(this.rockets[i].score > rocket1.score)
                {
                    rocket1 = this.rockets[i];
                    rocket2 = rocket1;
                } 
                else if(this.rockets[i].score > rocket2.score)
                {
                    rocket2 = this.rockets[i];
                }
            }

            this.populate(rocket1, rocket2);
            maxFrameTime = 300;
            this.generation++;
        }
    }

    populate(rocket1, rocket2)
    {
        
        rocket1.dna.splice(rocket2.dna);
        
        this.rockets[0] = new Rocket(this.startX, this.startY);
        this.rockets[0].setDNA(rocket1.dna);
        this.rockets[1] = new Rocket(this.startX, this.startY);
        this.rockets[1].setDNA(rocket2.dna);

        for(var i = 2; i < this.rocketNum; i++)
        {
            this.rockets[i] = new Rocket(this.startX, this.startY);
            this.rockets[i].setDNA(rocket1.dna);
            this.rockets[i].dna.mutate();
        }
    }

    show()
    {
        for(var i = 0; i < this.rocketNum; i++)
        {
            this.rockets[i].show();
        }

        text("Generation: " + this.generation, 15, 15);
    }
}