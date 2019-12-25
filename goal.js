class Goal
{
    constructor(x, y, size)
    {
        this.x = x;
        this.y = y;
        this.size = size;

        this.pos = createVector(x, y);
    }

    show()
    {
        rect(this.x, this.y, this.size, this.size);
    }
}