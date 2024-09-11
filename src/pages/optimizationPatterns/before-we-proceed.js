import { ButtonHeader, Header, Link } from "../../components/"

export function BeforeWeProceed() {
    return (
      <div>
        <ButtonHeader prevPage="/issue" nextPage="/optimizationPattern1" />
        <Header>Before We Proceed</Header>
        <p>I made this site using a development react build so you can <span className="font-bold">Profile it directly!</span></p>
        <p>Please download this locally if you want to try finding the coding solution yourself: <Link url="https://github.com/marc-kwiatkowski/ReactProfilerExamples" text="github page"/></p>
        <p>I'm going to intentionally use bad patterns to show example optimizations.</p>
        <br></br>
        <p>I'll be using a function to artifically slow down render time to make issues more apparent.</p>
        <p>The optimization won't be to remove the slow down ;)</p>
        <br></br>
        <p>I'll try to keep all of the issues you need to look at in one file for ease</p>
        <p>If you look in the code I will have the pattern and solution file seperate</p>
        <br></br>
        <p className="font-semibold">The next pages will take longer to load due to artifical slowing, just wait it out</p>
      </div>
    );
  }