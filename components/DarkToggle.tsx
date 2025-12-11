"use client";
import { useState } from "react";

export default function DarkToggle() {
  const [isDark, setIsDark] = useState(false);
  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };
  return (
    <button onClick={toggle} className="px-2 py-1 border rounded">
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
