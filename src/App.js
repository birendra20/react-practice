// import ClassCounter from "./components/hooks/useState/ClassCounter";
// import ClassCounterTwo from "./components/hooks/useState/ClassCounterTwo";
// import HookCounter from "./components/hooks/useState/HookCounter";
// import HookCounterTwo from "./components/hooks/useState/HookCounterTwo";
// import HookCounterFour from "./components/hooks/useState/UseStateWithArray";
// import HookCounterThree from "./components/hooks/useState/UseStateWithObject";
// import ConditinalRunEffect from "./components/useEffect/ClassConditinal";
// import ConditinallyRunEffect from "./components/useEffect/ConditinallyRunEffect";
// import ClassMouseCleanUp from "./components/useEffect/ClassCleanUp";
// import ClassMouse from "./components/useEffect/ClassRunEffectonlyonce";
// import HookMouseCleanUp from "./components/useEffect/HooksCleanUp";
// import MouseContainerCleanUp from "./components/useEffect/HooksCleanUp";
// import MouseContainer from "./components/useEffect/MouseContainerCleanUpHook";
// import HookMouse from "./components/useEffect/RuneffectOnlyonce";
import IntervalClassCounter from "./components/useEffect/ClassIncorrectDependancy";
import IntervalHookCounter from "./components/useEffect/HooksIncorrectDependancy";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <ClassCounterTwo /> */}
      {/* <HookCounterThree />
      <HookCounterFour /> */}
      {/* <ConditinalRunEffect />
      <ConditinallyRunEffect /> */}
      {/* <ClassMouse />
      <HookMouse />
      <ClassMouseCleanUp />
      <MouseContainer/> */}
      <IntervalHookCounter />
      <IntervalClassCounter />
    </div>
  );
}
