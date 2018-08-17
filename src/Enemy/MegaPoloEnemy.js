import AbstractEnemy from "./AbstractEnemy";
import Game from "../Game";
import MegaBullet from "../Bullet/MegaBullet";
import Utils from "../Utils";
import NormalBullet from "../Bullet/NormalBullet";
import Explosion from "../Explosion";
import BlueItem from "../Items/BlueItem";
import RedItem from "../Items/RedItem";
import YellowItem from "../Items/YellowItem";
import PowerBall from "../PowerBall";

class MegaPoloEnemy extends AbstractEnemy
{
    constructor (x, y) {
        super()
        this.center = new Polygon({
            x,
            y,
            sides: 3,
            length: 100,
            angle: 270,
            color: '#ff9800'
        })
        this.right = new Polygon({
            x: x + 100,
            y: y + 50,
            sides: 3, 
            length: 100,
            angle: 270,
            color: "#ef6c00"
        })
          
        this.left = new Polygon({
            x: x - 100,
            y: y + 50,
            sides: 3, 
            length: 100,
            angle: 270,
            color: "#ef6c00"
        })

        this.hpBarBg = new Rectangle({
            x: 0,
            y: maxY - 20,
            height: 10,
            width: 300,
            color: '#f44336'
        })

        this.hpBar = new Rectangle({
            x: 0,
            y: maxY - 20,
            height: 10,
            width: 300,
            color: '#ff9800'
        })

        this.shapes = [this.center, this.right, this.left]

        this.x = x
        this.y = y

        this.rightMargin = { x: 100, y: 50 }
        this.leftMargin = { x: -100, y: 50 }

        this.isDesotry = false
        this.isFinishDesotry = false
        this.finishCounter = 0

        this.maxHP = 1000
        this.hp = 0
    }

    update () {
        if (this.isDesotry)
        {
            this.destoryUpdate()
        }
        else
        {
            super.update()
            this.rutineUpdate()
        }

        if (this.isFinishDesotry)
        {
            return false
        }

        return true
    }

    rutineUpdate () {
        if (this.counter <= 120)
        {
            this.hp = this.counter / 120 * this.maxHP
            this.y -= 2
        }

        this.shot()

        this.center.x = this.x
        this.center.y = this.y
        this.right.x = this.x + this.rightMargin.x
        this.right.y = this.y + this.rightMargin.y
        this.left.x = this.x + this.leftMargin.x
        this.left.y = this.y + this.leftMargin.y
        
        this.hpBarBg.sendToFront()
        this.hpBar.sendToFront()
        this.hpBar.width = this.hp / this.maxHP * this.hpBarBg.width
        this.hpBar.x = (this.hpBarBg.width - this.hpBar.width) / -2

        if (this.counter > 120 && this.hp < 1)
        {
            this.isDesotry = true
            Game.bullets.forEach(bullet => {
                bullet.delete()
            })
            Game.bullets = []
        }
    }

    destoryUpdate () {
        if (this.finishCounter <= 120)
        {
            this.finishCounter++

            if (this.finishCounter % 10 === 0)
            {
                Game.explosions.push(new Explosion(this.center.x, this.center.y, random(10, 100)))
                Game.explosions.push(new Explosion(this.right.x, this.right.y, random(10, 100)))
                Game.explosions.push(new Explosion(this.left.x, this.left.y, random(10, 100)))
            }

            if (this.finishCounter === 120)
            {
                this.isFinishDesotry = true
            }
        }
    }

    onShotTouch () {
        if (this.counter <= 120)
        {
            return
        }
        this.hp--
    }

    shot () {
        if (this.counter >= 120 && this.counter <= 400)
        {
            if (this.counter % 50 === 0)
            {
                let rightAngle = Utils.getAngle(this.right.x, this.right.y, Game.player.shape.x, Game.player.shape.y)
                let leftAngle = Utils.getAngle(this.left.x, this.left.y, Game.player.shape.x, Game.player.shape.y)

                Game.bullets.push(new MegaBullet(this.right.x, this.right.y, rightAngle, 2, '#9c27b0'))
                Game.bullets.push(new MegaBullet(this.left.x, this.left.y, leftAngle, 2, '#9c27b0'))
            }
        }

        if (this.counter >= 600 && this.counter <= 800)
        {
            if (this.counter % 50 === 0)
            {
                let angle = Utils.getAngle(this.center.x, this.center.y, Game.player.shape.x, Game.player.shape.y)

                Game.bullets.push(new MegaBullet(this.center.x, this.center.y, angle, 7, '#E91E63'))
            }
            this.y--
        }

        if (this.counter >= 900 && this.counter <= 1100)
        {
            if (this.counter % 50 === 0)
            {
                let rightAngle = Utils.getAngle(this.right.x, this.right.y, Game.player.shape.x, Game.player.shape.y)
                let leftAngle = Utils.getAngle(this.left.x, this.left.y, Game.player.shape.x, Game.player.shape.y)

                Game.bullets.push(new MegaBullet(this.right.x, this.right.y, rightAngle, 2, '#9c27b0'))
                Game.bullets.push(new MegaBullet(this.left.x, this.left.y, leftAngle, 2, '#9c27b0'))
            }
            this.y++
        }

        if (this.counter >= 1200 && this.counter <= 1300)
        {
            if (this.counter % 50 === 0)
            {
                let angle = Utils.getAngle(this.center.x, this.center.y, Game.player.shape.x, Game.player.shape.y)

                for (var i = 0; i < 32; ++i)
                {
                    Game.bullets.push(new NormalBullet(this.center.x, this.center.y, angle, 2, '#cddc39'))
                    angle += 360 / 32
                }
            }
            this.x++
        }

        if (this.counter >= 1300 && this.counter <= 1500)
        {
            if (this.counter % 50 === 0)
            {
                let angle = Utils.getAngle(this.center.x, this.center.y, Game.player.shape.x, Game.player.shape.y)

                for (var i = 0; i < 32; ++i)
                {
                    Game.bullets.push(new NormalBullet(this.center.x, this.center.y, angle, 2, '#cddc39'))
                    angle += 360 / 32
                }
            }
            this.x--
        }

        if (this.counter >= 1500 && this.counter <= 1600)
        {
            if (this.counter % 50 === 0)
            {
                let angle = Utils.getAngle(this.center.x, this.center.y, Game.player.shape.x, Game.player.shape.y)

                for (var i = 0; i < 32; ++i)
                {
                    Game.bullets.push(new NormalBullet(this.center.x, this.center.y, angle, 2, '#cddc39'))
                    angle += 360 / 32
                }
            }
            this.x++
        }

        if (this.counter >= 1650 && this.counter <= 1800)
        {
            this.rightMargin.x++
            this.rightMargin.y--
            this.leftMargin.x--
            this.leftMargin.y--
        }

        if (this.counter >= 1900 && this.counter <= 2500)
        {
            this.center.angle = random(0, 360)
            this.left.angle = random(0, 360)
            this.right.angle = random(0, 360)
            
            if (this.counter % 3 === 0)
            {
                Game.bullets.push(new NormalBullet(this.center.x, this.center.y, this.center.angle, 2, '#cddc39'))
                Game.bullets.push(new NormalBullet(this.right.x, this.right.y, this.right.angle, 2, '#cddc39'))
                Game.bullets.push(new NormalBullet(this.left.x, this.left.y, this.left.angle, 2, '#cddc39'))
            }
        }

        if (this.counter >= 2500 && this.counter <= 2501)
        {
            this.center.angle = 270
            this.left.angle = 270
            this.right.angle = 270
        }

        if (this.counter >= 2501 && this.counter <= 2501 + 150)
        {
            this.rightMargin.x--
            this.rightMargin.y++
            this.leftMargin.x++
            this.leftMargin.y++
        }

        if (this.counter > 2501 + 150)
        {
            this.counter = 120
        }
    }

    delete () {
        this.hpBar.delete()
        this.hpBarBg.delete()
        this.shapes.forEach(shape => shape.delete())

        const ItemRange = 100

        for (var i = 0; i < 50; ++i)
        {
            let pos = []
            pos = [random(this.x - ItemRange, this.x + ItemRange), random(this.y - ItemRange, this.y + ItemRange)]
            Game.items.push(new BlueItem(...pos))

            pos = [random(this.x - ItemRange, this.x + ItemRange), random(this.y - ItemRange, this.y + ItemRange)]
            Game.items.push(new RedItem(...pos))

            pos = [random(this.x - ItemRange, this.x + ItemRange), random(this.y - ItemRange, this.y + ItemRange)]
            Game.items.push(new YellowItem(...pos))
        }

        for (var i = 0; i < 3; ++i)
        {
            Game.powerBalls.push(new PowerBall(this.x, this.y))
        }
    }
}

export default MegaPoloEnemy