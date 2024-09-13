import { ButtonHeader, Header, SubHeader, Link } from "../components"
export function Profiler101() {
    return (
      <div>
        <ButtonHeader prevPage="/install" nextPage="/issue"/>
        <Header>React Profiler 101</Header>
        <p>For your reference, here is an old <Link url="https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html" text="React blog on the React Profiler" /></p>
        <p>After installing the React Dev Tools, the "React Components" and "React Profiler" will show in your dev tools.</p>
        <p>Please, click around and get a feel for things yourself!</p>
        <p>I <span className="font-semibold">Strongly</span> recommend enabling the following option:</p>
        <img className="w-full" src="reactProfilerOptions.png" alt="React Profiler Options" />
        <p>^^This is critical for quickly debugging rerender issues as you can see what caused it!</p>
        <p>You will no longer need to use console logs or a useWhatChanged hook (sorry simbathesailor)</p>
        <br></br>
        <SubHeader>How to Record a Profile</SubHeader>
        <img src="reactProfilerRecording.png" alt="React Profiler Recording" />
        <p>The two ways to record are:</p>
        <p>1. Begins recording when clicked and ends when you click that button again</p>
        <p>2. Refreshes the page when clicked and ends when you click that button again (useful for initial render)</p>
        <br></br>
        <p>I personally prefer using the flamegraph tab to debug these issues, here's an example:</p>
        <img className="w-full" src="flamegraphExample.png" alt="Flame Graph Example" />
        <p>I'm sorry you may have to right click and "open in new tab"</p>
        <p>You'll notice each component I used is shown and it's render time.</p>
        <br></br>
        <p>If you're confused why a component render says something like "(.1ms of 3.9ms)",</p>
        <p>You can read it as the current component takes .1ms to render, and all of its children take 3.8ms.</p>
        <p>It doesn't quite add up 1 to 1 when you dive deep, but we are ignoring divs in this so it doesn't clog profile.</p>
        <br></br>
        <p>If you didn't click around:</p>
        <p>The up and down arrows are for "Upload" and "Download"</p>
        <p>The clear button is for clearing the current profile</p>
        <br></br>
        <p>The above example doesn't show it, but in the top right you'll notice "1/1".</p>
        <p>When you have more going on in the page, you'll have more "Render Cycles" and be able to navigate through all of them.</p>
        <br></br>
        <p><span className="font-medium">Note:</span></p>
        <p>You can't profile a production app on purpose as it would slow performance. Profiling is reserved for dev builds, and you could enable them for production with extra work</p>
        <p>I recommend just profiling against dev builds, render perforance may not be 1 to 1, but will scale accordingly</p>
      </div>
    );
  }
  