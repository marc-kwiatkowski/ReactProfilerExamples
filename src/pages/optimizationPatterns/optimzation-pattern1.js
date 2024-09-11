import { ButtonHeader, Header, Link } from "../../components/"

export function OptimizationPattern1() {
    return (
      <div>
        <ButtonHeader prevPage="/issue" nextPage="/optimizationPattern2" />
        <Header>Before We Proceed</Header>
        <p>I made this site using a development react build so you can Profile it directly!</p>
        <p>Please download this locally if you want to try finding the coding solution yourself: <Link url="https://github.com/marc-kwiatkowski/ReactProfilerExamples" text="github page"/></p>
        <p>I'm going to intentionally use bad patterns to show example optimizations.</p>
        <br></br>
        <p>I'll be using a function to artifically slow down render time to make issues more apparent.</p>
        <p>The optimization won't be to remove the slow down ;)</p>
      </div>
    );
  }