import React from "react"
import { ButtonHeader, Header } from "../../components/"
import { simulateCalculations } from "../../helpers"

const style = () => {
    simulateCalculations(100)
    return { backgroundColor: "red"}
}
const styleCalculated = style();

const ComponentThatNeedsCustomStyled = (props) => {
    return <p style={styleCalculated}>{`I'm component ${props?.text}`}</p>
}

export function OptimizationPattern2Solution() {
    return (
      <div>
        <ButtonHeader prevPage="/optimizationPattern2" nextPage="/optimizationPattern3" />
        <Header>Pattern 2 Solution</Header>
        <p>Using a React.Memo is good, but if there are no dependencies it ought be move to a const so it can be shared.</p>
        <p>I guess as a general pattern, we should <span className="font-bold">avoid duplicate work</span></p>
        <p>Another example would be a table cell calculation, if possible it should be calculated once and shared instead of calculated per cell</p>
        <br></br>
        <p>I don't love this example as the style calculation isn't showing in React.Profiler, but you can observe it with performance tab</p>
        <p>Again main take away is to avoid duplicate work.. Move empty dependencies to const and try to share work as possible!</p>
        <ComponentThatNeedsCustomStyled text="1" />
        <ComponentThatNeedsCustomStyled text="2" />
        <ComponentThatNeedsCustomStyled text="3" />
        <ComponentThatNeedsCustomStyled text="4" />
      </div>
    );
}