import AbstractBullet from "./AbstractBullet";

class AccelBullet extends AbstractBullet
{
    constructor (x, y, angle, speed, accel, color = '#E91E63') {
        super()

        this.shape = new Circle({
            x,
            y,
            radius: 6,
            color,
        })

        this.angle = angle
        this.speed = speed
        this.accel = accel
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

        this.speed += this.accel

        return true
    }
}

export default AccelBullet