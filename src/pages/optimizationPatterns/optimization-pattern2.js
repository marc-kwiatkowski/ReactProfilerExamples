import React from "react"
import { ButtonHeader, Header } from "../../components/"
import { simulateCalculations } from "../../helpers"

const ComponentThatNeedsCustomStyled = (props) => {
    const style = React.useMemo(() => {
        //imagine a spread or map slowing this down
        simulateCalculations(100)
        return { backgroundColor: "red"}
    }, [])
    return <p style={style}>{`I'm component ${props?.text}`}</p>
}

export function OptimizationPattern2() {
    return (
      <div>
        <ButtonHeader prevPage="/moreDisclaimer" nextPage="/optimizationPattern2Solution" />
        <Header>Optimization Pattern 2</Header>
        <p>Profile initial render</p>
        <ComponentThatNeedsCustomStyled text="1" />
        <ComponentThatNeedsCustomStyled text="2" />
        <ComponentThatNeedsCustomStyled text="3" />
        <ComponentThatNeedsCustomStyled text="4" />
      </div>
    );
}