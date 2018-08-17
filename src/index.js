import Player from './Player'
import Game from './Game'
import NormalEnemy from './Enemy/NormalEnemy'
import TriEnemy from './Enemy/TriEnemy'
import PolyEnemy from './Enemy/PolyEnemy'
import Utils from './Utils';
import BackgroundStar from './BackgroundStar'
import PowerBall from './PowerBall';
import EndlessNormalEnemy from './Enemy/EndlessNormalEnemy';
import EndlessTriEnemy from './Enemy/EndlessTriEnemy';
import EndlessPolyEnemy from './Enemy/EndlessPolyEnemy';
import MegaPoloEnemy from './Enemy/MegaPoloEnemy';
import Explosion from './Explosion';
import MegaTeraEnemy from './Enemy/MegaTeraEnemy';

window.Game = Game

fullScreen = false
setBackdropSize(640, 480)

new Rectangle({
    x: 0,
    y: 0,
    width: Game.width,
    height: Game.height
})

let player = new Player
Game.player = player

let gameOverText = new Text({
    text: () => 'GameOver!',
    size: 32,
    color: 'white',
    textAlign: 'center',
    x: 0,
    y: 64,
})

gameOverText.hide()

let gameClearText = new Text({
    text: () => 'GameClear!',
    size: 32,
    color: 'white',
    textAlign: 'center',
    x: 0,
    y: 64,
})

gameClearText.hide()

let scoreText = new Text({
    text: () => '',
    size: 32,
    color: 'yellow',
    x: minX,
    y: maxY - 24,
    textAlign: "left"
})
let progressText = new Text({
    text: () => '',
    size: 18,
    color: 'yellow',
    x: minX,
    y: maxY - 48,
    textAlign: "left"
})

//Debug
Game.stage = 0
// Game.enemies.push(new MegaTeraEnemy(0, maxY + 100))

forever (() => {
    scoreText.text = `Score:${Game.score}`
    progressText.text = `${Math.floor(Game.counter / 3500 * 100)}%`
    scoreText.sendToFront()
    progressText.sendToFront()

    if (player.hp < 1)
    {
        player.hpBar.set(player.hp, player.maxHP)
        gameOverText.sendToFront()
        gameOverText.show()
        return
    }

    player.update()

    Game.shots.forEach(shot => {
        if (shot.update() === false)
        {
            shot.delete()
            Game.shots.remove(shot)
        }
    })
    Game.bullets.forEach(bullet => {
        if (bullet.update() === false)
        {
            bullet.delete()
            Game.bullets.remove(bullet)
        }
    })
    Game.enemies.forEach(enemy => {
        if (enemy.update() === false)
        {
            enemy.delete()
            Game.enemies.remove(enemy)
        }
    })
    Game.items.forEach(item => {
        if (item.update() === false)
        {
            item.delete()
            Game.items.remove(item)
        }
    })
    Game.bgStars.forEach(star => {
        if (star.update() === false)
        {
            star.delete()
            Game.bgStars.remove(star)
        }
    })
    Game.explosions.forEach(explosion => {
        if (explosion.update() === false)
        {
            explosion.delete()
            Game.explosions.remove(explosion)
        }
    })
    Game.powerBalls.forEach(powerBall => {
        if (powerBall.update() === false)
        {
            powerBall.delete()
            Game.powerBalls.remove(powerBall)
        }
    })

    if (Game.stage === 0)
    {
        if (Game.counter < 3000)
        {
            if (random(0, 50) === 0)
            {
                Game.enemies.push(new NormalEnemy(randomX(), maxY))
            }
            if (random(0, 100) === 0)
            {
                Game.enemies.push(new TriEnemy(randomX(), maxY))
            }
            if (random(0, 150) === 0)
            {
                Game.enemies.push(new PolyEnemy(randomX(), maxY))
            }
        }

        if (Game.counter === 1500)
        {
            Game.powerBalls.push(new PowerBall(randomX(), randomY()))
        }

        if (Game.counter === 3250)
        {
            Game.powerBalls.push(new PowerBall(randomX(), randomY()))
        }

        if (Game.counter > 3500 && Game.counter <= 3501)
        {
            Game.enemies.push(new MegaPoloEnemy(0, maxY + 100))
        }

        if (Game.counter > 3501 && Game.enemies.length === 0)
        {
            Game.stageCleared = true
        }

        if (Game.stageCleared)
        {
            if (Game.stageClearDelay > 60 * 10)
            {
                Game.counter = 0
                Game.stage++
                Game.stageCleared = false
                Game.stageClearDelay = false
            }
            else
            {
                Game.stageClearDelay++
            }
        }
    }
    if (Game.stage === 1)
    {
        if (Game.counter < 3000)
        {
            if (random(0, 45) === 0)
            {
                Game.enemies.push(new EndlessNormalEnemy(randomX(), maxY))
            }
            if (random(0, 95) === 0)
            {
                Game.enemies.push(new EndlessTriEnemy(randomX(), maxY))
            }
            if (random(0, 145) === 0)
            {
                Game.enemies.push(new EndlessPolyEnemy(randomX(), maxY))
            }
        }

        if (Game.counter === 3150)
        {
            Game.powerBalls.push(new PowerBall(randomX(), randomY()))
        }

        if (Game.counter > 3360 && Game.counter <= 3361)
        {
            Game.enemies.push(new MegaTeraEnemy(0, maxY + 100))
        }

        if (Game.counter > 3365 && Game.enemies.length === 0)
        {
            gameClearText.show()
            gameClearText.sendToFront()
        }
    }

    if (random(0, 1) === 0)
    {
        Game.bgStars.push(new BackgroundStar(randomX(), maxY, randomColor(), random(1, 4)))
    }

    Game.counter++
})