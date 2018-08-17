import AbstractBullet from './AbstractBullet'
import Game from '../Game';

class MegaBullet extends AbstractBullet
{
    constructor (x, y, angle, speed, color = '#E91E63') {
        super()

        this.shape = new Circle({
            x,
            y,
            radius: 16,
            color,
        })

        this.angle = angle
        this.speed = speed
    }

    update () {
        this.shape.x += cos(this.angle) * this.speed
        this.shape.y += sin(this.angle) * this.speed

        if (abs(this.shape.x) > maxX + 16 || abs(this.shape.y) > maxY + 16)
        {
            return false
        }

        if (this.shape.touching(Game.player.shape))
        {
            Game.player.hp -= 1
            return false
        }

        return true
    }
}

export default MegaBullet