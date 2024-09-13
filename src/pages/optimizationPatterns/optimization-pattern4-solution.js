import React from "react"
import { ButtonHeader, Header } from "../../components/"
import { simulateCalculations } from "../../helpers"

const UnderlyingRenderComponent = (props) => {
  simulateCalculations(5)
  return <p>{`hypothetical children: ${props?.text}`}</p>
}
function RenderWrapper_(props) {
  return <div className="h-10 findMe" id={props?.keyPassThrough}>
    {props?.isIntersecting ? <UnderlyingRenderComponent text={props?.text} /> : null}
  </div>
}
const RenderWrapper = React.memo(RenderWrapper_)
const DataToDisplay = new Array(150).fill(0);
const options = {
    root: document.querySelector("#scrollRoot"),
    rootMargin: "100px", //will "prefetch" stuff just off the page
    threshold: 0,
  };

const StaticCode = <>
    <ButtonHeader prevPage="/optimizationPattern4" nextPage="/optimizationPattern5" />
    <Header>Pattern 4 Solution</Header>
    <p>Ever hear of an "intersection observer"?</p>
    <p>Basically, <span className="font-bold">we only want to render what you see..</span> Simple enough right?</p>
    <p>You'll see this concept used around "infinite scrolling" and "virtualized lists".</p>
    <p>Check out the dom and you'll see the off-screen components with only outer container until scrolled into view.</p>
    <br></br>
    <br></br>
</>

//initial render would have no content on the screen. We should be able to know some will show, will be useful for init render/ssr
const minimumOnScreen = {
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "7": true,
    "8": true,
    "9": true,
    "10": true,
    "11": true,
    "12": true,
    "13": true,
    "14": true,
    "15": true,
    "16": true,
    "17": true,
    "18": true,
    "19": true,
    "20": true,
    "21": true,
    "22": true,
    "23": true,
    "24": true,
    "25": true,
    "26": true
}

export function OptimizationPattern4Solution() {
    const [intersectingItems, setIntersectingItems] = React.useState(minimumOnScreen);
    //I always have to go for a read when I make a new one of these:
    //https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    //Note: It is in a useffect as the html needs to exist before we query for it,
    // we need to render empty containers for this step^^
    React.useEffect(() => {
        const callback = (entries, observer) => {
            setIntersectingItems((prevState) => {
                let anyChange = false;
                let currentIntersecting = {...prevState}; //making a copy for mutation.. Maybe a better way to do this?
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !currentIntersecting?.[entry.target.id]) {
                        anyChange = true;
                        currentIntersecting[entry.target.id] = true     
                    }
                });
                return anyChange ? currentIntersecting : prevState
            })

          };
          const observer = new IntersectionObserver(callback, options);
          const targets = document.querySelectorAll(".findMe");
          targets?.forEach(x=> observer.observe(x))
    }, [])
    return (
      <div>
        {StaticCode}
        <div className="flex flex-col">
          {DataToDisplay.map((x, i) => <RenderWrapper key={i} text={i} keyPassThrough={i} isIntersecting={intersectingItems?.[i.toString()]}/>)}
        </div>
      </div>
    );
}