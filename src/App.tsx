import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/main-layout";
import LeaderBoardPage from "./page/leader-board";
import 'antd/dist/antd.css';
import MainLayoutNew from "layout/main-layout-new";

function App() {
  return (
    <Routes>
      <Route path="main-old/*" element={<MainLayout />} />
      {/* <Route path="/*" element={<MainLayout />} /> */}
      <Route path="leader" element={<LeaderBoardPage />} />

      <Route path="/*" element={<MainLayoutNew />} />
      <Route path="/home" element={<MainLayoutNew />} />
    </Routes>
  );
}

export default App;
