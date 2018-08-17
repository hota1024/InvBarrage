import Game from "./Game";
import Shot from "./Shot";
import HpBar from './HpBar'

class Player
{
    constructor () {
        this.shape = new Circle({
            radius: 4,
            x: 0,
            y: Game.height / -2 + 48,
            color: 'red'
        })
        this.display = new Circle({
            radius: 16,
            x: 0,
            y: Game.height / -2 + 48,
            color: 'white'
        })
        this.waitShotCount = 5
        this.shotCount = this.waitShotCount
        this.canShot = true
        this.maxHP = 10
        this.hp = this.maxHP
        this.hpBar = new HpBar(0, minY + 16, 400, 10, '#f44336', '#2196F3')

        this.level = 0
    }
    
    move () {
        // Declear
        let velocity = {
            x: 0,
            y: 0
        }
        let speed = 5

        // Low speed
        if (keysDown.includes('SHIFT'))
        {
            speed = 1
            this.shape.sendToFront()
        }
        else
        {
            this.shape.sendToBack()
        }

        // Input
        if (keysDown.includes('LEFT')) velocity.x -= 1
        if (keysDown.includes('RIGHT')) velocity.x += 1
        if (keysDown.includes('UP')) velocity.y += 1
        if (keysDown.includes('DOWN')) velocity.y -= 1

        // Adjustment
        if (Math.abs(velocity.x) > 0 && Math.abs(velocity.y) > 0)
        {
            velocity.x /= Math.sqrt(2)
            velocity.y /= Math.sqrt(2)
        }

        // Move
        this.shape.x += velocity.x * speed
        this.shape.y += velocity.y * speed

        // Clamp
        if (this.shape.x < minX)
        {
            this.shape.x = minX
        }
        if (this.shape.x > maxX)
        {
            this.shape.x = maxX
        }
        if (this.shape.y < minY)
        {
            this.shape.y = minY
        }
        if (this.shape.y > maxY)
        {
            this.shape.y = maxY
        }

        // Move display
        this.display.x = this.shape.x
        this.display.y = this.shape.y
    }

    update () {
        this.move()
        if (this.hp > this.maxHP) this.maxHP = this.hp
        this.hpBar.set(this.hp, this.maxHP)

        if (this.canShot === false)
        {
            this.shotCount++
            if (this.shotCount === this.waitShotCount)
            {
                this.shotCount = 0
                this.canShot = true
            }
        }

        if (keysDown.includes('Z') && this.canShot)
        {
            this.shot()
            this.canShot = false
            this.shotCount = 0
        }
    }

    shot () {
        if (this.level === 0)
        {
            Game.shots.push(new Shot(this.shape.x, this.shape.y, 90, 20))
            return
        }

        if (this.level === 1)
        {
            Game.shots.push(new Shot(this.shape.x + 5, this.shape.y, 90, 20))
            Game.shots.push(new Shot(this.shape.x - 5, this.shape.y, 90, 20))
            return
        }

        if (this.level === 2)
        {
            Game.shots.push(new Shot(this.shape.x + 5, this.shape.y, 90, 20))
            Game.shots.push(new Shot(this.shape.x - 5, this.shape.y, 90, 20))
            Game.shots.push(new Shot(this.shape.x, this.shape.y, -90, 10))
            return
        }

        if (this.level === 3)
        {
            Game.shots.push(new Shot(this.shape.x + 5, this.shape.y, 90, 20))
            Game.shots.push(new Shot(this.shape.x - 5, this.shape.y, 90, 20))
            Game.shots.push(new Shot(this.shape.x + 5, this.shape.y, -90, 15))
            Game.shots.push(new Shot(this.shape.x - 5, this.shape.y, -90, 15))
            return
        }

        if (this.level >= 4)
        {
            Game.shots.push(new Shot(this.shape.x + 5, this.shape.y, 90, 20))
            Game.shots.push(new Shot(this.shape.x - 5, this.shape.y, 90, 20))
            Game.shots.push(new Shot(this.shape.x + 10, this.shape.y - 10, 90, 20))
            Game.shots.push(new Shot(this.shape.x - 10, this.shape.y - 10, 90, 20))
            Game.shots.push(new Shot(this.shape.x + 5, this.shape.y, -90, 15))
            Game.shots.push(new Shot(this.shape.x - 5, this.shape.y, -90, 15))
            return
        }
    }
}

export default Player