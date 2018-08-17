class HpBar
{
    constructor (x, y, width, height, bgColor, barColor) {
        this.bg = new Rectangle({
            x,
            y,
            width,
            height,
            color: bgColor,
        })

        this.bar = new Rectangle({
            x,
            y,
            width,
            height,
            color: barColor,
        })
    }

    set (hp, maxHP) {
        this.bar.width = hp / maxHP * this.bg.width
        this.bar.x = (this.bg.width - this.bar.width) / -2 - this.bg.x
    }

    delete () {
        this.bg.delete()
        this.bar.delete()
    }
}

export default HpBar