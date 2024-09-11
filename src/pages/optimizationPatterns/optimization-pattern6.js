import React from "react"
import { ButtonHeader, Header, Link } from "../../components/"

export function OptimizationPattern6() {
    return (
      <div>
        <ButtonHeader prevPage="/optimizationPattern5" /*nextPage="/optimizationPattern5Solution"*/ />
        <Header>Optimization Pattern 6</Header>
        <p>This is my last pattern (I couldn't think of an example for this one either :/ )</p>
        <p className="font-medium">React.useContext updates will trigger rerender in entire component, if that component is expensive, consider moving useContext into subcomponents</p>
        <p>I fixed a case before where a useContext was causing our massive container to update when it was really only needed by one thing.</p>
        <p>^^saved ~40ms with a 2 line change moving the React.useContext to a more speficic spot</p>
        <Link href="https://react.dev/reference/react/useContext" text="React.useContext docs if you're interested"/>
      </div>
    );
}