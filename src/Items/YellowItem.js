import AbstractItem from './AbstractItem'
import Game from '../Game';

class YellowItem extends AbstractItem
{
    constructor (x, y) {
        super(x, y, '#ffeb3b')
    }

    onTouch () {
        Game.score += 10
        Game.itemsCount.yellow++
    }
}

export default YellowItem