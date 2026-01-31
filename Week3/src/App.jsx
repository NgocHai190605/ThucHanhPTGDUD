import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import UserForm from "./components/UserForm";
import DigitalClock from "./components/Digital";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <UserForm />
      </div>
      <div>
        <DigitalClock />
      </div>
    </>
  );
}

export default App;
