import reactLogo from "./assets/react.svg";
import Member from "./components/Member";
import {useState} from "react";
import {useEffect} from "react";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const memberList = [
      {
        firstName: "Peter",
        lastName: "Lind",
        email: "petl@kea.dk",
      },
    ];
    setMembers(memberList);
  }, []);

  return (
    <>
      <header>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>RACE Your React 🎉</h1>
      </header>
      {members.map((member) => (
        <Member member={member} key={member.id} />
      ))}
      {/* <Member member={{ firstName: "Peter", lastName: "Lind" }} /> */}
    </>
  );
}

export default App;
