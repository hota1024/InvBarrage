import AbstractBullet from './AbstractBullet'
import Game from '../Game';

class NormalBullet extends AbstractBullet
{
    constructor (x, y, angle, speed, color = '#E91E63') {
        super()

        this.shape = new Circle({
            x,
            y,
            radius: 6,
            color,
        })

        this.angle = angle
        this.speed = speed
    }

    update () {
        this.shape.x += cos(this.angle) * this.speed
        this.shape.y += sin(this.angle) * this.speed

        if (abs(this.shape.x) > maxX + 6 || abs(this.shape.y) > maxY + 6)
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

export default NormalBullet