import Game from "./Game";
import Explosion from './Explosion'

class Shot
{
    constructor (x, y, angle, speed, atk = 1) {
        this.shape = new Rectangle({
            x,
            y,
            width: 8,
            height: 20,
            color: '#2196F3'
        })
        this.angle = angle
        this.speed = speed
        this.atk = atk
    }

    update () {
        let shot = this
        let isDelete = false

        this.shape.x += cos(this.angle) * this.speed
        this.shape.y += sin(this.angle) * this.speed

        if (abs(this.shape.x) > maxX + 64 || abs(this.shape.y) > maxY + 64)
        {
            return false
        }

        Game.enemies.forEach(enemy => {
            if (enemy.shapes)
            {
                enemy.shapes.forEach(shape => {
                    if (shot.shape.touching(shape))
                    {
                        enemy.onShotTouch(this)
                        isDelete = true
                    }
                })
            }
            else
            {
                if (shot.shape.touching(enemy.shape))
                {
                    enemy.onShotTouch(this)
                    isDelete = true
                }
            }
        })

        if (isDelete)
        {
            return false
        }

        return true
    }

    delete () {
        Game.explosions.push(new Explosion(this.shape.x + random(-10, 10), this.shape.y + random(-10, 10), 8))
        this.shape.delete()
    }
}

export default Shot