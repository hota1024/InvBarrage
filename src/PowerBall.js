class PowerBall
{
    constructor (x, y) {
        let angle = random(0, 360)

        this.colors = [
            '#f44336',
            '#8bc34a',
            '#03a9f4'
        ]

        this.colorIndex = random(0, this.colors.length - 1)

        this.bg = new Circle({
            x,
            y,
            radius: 16,
            color: 'white'
        })
        this.shape = new Circle({
            x,
            y,
            radius: 14,
            color: this.colors[this.colorIndex]
        })
        this.velocity = {
            x: cos(angle),
            y: sin(angle)
        }
    }

    update () {
        this.shape.color = this.colors[this.colorIndex]

        if (abs(this.shape.x) > maxX)
        {
            this.velocity.x *= -1
            this.onBounced()
        }

        if (abs(this.shape.y) > maxY)
        {
            this.velocity.y *= -1
            this.onBounced()
        }

        this.shape.x += this.velocity.x * 3
        this.shape.y += this.velocity.y * 3

        this.bg.x = this.shape.x
        this.bg.y = this.shape.y

        if (this.shape.touching(Game.player.shape))
        {
            if (this.colorIndex === 0)
            {
                Game.player.level++
            }
            if (this.colorIndex === 1)
            {
                Game.player.hp += 10
            }
            return false
        }

        return true
    }

    onBounced () {
        this.colorIndex++
        this.colorIndex %= this.colors.length
    }

    delete () {
        this.shape.delete()
        this.bg.delete()
    }
}

export default PowerBall