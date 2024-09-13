import { ButtonHeader, Header, SubHeader, Link } from "../components"

export function Install() {
    return (
      <div>
        <ButtonHeader prevPage="/purpose" nextPage="/profiler101" />
        <Header>Installation</Header>
        <p>If you want to read on the profiler yourself, here are <Link url="https://react.dev/reference/react/Profiler" text="The React Docs" /></p>
        <br></br>
        <SubHeader>React DevTools</SubHeader>
        <p>Chrome installation: <Link url="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi" text="Chrome React Developer Tools" /></p>
        <p>Firefox installation: <Link url="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/" text="Firefox React Developer Tools" /></p>
        <p>Edge installation: <Link url="https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil" text="Edge React Developer Tools" /></p>
      </div>
    );
  }