import AbstractEnemy from './AbstractEnemy'
import Game from '../Game';
import NormalBullet from '../Bullet/NormalBullet';
import Utils from '../Utils';
import BlueItem from '../Items/BlueItem';

class EndlessPolyEnemy extends AbstractEnemy
{
    constructor (x, y) {
        super()

        this.bg = new Polygon({
            x,
            y,
            sides: 5,
            length: 18,
            angle: 270,
            color: '#ffeb3b'
        })
        this.shape = new Polygon({
            x,
            y,
            sides: 5,
            length: 16,
            angle: 270,
            color: '#ef6c00'
        })
        this.maxHP = 16
        this.hp = this.maxHP
    }

    update () {
        super.update()

        this.shape.y -= 2

        if (abs(this.shape.x) > maxX + 32 || abs(this.shape.y) > maxY + 32)
        {
            return false
        }

        if (this.hp <= 0)
        {
            return false
        }

        if (this.counter % 120 == 0)
        {
            let angle = Utils.getAngle(this.shape.x, this.shape.y, Game.player.shape.x, Game.player.shape.y)

            for (var i = 0; i < 32; i++)
            {
                Game.bullets.push(new NormalBullet(this.shape.x, this.shape.y, angle, 2, '#ff9800'))
                angle += 360 / 32
            }
        }

        this.bg.x = this.shape.x
        this.bg.y = this.shape.y

        return true
    }

    delete () {
        super.delete()
        this.bg.delete()
        this.shape.delete()
    }
}

export default EndlessPolyEnemy