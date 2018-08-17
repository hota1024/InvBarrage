import BehaviorType from "./BehaviorType";

class Behavior
{
    constructor (index, type, data) {
        this.index = 0
        this.type = type
        this.data = data
        this.counter = 0

        this.isEvery = false
        this.isOnce = false
    }

    execute () {
        const result = this.executeUnit()
        
        this.counter++

        return this.isOnce || result
    }

    executeUnit () {
        if (this.type === BehaviorType.Action)
        {
            return this.data.action(this)
        }
        if (this.type === BehaviorType.Delay)
        {
            return this.data.time <= this.counter
        }
        if (this.type === BehaviorType.Wait)
        {
            return this.data.condition(this)
        }
    }

    every (ss = {}) {
        this.isEvery = true
        ss = this
        return this
    }

    once () {
        this.isOnce = true
    }
}

export default Behavior