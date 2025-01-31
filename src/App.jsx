import React from "react";
import Tutorial from "./components/Tutorial/Tutorial";
import { BrowserRouter, Routes, Route } from "react-router";
import Quiz from "./components/Quiz/Quiz";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import Navbar from "./components/Navbar/Navbar";
import Certificate from "./components/Certificate/Certificate";
import User from "./components/User/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/signin" element={<User />} />
          <Route path="/" element={<Tutorial />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/editor" element={<CodeEditor />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
