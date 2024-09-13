import React, { useCallback } from "react"
import { ButtonHeader, Header, Link, SubHeader } from "../../components/"
import { simulateCalculations } from "../../helpers"

const SomeRandomSlowComponent = (props) => {
    simulateCalculations(300)
    return <p>I'm a static component! (profile me when you click the button)</p>
}

export function OptimizationPattern1Solution() {
    const [counter, setCounter] = React.useState(0)
    const onClick = useCallback(() => {
        setCounter((prevState) => prevState + 1)
    }, []);

    const SlowComponent = React.useMemo(() => {
        return <SomeRandomSlowComponent />
    }, [])
    return (
      <div>
        <ButtonHeader prevPage="/optimizationPattern1" nextPage="/moreDisclaimer" />
        <Header>Pattern 1 Solution</Header>
        <p>The solution is to use <Link url="https://react.dev/reference/react/useMemo" text="React.useMemo"/></p>
        <p>Similarly to useMemo, you should look into <Link url="https://react.dev/reference/react/useCallback" text="React.useCallback"/></p>
        <p>Whenever there is a state change or a parent rerender, your react component will get rerendered..</p>
        <p className="font-medium">By putting a useMemo around the expensive component, it will only rerender when the dependency array has a change</p>
        <p>Since we have an empty dependency array, that static component never gets rerendered</p>
        <br></br>
        <SubHeader>In case you were confused by the profiler</SubHeader>
        <p>I wanted you to start profiling before the click, and stop after one singular click</p>
        <img className="w-full" src="profilerComponentHover.png" alt="Profiler Component Hover" />
        <p>Your profile should be the same as the image above^^</p>
        <p>When you hover on those components, it'll give you more details</p>
        <p>Hook 1 may not mean anything to you, which is where the React Components Devtool comes in handy</p>
        <img className="w-full" src="componentsTab.png" alt="Components Tab" />
        <p>From the components tab, you can see the hook1 change is related to a state change in the component "OptimizationPattern2"</p>
        <p>Another sign that often points towards the need of useMemo is when you hover on the child and it shows</p>
        <img className="w-full" src="profilerChildHover.png" alt="Profiler Child Hover" />
        <p>Basically what I said before, that it is rerendering due to a parent rerender</p>
        <br></br>
        <p>Also I'd recommend having the "jsx-no-new-object-as-prop eslint" and "jsx-no-new-function-as-prop" rules turned on for warning about unnecessary object creation with every render</p>
        <br></br>
        <br></br>
        <SubHeader>Notice how quickly the counter responds onClick now</SubHeader>
        <button onClick={onClick} className="bg-red-500 size-20">Click me</button>
        <p>{`counter: ${counter}`}</p>
        {SlowComponent}
      </div>
    );
}