import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function MainContent() {
  // Đặt mảng rỗng [] để ban đầu chưa có sinh viên nào
  const [students, setStudents] = useState([]);
  
  const { theme, toggleTheme } = useTheme();

  const handleAdd = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  const handleRemove = (id) => {
    setStudents((prev) => prev.filter((sv) => sv.id !== id));
  };

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={appStyle}>
      <button onClick={toggleTheme} style={{ marginBottom: "20px" }}>
        Chuyển giao diện (Đang là: {theme})
      </button>
      <h2>Quản lý sinh viên (Hooks)</h2>
      <StudentForm onAdd={handleAdd} />
      <hr />
      <StudentList items={students} onRemove={handleRemove} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}