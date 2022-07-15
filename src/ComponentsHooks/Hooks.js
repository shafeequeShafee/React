import ClassCounterOne from "./ClassCounterOne"
import ClassCounterTwo from "./ClassCounterTwo"
import EffectHooksOne from "./EffectHooksOne"
import EffectHooksTwo from "./EffectHooksTwo"
import HookCounter from "./HookCounter"
import HookCounterFour from "./HookCounterFour"
import HookCounterThree from "./HookCounterThree"
import HookCounterTwo from "./HookCounterTwo"

const Hooks = () => {
    
    return (
        <div>
            <h2>React Hooks</h2>
            <HookCounter/>
            <HookCounterTwo/>
            <HookCounterThree/>
            <HookCounterFour/>
            <ClassCounterOne/>
            <EffectHooksOne/>
            <ClassCounterTwo/>
            <EffectHooksTwo/>
            
        </div>
    )
}
export default Hooks