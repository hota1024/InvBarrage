import AbstractEnemy from "./AbstractEnemy";
import BehaviorManager from "../Behavior/BehaviorManager";
import HpBar from "../HpBar";
import Game from "../Game";
import AccelBullet from "../Bullet/AccelBullet";
import Utils from "../Utils";
import NormalBullet from "../Bullet/NormalBullet";
import ConditionBullet from "../Bullet/ConditionBullet";
import Explosion from "../Explosion";

class MegaTeraEnemy extends AbstractEnemy
{
    constructor (x, y) {
        super()
        window.boss = this

        this.shape0 = new Polygon({
            sides: 7,
            length: 100,
            angle: 270,
            color: '#009688'
        })
        this.shape1 = new Polygon({
            sides: 7,
            length: 100,
            angle: 270,
            color: '#009688'
        })

        this.hpbar = new HpBar(0, maxY - 16, 400, 10, '#f44336', '#009688')

        this.x = x
        this.y = y

        this.shapes = [this.shape0, this.shape1]
        this.behavior = new BehaviorManager
        this.initBehaviors()

        this.maxHP = 1700
        this.hp = 0

        this.bulletCondition = false
    }

    initBehaviors () {
        let enemy = this
        this.behavior.build(builder => {
            builder.action(behavior => enemy.stageIn())
            builder.delay(30)
            enemy.setBattleBehaviors(builder)
        })
    }

    setBattleBehaviors (builder) {
        let enemy = this

        builder.action(behavior => enemy.rotate()).every()
        builder.action(behavior => enemy.pattern0(behavior))
        builder.delay(120)
        builder.action(behavior => enemy.pattern1(behavior))
        builder.delay(120)
        builder.wait(behavior => Game.bullets.length === 0)
        builder.action(behavior => enemy.pattern2(behavior))
        builder.wait(behavior => Game.bullets.length === 0)
        builder.loop(2, behavior => {
            builder.action(behavior => enemy.moveRightWithFire(behavior))
            builder.action(behavior => enemy.pattern3(behavior))
            builder.action(behavior => enemy.moveLeftWithFire(behavior))
            builder.action(behavior => enemy.pattern3(behavior))
            builder.action(behavior => enemy.moveBase(behavior))
            builder.delay(30)
            builder.action(behavior => enemy.bulletCondition = true).once()
            builder.delay(1)
            builder.action(behavior => enemy.bulletCondition = false).once()
            builder.wait(behavior => Game.bullets.length <= 4)
        })
        builder.action(behavior => {
            enemy.behavior = new BehaviorManager
            enemy.behavior.build(builder => {
                this.setBattleBehaviors(builder)
            })
            return true
        })
    }

    stageIn () {
        this.y--
        this.hp = 100 / this.y * this.maxHP

        return this.y <= 100
    }

    pattern0 ({ counter }) {
        if (counter % 2 === 0)
        {
            Game.bullets.push(new AccelBullet(randomX(), maxY, -90, 0, 0.05, '#80cbc4'))
        }
        
        return counter >= 60 * 5
    }

    pattern1 ({ counter }) {
        if (counter % 20 === 0)
        {
            let angle = 0
            angle = Utils.getAngle(this.x - 50, this.y, Game.player.shape.x, Game.player.shape.y)
            Game.bullets.push(new AccelBullet(this.x - 50, this.y, angle, -4, 0.1, '#80cbc4'))
            angle = Utils.getAngle(this.x + 50, this.y, Game.player.shape.x, Game.player.shape.y)
            Game.bullets.push(new AccelBullet(this.x + 50, this.y, angle, -4, 0.1, '#80cbc4'))
            angle = Utils.getAngle(this.x, this.y - 50, Game.player.shape.x, Game.player.shape.y)
            Game.bullets.push(new AccelBullet(this.x, this.y - 50, angle, -4, 0.1, '#80cbc4'))
            angle = Utils.getAngle(this.x, this.y + 50, Game.player.shape.x, Game.player.shape.y)
            Game.bullets.push(new AccelBullet(this.x, this.y + 50, angle, -4, 0.1, '#80cbc4'))
        }
        
        return counter >= 60 * 5
    }

    pattern2 ({ counter }) {
        if (counter % 20 === 0)
        {
            let angle0 = -90 + counter
            let angle1 = -90 - counter
            for (var i = 0; i < 18; ++i)
            {
                let angle = i / 18 * 360
                Game.bullets.push(new NormalBullet(this.x + cos(angle0) * 50, this.y + sin(angle0) * 50, angle, 2, '#3f51b5'))
            }
            for (var i = 0; i < 18; ++i)
            {
                let angle = i / 18 * 360
                Game.bullets.push(new NormalBullet(this.x + cos(angle1) * 50, this.y + sin(angle1) * 50, angle, 2, '#00bcd4'))
            }       
        }
        
        return counter >= 60 * 5
    }

    pattern3 () {
        let enemy = this

        for (var i = 0; i < 60; ++i)
        {
            Game.bullets.push(new ConditionBullet(this.x, this.y, random(0, 360), 4, '#f44336', () => enemy.bulletCondition))
        }

        return true
    }

    moveRightWithFire () {
        this.x += (200 - this.x) / 10
        return 200 - this.x < 1
    }

    moveLeftWithFire () {
        this.x += (-200 - this.x) / 10
        return 200 - abs(this.x) < 1
    }

    moveBase () {
        this.x += (0 - this.x) / 10
        this.y += (100 - this.y) / 10

        return 0 - this.x < 1 && 100 - this.y < 1
    }

    rotate () {
        this.shape0.angle = this.counter
        this.shape1.angle = -this.counter
    }

    update () {
        if (this.isDesotry)
        {
            this.destoryUpdate()
        }
        else
        {
            this.hpbar.set(this.hp, this.maxHP)
    
            this.behavior.update()
    
            let enemy = this
            this.shapes.forEach(shape => {
                shape.x = enemy.x
                shape.y = enemy.y
            })
    
            this.isDesotry = false
            this.isFinishDesotry = false
            this.finishCounter = 0
        }

        if (this.hp <= 0)
        {
            this.isDesotry = true
            Game.bullets.forEach(bullet => {
                bullet.delete()
            })
            Game.bullets = []
        }

        if (this.isFinishDesotry)
        {
            return false
        }
    }
    destoryUpdate () {
        if (this.finishCounter <= 120)
        {
            this.finishCounter++

            if (this.finishCounter % 10 === 0)
            {
                Game.explosions.push(new Explosion(this.x + random(-50, 50), this.y + random(-50, 50), random(10, 100)))
            }

            if (this.finishCounter === 120)
            {
                this.isFinishDesotry = true
            }
        }
    }

    delete () {
        this.hpbar.delete()
        this.shapes.forEach(shape => shape.delete())

        Game.score += 1000

        const ItemRange = 100
    }
}

export default MegaTeraEnemy