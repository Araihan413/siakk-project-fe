"use client";

import { Bell, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [userName, setUserName] = useState("User");
  const [role, setRole] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    const storedRole = localStorage.getItem("role");
    if (name) setUserName(name);
    if (storedRole) setRole(storedRole);
  }, []);

  return (
    <div className="flex items-center justify-between bg-white shadow px-4 md:px-6 py-3.5">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded hover:bg-gray-100 transition"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        <h2 className="text-xl font-semibold text-gray-700">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {userName.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium hidden sm:inline">
              {userName}
            </span>
            {role && (
              <span className="text-gray-500 text-[8px] hidden sm:inline text-center">
                {role.toUpperCase()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
