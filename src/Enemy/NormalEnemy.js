import AbstractEnemy from './AbstractEnemy'
import Game from '../Game';
import NormalBullet from '../Bullet/NormalBullet';
import Utils from '../Utils';
import BlueItem from '../Items/BlueItem';

class NormalEnemy extends AbstractEnemy
{
    constructor (x, y) {
        super()

        this.shape = new Rectangle({
            x,
            y,
            width: 32,
            height: 32,
            color: '#f44336'
        })
        this.maxHP = 1
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

        if (this.counter % 60 == 0)
        {
            let angle = Utils.getAngle(this.shape.x, this.shape.y, Game.player.shape.x, Game.player.shape.y)

            Game.bullets.push(new NormalBullet(this.shape.x, this.shape.y, angle, 2, '#f44336'))
        }

        return true
    }
}

export default NormalEnemy