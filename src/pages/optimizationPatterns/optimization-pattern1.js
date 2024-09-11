import React from "react"
import { ButtonHeader, Header } from "../../components/"
import { simulateCalculations } from "../../helpers"

const SomeRandomSlowComponent = (props) => {
    simulateCalculations(300)
    return <p>I'm a static component! (profile me when you click the button)</p>
}

export function OptimizationPattern1() {
    const [counter, setCounter] = React.useState(0)
    const onClick = () => {
        setCounter(counter + 1)
    }

    return (
      <div>
        <ButtonHeader prevPage="/beforeWeProceed" nextPage="/optimizationPattern1Solution" />
        <Header>Optimization Pattern 1</Header>
        <p>This should be everyones first example of why to use useMemo and useCallback</p>
        <p>Notice how long the button click takes :(</p>
        <button onClick={onClick} className="bg-red-500 size-20">Click me</button>
        <p>{`counter: ${counter}`}</p>
        <SomeRandomSlowComponent />
      </div>
    );
}