export default {
    width: 640,
    height: 480,
    player: {},
    shots: [],
    enemies: [],
    bullets: [],
    score: 0,
    items: [],
    itemsCount: {
        blue: 0,
        red: 0,
        yellow: 0
    },
    explosions: [],
    counter: 0,
    stage: 0,
    stageCleared: false,
    stageClearDelay: 0,
    powerBalls: [],
    bgStars: [],
    showStore: false,
    cheat (password) {
        if (password)
        {
            if (password === 'Enjoy coding.')
            {
                this.player.hp = 999999
            }
        }
        else
        {
            console.log('cheat (password...)')
        }
    }
}