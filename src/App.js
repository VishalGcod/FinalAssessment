import { BodyMain } from "./components/bodyMain";
import { BreadcrumbHeader } from "./components/breadcrumbHeader";
import { SecondHeader } from "./components/secondHeader";
import "./App.css";
import { ApiDisplay } from "./components/apiDisplay";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BreadcrumbHeader />
        <SecondHeader />
        <BodyMain />
        <ApiDisplay />
      </div>
    </Provider>
  );
}

export default App;
