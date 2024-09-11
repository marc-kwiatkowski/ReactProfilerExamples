import { ButtonHeader, Header, Link } from "../components"
export function ContactMe() {
    return (
      <div>
        <ButtonHeader prevPage={"/inPractice"}/>
        <Header>Thanks if you made it this far, and I hope this site helped you!</Header>
        <p>Feel free to reach out on <Link url="https://www.linkedin.com/in/marc-kwiatkowski/" text="LinkedIn"/> for any questions/comments</p>
      </div>
    );
  }
  