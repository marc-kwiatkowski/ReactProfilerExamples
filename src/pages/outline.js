import { ButtonHeader, Header, SubHeader } from "../components"
import { useNavigate } from "react-router-dom";

export function Outline() {
    const navigate = useNavigate();
    return (
      <div>
        <ButtonHeader prevPage={"/disclaimer"} nextPage={"/purpose"}/>
        <Header>Outline</Header>
        <SubHeader onClick={() => navigate("/purpose")}>Purpose</SubHeader>
        <SubHeader onClick={() => navigate("/install")}>Installation</SubHeader>
        <SubHeader onClick={() => navigate("/profiler101")}>React Profiler 101</SubHeader>
        <SubHeader onClick={() => navigate("/issue")}>Issue with this website</SubHeader>
        <div className="flex items-center">
          <SubHeader onClick={() => navigate("/optimizationPattern1")}>Optimization Patterns</SubHeader>          
          <p>{`<- this is the meat of the site`}</p>
        </div>
        <SubHeader onClick={() => navigate("/contactMe")}>Contact me</SubHeader>
      </div>
    );
  }
  