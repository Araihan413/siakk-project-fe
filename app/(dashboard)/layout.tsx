"use client";

import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false); 
  return (
    <div className="flex h-screen bg-gray-100 "> 
      {/* === Sidebar (desktop) === */}
      <div className="hidden md:block h-screen">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-xs bg-white/10 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-64 bg-white shadow-md"
            onClick={(e) => e.stopPropagation()} 
          >
            <Sidebar isCollapsed={false} setIsCollapsed={setIsCollapsed} />
          </div>
        </div>
      )}

      {/* === Main Content === */}
      <div className="flex-1 flex flex-col w-full">
        <Navbar userName="Admin" onMenuClick={() => setIsMobileOpen(!isMobileOpen)} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
