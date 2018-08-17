class Explosion
{
    constructor (x, y, size) {
        this.shape = new Circle({
            x,
            y,
            radius: size,
            color: 'rgba(244,67,54, 0.5)'
        })
        this.counter = 0
    }

    update () {
        this.counter++

        if (this.counter >= 30)
        {
            return false
        }

        return true
    }

    delete () {
        this.shape.delete()
    }
}

export default Explosion