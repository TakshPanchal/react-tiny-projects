import Accordian from "./components/accordian/Accordian";
import data from "./components/accordian/data";
import RandomColor from "./components/random-color";

function App() {
  return (
    <div>
      <Accordian data={data} />
      <RandomColor />
    </div>
  );
}

export default App;
