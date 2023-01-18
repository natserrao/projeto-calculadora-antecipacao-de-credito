import { Calculator } from "./components/Calculator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Calculator/>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover="true"/>
    </>
  );
}

export default App;
