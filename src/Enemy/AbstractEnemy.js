import Game from "../Game";
import BlueItem from "../Items/BlueItem";
import RedItem from "../Items/RedItem";

class AbstractEnemy
{
    constructor () {
        this.shapes = null
        this.counter = 0
    }

    update () {
        this.counter++
    }

    delete () {
        for (var i = 0; i < this.maxHP; ++i)
        {
            if (random(0, 5) == 0)
            {
                Game.items.push(new RedItem(random(this.shape.x - 15, this.shape.x + 15), random(this.shape.y - 15, this.shape.y + 15)))
            }
            Game.items.push(new BlueItem(random(this.shape.x - 15, this.shape.x + 15), random(this.shape.y - 15, this.shape.y + 15)))
        }
        this.shape.delete()
    }

    onShotTouch (shot) {
        this.hp -= shot.atk
    }
}

export default AbstractEnemy