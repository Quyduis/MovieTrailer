import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/main-layout";
import LeaderBoardPage from "./page/leader-board";
import 'antd/dist/antd.css';

function App() {
  return (
    <Routes>
      <Route path="main/*" element={<MainLayout />} />
      <Route path="/*" element={<MainLayout />} />
      <Route path="leader" element={<LeaderBoardPage />} />
    </Routes>
  );
}

export default App;
