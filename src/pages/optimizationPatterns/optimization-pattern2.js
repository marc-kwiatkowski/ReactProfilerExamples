import React from "react"
import { ButtonHeader, Header } from "../../components/"
import { simulateCalculations } from "../../helpers"

const SomeRandomSlowComponent = (props) => {
    simulateCalculations(300)
    return <p>I'm a static component! (profile me when you click the button)</p>
}

export function OptimizationPattern2() {
    const [counter, setCounter] = React.useState(0)
    const onClick = () => {
        setCounter(counter + 1)
    }

    return (
      <div>
        <ButtonHeader prevPage="/optimizationPattern1" nextPage="/optimizationPattern2Solution" />
        <Header>Optimization Pattern 2</Header>
        <p>This should be everyones first example of why to use useMemo and useCallback</p>
        <button onClick={onClick} className="bg-red-500 size-20">Click me</button>
        <p>{`counter: ${counter}`}</p>
        <SomeRandomSlowComponent />
      </div>
    );
}