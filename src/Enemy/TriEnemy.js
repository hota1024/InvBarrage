import AbstractEnemy from './AbstractEnemy'
import Utils from '../Utils';
import Game from '../Game';
import NormalBullet from '../Bullet/NormalBullet';
import BlueItem from '../Items/BlueItem';

class TriEnemy extends AbstractEnemy
{
    constructor (x, y) {
        super()

        this.shape = new Polygon({
            x,
            y,
            sides: 3,
            length: 16,
            angle: 270,
            color: '#9c27b0'
        })
        this.maxHP = 2
        this.hp = this.maxHP
    }

    update () {
        super.update()

        this.shape.y -= 3

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

            Game.bullets.push(new NormalBullet(this.shape.x, this.shape.y, angle, 5, '#9c27b0'))
        }

        return true
    }
}

export default TriEnemy