import Utils from "../Utils";
import NormalBullet from "../Bullet/NormalBullet";
import AbstractEnemy from "./AbstractEnemy";

class EndlessTriEnemy extends AbstractEnemy
{
    constructor (x, y) {
        super()

        this.bg = new Polygon({
            x,
            y,
            sides: 3,
            length: 16,
            angle: 270,
            color: '#ffeb3b'
        })

        this.shape = new Polygon({
            x,
            y,
            sides: 3,
            length: 14,
            angle: 270,
            color: '#4527a0'
        })

        this.maxHP = 8
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

        if (this.counter % 70 == 0)
        {
            let angle = Utils.getAngle(this.shape.x, this.shape.y, Game.player.shape.x, Game.player.shape.y)

            Game.bullets.push(new NormalBullet(this.shape.x, this.shape.y, angle - 10, 3, '#f44336'))
            Game.bullets.push(new NormalBullet(this.shape.x, this.shape.y, angle, 3, '#f44336'))
            Game.bullets.push(new NormalBullet(this.shape.x, this.shape.y, angle + 10, 3, '#f44336'))
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

export default EndlessTriEnemy