import { BodyMain } from "./components/bodyMain";
import { BreadcrumbHeader } from "./components/breadcrumbHeader";
import { SecondHeader } from "./components/secondHeader";
import './App.css';
function App() {
  return (
    <div className="App">
      <BreadcrumbHeader />
      <SecondHeader/>
      <BodyMain/>
    </div>
  );
}

export default App;
