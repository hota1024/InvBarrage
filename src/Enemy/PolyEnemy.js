import AbstractEnemy from './AbstractEnemy'
import Game from '../Game';
import NormalBullet from '../Bullet/NormalBullet';
import Utils from '../Utils';
import BlueItem from '../Items/BlueItem';

class PolyEnemy extends AbstractEnemy
{
    constructor (x, y) {
        super()

        this.shape = new Polygon({
            x,
            y,
            sides: 5,
            length: 18,
            angle: 270,
            color: '#ff9800'
        })
        this.maxHP = 4
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

            for (var i = 0; i < 16; i++)
            {
                Game.bullets.push(new NormalBullet(this.shape.x, this.shape.y, angle, 2, '#ff9800'))
                angle += 360 / 16
            }
        }

        return true
    }
}

export default PolyEnemy