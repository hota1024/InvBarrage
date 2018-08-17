import Utils from "../Utils";
import NormalBullet from "../Bullet/NormalBullet";
import AbstractEnemy from "./AbstractEnemy";

class EndlessNormalEnemy extends AbstractEnemy
{
    constructor (x, y) {
        super()

        this.bg = new Rectangle({
            x,
            y,
            width: 32,
            height: 32,
            color: '#ffeb3b'
        })

        this.shape = new Rectangle({
            x,
            y,
            width: 30,
            height: 30,
            color: '#b71c1c'
        })

        this.maxHP = 4
        this.hp = this.maxHP
    }

    update () {
        super.update()

        this.shape.y -= 1

        if (abs(this.shape.x) > maxX + 32 || abs(this.shape.y) > maxY + 32)
        {
            return false
        }

        if (this.hp <= 0)
        {
            return false
        }

        if (this.counter % 30 == 0)
        {
            let angle = Utils.getAngle(this.shape.x, this.shape.y, Game.player.shape.x, Game.player.shape.y)

            Game.bullets.push(new NormalBullet(this.shape.x, this.shape.y, angle, 4, '#f44336'))
        }

        this.bg.x = this.shape.x
        this.bg.y = this.shape.y

        return true
    }

    delete () {
        super.delete()
        this.bg.delete()
    }
}

export default EndlessNormalEnemy