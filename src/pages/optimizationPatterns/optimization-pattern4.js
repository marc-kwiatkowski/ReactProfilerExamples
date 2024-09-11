import React from "react"
import { ButtonHeader, Header } from "../../components/"
import { simulateCalculations } from "../../helpers"

const UnderlyingRenderComponent = (props) => {
  simulateCalculations(5)
  return <p>{`some hypothetical component displaying a lot of results: ${props?.text}`}</p>
}
const RenderWrapper = (props) => {
  return <div className="h-10" key={props?.key}>
    <UnderlyingRenderComponent text={props?.text} />
  </div>
}
const DataToDisplay = new Array(150).fill(0);
export function OptimizationPattern4() {
    return (
      <div>
        <ButtonHeader prevPage="/optimizationPattern3Solution" nextPage="/optimizationPattern4Solution" />
        <Header>Optimization Pattern 4</Header>
        <p>This is a harder one to implement.. Want to introduce you to idea at least..</p>
        <p>Hint:scrolling container id is "scrollRoot"</p>
        <div className="flex flex-col">
          {DataToDisplay.map((x, i) => <RenderWrapper key={i} text={i} />)}
        </div>
      </div>
    );
}