import { ButtonHeader, Header } from "../components"
export function MoreDisclaimer() {
    return (
      <div>
        <ButtonHeader prevPage="/optimizationPattern2Solution" nextPage="/optimizationPattern2"/>
        <Header>More Disclaimer</Header>
        <p>So if you have react experience, you know a lot of the re-renders will be trivial and only cost 1-2ms</p>
        <p>The issue is when you're working on a large project, and there's dozens of components taking an extra 1-2ms, and you end up noticeably slowing the page down over time..</p>
        <p>It's not realistic to be given time to hunt down all these optimzations, but</p>
        <span className="font-bold text-xl">My goal is to show better practices for the future</span>
        <br></br>
        <br></br>
        <p>After the last slide, I trust that you should know how to work the React Profiler..</p>
        <p>The following examples will require you to profile yourself, but I will provide the solutions</p>
      </div>
    );
  }
  