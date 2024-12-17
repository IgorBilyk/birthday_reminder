import "./App.css";

import { useSelector } from "react-redux";

/* import { Filter } from "./components/filter/Filter"; */
import { Main } from "./components/main/Main";
import { Alert } from "./components/main/alert/Alert";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  const isOpen = useSelector((state) => state.birthday.alert);

  return (
    <div className="App">
      <Navbar />
      {/* <Filter /> */}
      <Main />
      <Sidebar />
      {isOpen && <Alert />}
    </div>
  );
}

export default App;
