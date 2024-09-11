import { ButtonHeader, Header, SubHeader } from "../components"
export function ToSummarize() {
    return (
      <div>
        <ButtonHeader prevPage={"/optimizationPattern6"} nextPage={"/otherThings"}/>
        <Header>To Summarize Patterns</Header>
        <p>1. React.memo and React.callback will skip rerenders on parent rerender</p>
        <p>2. Share calculations between components. Empty dependencies to const</p>
        <p>3. Watch for unnecessary props breaking dependency check</p>
        <p>4. If you have a lot you have to show, consider intersection observer</p>
        <p>5. React.useRef will avoid non-UI rerender, but avoid using unless necessary</p>
        <p>6. React.useContext will rerender a container, may be smarter to move it to specific child</p>
        <br></br>
        <SubHeader>TLDR: Avoid extra calculations</SubHeader>
      </div>
    );
  }
  