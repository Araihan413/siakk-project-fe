"use client";

import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import StatCards from "./StatCards";
import MainContent from "./MainContent";


export default function Dashboard() {
  const [userName] = useState("Admin");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="p-4">
          <DashboardHeader userName={userName} />
          <StatCards />
          <MainContent />
        </div>
      </div>
    </div>
  );
}
