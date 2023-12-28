import "./App.css";
import Home from "./HomePage/home";
import AnimatedCursor from "react-animated-cursor";
import Snowfall from "react-snowfall";
function App() {
  return (
    <div className="App">
      <Snowfall snowflakeCount={50} />
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="255, 0, 0"
        outerAlpha={0}
        innerScale={0.7}
        outerStyle={{
          border: "1px solid red",
        }}
        outerScale={1.2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Home />
    </div>
  );
}

export default App;
