import { BodyMain } from "./components/bodyMain";
import { BreadcrumbHeader } from "./components/breadcrumbHeader";
import { SecondHeader } from "./components/secondHeader";
import './App.css';
import { ReduxApi } from "./components/reduxApi";
import { store } from "./components/reduxApi";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BreadcrumbHeader />
      <SecondHeader/>
      <BodyMain/>
      <ReduxApi/>
      </Provider>
    </div>
  );
}

export default App;
