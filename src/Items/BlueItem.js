import AbstractItem from './AbstractItem'
import Game from '../Game';

class BlueItem extends AbstractItem
{
    constructor (x, y) {
        super(x, y, '#2196F3')
    }

    onTouch () {
        Game.score += 20
        Game.itemsCount.blue++
    }
}

export default BlueItem