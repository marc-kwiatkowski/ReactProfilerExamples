import { ButtonHeader, Header, Link } from "../components"
export function Purpose() {
    return (
      <div>
        <ButtonHeader prevPage={"/outline"} nextPage={"/install"}/>
        <Header>Purpose</Header>
        <p>The idea is to craft the best user experience..</p>
        <p>Whenever you interact with the site (click a button) you want it to react ASAP</p>
        <img src="homesProfiling.png" alt="Homes.com Performance Profile" />
        <p>If you look at the above example from a search I did on <Link url="Homes.com" text="Homes.com"/>,</p>
        <p>The search took ~343ms and the render calculations took ~115ms..</p>
        <p className="font-medium">Roughly 25% of the time before showing results is from render calculations</p>
        <p>^^Obviously it can't be 0ms, but it can definitely be improved! But How!</p>
        <br></br>
        <p>The purpose of the React Profiler is to make it easier to decipher the performance profiler of your React application</p>
      </div>
    );
  }
  