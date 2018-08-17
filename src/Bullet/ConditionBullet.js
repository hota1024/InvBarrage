import AbstractBullet from "./AbstractBullet";

class ConditionBullet extends AbstractBullet
{
    constructor (x, y, angle, speed, color = '', condition) {
        super()

        this.shape = new Circle({
            x,
            y,
            radius: 8,
            color,
        })

        this.angle = angle
        this.speed = speed
        this.condition = condition
        this.started = false
    }

    update () {
        if (this.started === false && this.condition() === false)
        {
            return true
        }

        if (this.condition())
        {
            this.started = true
        }
        

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

    delete () {
        this.shape.delete()
    }
}

export default ConditionBullet