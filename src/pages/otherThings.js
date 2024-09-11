import { ButtonHeader, Header } from "../components"
export function OtherThings() {
    return (
      <div>
        <ButtonHeader prevPage={"/toSummarize"} nextPage={"/inPractice"}/>
        <Header>Other Things I use Profiler for</Header>
        <p className="font-semibold">Debugging infinite rerender</p>
        <p className="pl-10">It's pretty nifty that you can see the ~exact~ component rerendering and why its rerendering</p>
        <p className="font-semibold">Profiling Changes</p>
        <p className="pl-10">I like to see if the new component I'm using faster, or if the useEffect I add has an extra render</p>
        <p className="font-semibold">Understanding my App better</p>
        <p className="pl-10">If you ever wondered the data flow when something changes, you can see everything that gets rerendered when you click a button</p>
      </div>
    );
  }
  