import React from "react"
import { ButtonHeader, Header } from "../../components/"
import { simulateCalculations } from "../../helpers"

const RenderCount1InACoolWay = (props) => {
  simulateCalculations()
  return <p className="bg-pink-300">{`number of pink votes: ${props?.data?.counter1}`}</p>
}
const RenderCount2InACoolWay = (props) => {
  simulateCalculations()
  return <p className="bg-purple-300">{`number of purple votes: ${props?.data?.counter2}`}</p>
}

export function OptimizationPattern3() {
    const [data, setData] = React.useState({counter1: 0, counter2: 0})
    const incrementCounter1 = React.useCallback(() => {
      setData(prevState => {
        return { counter1: prevState.counter1 + 1, counter2: prevState.counter2}
      })
    }, [])
    const incrementCounter2 = React.useCallback(() => {
      setData(prevState => {
        return { counter1: prevState.counter1, counter2: prevState.counter2 + 1}
      })
    }, [])
    const RenderCount1InACoolWayMemod = React.useMemo(() => {
      return <RenderCount1InACoolWay data={data} />
    }, [data])
    const RenderCount2InACoolWayMemod = React.useMemo(() => {
      return <RenderCount2InACoolWay data={data} />
    }, [data])
    return (
      <div>
        <ButtonHeader prevPage="/optimizationPattern2Solution" nextPage="/optimizationPattern3Solution" />
        <Header>Optimization Pattern 3</Header>
        <p>I see this issue a lot with shared component ;(</p>
        <p>Profile the clicks</p>
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