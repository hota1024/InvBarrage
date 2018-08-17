import BehaviorBuilder from "./BehaviorBuilder";

class BehaviorManager
{
    constructor () {
        this.behaviors = []
        this.everyBehaviors = []
        this.index = 0
        window.bm = this
    }

    update () {
        this.everyBehaviors.forEach(behavior => behavior.execute())

        const behavior = this.behaviors[this.index]

        if (!behavior)
        {
            return
        }

        if (behavior.isEvery)
        {
            this.everyBehaviors.push(behavior)
            this.index++
        }
        else if (behavior.execute() === true)
        {
            console.log('Executed')
            this.index++
        }
    }

    build (f) {
        f(new BehaviorBuilder(this))
    }
}

export default BehaviorManager