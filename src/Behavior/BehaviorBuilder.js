import Behavior from "./Behavior";
import BehaviorType from "./BehaviorType";

class BehaviorBuilder
{
    constructor (manager) {
        this.manager = manager
    }

    add (type, data) {
        let behavior = new Behavior(this.manager.behaviors.length, type, data)
        this.manager.behaviors.push(behavior)
        return behavior
    }

    action (action) {
        return this.add(BehaviorType.Action, {
            action
        })
    }

    delay (time) {
        return this.add(BehaviorType.Delay, {
            time
        })
    }

    wait (condition) {
        return this.add(BehaviorType.Wait, {
            condition
        })
    }

    loop (number, register) {
        for (var i = 0; i < number; ++i)
        {
            register(this)
        }
    }
}

export default BehaviorBuilder