import { ButtonHeader, Header } from "../components"
export function InPractice() {
    return (
      <div>
        <ButtonHeader prevPage={"/otherThings"} nextPage={"/contactMe"}/>
        <Header>In Practice</Header>
        <p>An actual complex production app would probably be <span className="font-medium">much</span> <span className="font-bold">much</span> <span className="font-black">much</span> harder  to debug than the examples in this website.</p>
        <p className="font-bold">The best teacher is experience!</p>
        <p>Try it out yourself!</p>
        <p>I hope this website showed you to use the React Profiler and will stir your mind with potential optimizations :)</p>
        <br></br>
        <p>Don't assume your website is perfect, check it from time to time!</p>
        <p>I once added an intersection observer that took ~600ms off every search! That significanty slower code was in prod for a year before that!</p>
        <p>You'd be surprised the slowdowns you find when you can profile how expensive rerenders actually are</p>
      </div>
    );
  }
  