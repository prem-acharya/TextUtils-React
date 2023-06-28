import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFroms from "./components/TextFroms";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      types: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-light");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#262525";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextFroms
          showAlert={showAlert}
          heading="Enter Your Text"
          mode={mode}
        />
      </div>
      <About /> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container my-5">
                <TextFroms
                  showAlert={showAlert}
                  heading="Enter Your Text"
                  mode={mode}
                />
              </div>
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
