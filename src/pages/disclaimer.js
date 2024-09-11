import { Header, ButtonHeader } from "../components"
export function Disclaimer() {
    return (
      <div>
        <ButtonHeader prevPage={"/"} nextPage={"/outline"}/>
        <Header>Disclaimer</Header>
        <p>This site is purely for educational purposes, I don't care how it looks...</p>
        <p>Although as a front-end developer I do find it funny :)</p>
      </div>
    );
  }
  