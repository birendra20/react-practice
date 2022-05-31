import ClassCounter from "./components/hooks/useState/ClassCounter";
import ClassCounterTwo from "./components/hooks/useState/ClassCounterTwo";
import HookCounter from "./components/hooks/useState/HookCounter";
import HookCounterTwo from "./components/hooks/useState/HookCounterTwo";
import HookCounterThree from "./components/hooks/useState/UseStateWithObject";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <ClassCounterTwo />
      <HookCounterThree />
    </div>
  );
}
