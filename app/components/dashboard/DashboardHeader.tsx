"use client";

import { useEffect, useState } from "react";

export default function DashboardHeader() {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) setUserName(name);
  }, []);

  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800">
        Selamat Datang, {userName} 👋
      </h1>
      <p className="text-gray-600">Ini adalah ringkasan sistem Anda.</p>
    </header>
  );
}
