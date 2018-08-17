import Game from "../Game";

class AbstractItem
{
    constructor (x, y, color)
    {
        this.shape = new Rectangle({
            x,
            y,
            width: 7,
            height: 10,
            color,
        })
    }

    update () {
        if (Game.player.shape.y > maxY - 200)
        {
            this.shape.x += (Game.player.shape.x - this.shape.x) / 10
            this.shape.y += (Game.player.shape.y - this.shape.y) / 10
        }
        else
        {
            this.shape.y -= 1
        }

        if (abs(this.shape.x) > maxX || abs(this.shape.y) > maxY)
        {
            return false
        }

        if (this.shape.touching(Game.player.shape))
        {
            this.onTouch()
            return false
        }

        return true
    }

    delete () {
        this.shape.delete()
    }

    onTouch () {

    }
}

export default AbstractItem