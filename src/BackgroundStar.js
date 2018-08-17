class BackgroundStar
{
    constructor (x, y, color, size) {
        this.shape = new Rectangle({
            x,
            y,
            color,
            width: size / 2,
            height: size,
            // radius: size
        })
        this.size = size
        // this.shape.sendToBack()
    }

    update () {
        this.shape.y -= this.size * 2

        if (abs(this.shape.x) > maxX + this.size || abs(this.shape.y) > maxY + this.size)
        {
            return false
        }

        return true
    }

    delete () {
        this.shape.delete()
    }
}

export default BackgroundStar