import { ButtonHeader, Header } from "../components"
export function Issue() {
    return (
      <div>
        <ButtonHeader prevPage="/profiler101" nextPage="/optimizationPatterns"/>
        <Header>Issue</Header>
        <p>Its important for you to be able to profile your app, but understanding how to optimize is the main difficulty!</p>
        <p>I'm going to try and give some examples of what I've learned over the years..</p>
        <p><span className="font-semibold">Ultimately it's dependent on YOU</span> to learn how your react app works and whether or not the extra calculations are necessary</p>
      </div>
    );
  }
  