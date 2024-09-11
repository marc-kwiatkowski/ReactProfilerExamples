import React from "react"
import { ButtonHeader, Header, Link } from "../../components/"

export function OptimizationPattern5() {
    return (
      <div>
        <ButtonHeader prevPage="/optimizationPattern4Solution" nextPage="/optimizationPattern6" />
        <Header>Optimization Pattern 5</Header>
        <p>I honestly couldn't think of a useful example for this :/</p>
        <p className="font-medium">The idea is that React.useRef can be strategically used to skip rerenders.</p>
        <p>It's more likely to come with bugs than other solutions so don't recommend if you're not familiar!</p>
        <p>Here are some articles if you want to look into it:</p>
        <Link url="https://dev.to/samabaasi/mastering-useref-why-it-doesnt-trigger-re-renders-and-how-it-persists-across-re-renders-1l2b#:~:text=Storing%20Mutable%20Values%20Without%20Re,need%20to%20persist%20between%20renders." text="React.useRef skipping rerender article" />
        <br></br>
        <Link url="https://dev.to/brettthurs10/prevent-re-renders-with-useref-1fgf" text="Another form based example of React.useRef" />
      </div>
    );
}