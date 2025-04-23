import { useRef } from "react";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;