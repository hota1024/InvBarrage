import AbstractItem from './AbstractItem'
import Game from '../Game';

class RedItem extends AbstractItem
{
    constructor (x, y) {
        super(x, y, '#8bc34a')
    }

    onTouch () {
        Game.player.hp++
        Game.itemsCount.red++
    }
}

export default RedItem