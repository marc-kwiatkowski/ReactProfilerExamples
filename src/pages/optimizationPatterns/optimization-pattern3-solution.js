import React from "react"
import { ButtonHeader, Header } from "../../components/"
import { simulateCalculations } from "../../helpers"

const RenderCount1InACoolWay = (props) => {
  simulateCalculations()
  return <p className="bg-pink-300">{`number of pink votes: ${props?.data}`}</p>
}
const RenderCount2InACoolWay = (props) => {
  simulateCalculations()
  return <p className="bg-purple-300">{`number of purple votes: ${props?.data}`}</p>
}

export function OptimizationPattern3Solution() {
    const [counter1, setCounter1] = React.useState(0);
    const [counter2, setCounter2] = React.useState(0);
    const incrementCounter1 = React.useCallback(() => {
        setCounter1(prevState => {
        return prevState + 1
      })
    }, [])
    const incrementCounter2 = React.useCallback(() => {
        setCounter2(prevState => {
        return prevState + 1
      })
    }, [])
    const RenderCount1InACoolWayMemod = React.useMemo(() => {
      return <RenderCount1InACoolWay data={counter1} />
    }, [counter1])
    const RenderCount2InACoolWayMemod = React.useMemo(() => {
      return <RenderCount2InACoolWay data={counter2} />
    }, [counter2])
    return (
      <div>
        <ButtonHeader prevPage="/optimizationPattern3" nextPage="/optimizationPattern4" />
        <Header>Pattern 3 Solution</Header>
        <p>There are cases where objects make sense, but I've seen them misused a lot in production code.</p>
        <p className="font-medium">If any attribute of that object changes, memo does a shallow check and will void anything that has it as a dependency.</p>
        <p>In this case we could've passed the count value directly, but most commonly I'll see an issue similar to this where data is being spread around and causing unneeded rerenders</p>
        <div className="flex gap-4">
          <button className="bg-slate-100 hover:bg-slate-200" onClick={incrementCounter1}>Click me if Pink is cooler</button>
          {RenderCount1InACoolWayMemod}
        </div>
        <div className="flex gap-4">
          <button className="bg-slate-100 hover:bg-slate-200" onClick={incrementCounter2}>Click me if Purple is cooler</button>
          {RenderCount2InACoolWayMemod}
        </div>
      </div>
    );
}