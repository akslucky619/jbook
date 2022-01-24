import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom";
import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";
import FrontPage from "./components/front-page";
import { useState } from "react";

const App = () => {
  const [isHome, setHome] = useState(true);

  const onClickStarted = (bool: boolean) => {
    setHome(bool);
  };
  console.log(isHome);
  return (
    <Provider store={store}>
      <div>
        {/* {isHome && <FrontPage onClickStarted={onClickStarted} />} */}
        {/* {!isHome &&  */}
        <CellList />
        {/* } */}
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
