import { ButtonHeader, Header, SubHeader } from "../components"
export function Outline() {
    return (
      <div>
        <ButtonHeader prevPage={"/disclaimer"} nextPage={"/purpose"}/>
        <Header >Outline</Header>
        <SubHeader>Purpose</SubHeader>
        <SubHeader>Installation</SubHeader>
        <SubHeader>React Profiler 101</SubHeader>
        <SubHeader>The Hard Part</SubHeader>
        <SubHeader>Optimization Patterns</SubHeader>
      </div>
    );
  }
  