import { Header, ButtonHeader } from "../components"

export function Landing() {
  return (
    <div>
      <ButtonHeader nextPage={"./disclaimer"}/>
      <Header>Hello!</Header>
      <p>This site will be closer to a powerpoint but is aimed at teaching you about the react profiler</p>
      <p>You can use the buttons at the top of the screen to navigate the site^^^</p>
    </div>
  );
}
