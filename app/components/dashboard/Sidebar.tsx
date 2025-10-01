"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  Stethoscope,
  FileText,
  Target,
  Wrench,
  CheckCircle,
  Download,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: (v: boolean) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", path: "/" },
    { icon: <ClipboardList className="w-5 h-5" />, label: "Pengkajian", path: "/pengkajian" },
    { icon: <Stethoscope className="w-5 h-5" />, label: "Diagnosa", path: "/diagnosa" },
    { icon: <FileText className="w-5 h-5" />, label: "Rencana Tindakan", path: "/rencana" },
    { icon: <Target className="w-5 h-5" />, label: "Tujuan", path: "/tujuan" },
    { icon: <Wrench className="w-5 h-5" />, label: "Implementasi", path: "/implementasi" },
    { icon: <CheckCircle className="w-5 h-5" />, label: "Evaluasi", path: "/evaluasi" },
    { icon: <Download className="w-5 h-5" />, label: "Laporan", path: "/laporan" },
  ];

  const [activePath, setActivePath] = useState("");

  // Deteksi halaman aktif dari URL saat ini
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
     <div
      className={`bg-white shadow-md h-screen flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
        <div className="bg-white shadow-md transition-all duration-300 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center p-3 border-b relative">
            {!isCollapsed && <h1 className="text-xl font-bold ml-3">🩺 SIAKK</h1>}
            <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`p-2 rounded hover:bg-gray-100 transition-all cursor-pointer ${
                isCollapsed ? "ml-2" : "ml-auto"
            }`}
            >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
            </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item, i) => {
            const isActive =
                activePath === item.path || activePath.startsWith(item.path + "/");

            return (
                <button
                key={i}
                onClick={() => router.push(item.path)}
                className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-300 ${
                    isCollapsed ? "justify-center" : ""
                } ${
                    isActive
                    ? "bg-green-100 text-green-600 font-semibold cursor-pointer"
                    : "hover:bg-gray-100 text-gray-700 cursor-pointer"
                }`}
                >
                {item.icon}
                {!isCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                )}
                </button>
            );
            })}
        </nav>

        {/* Logout */}
        <div className="p-2 space-y-2 border-t">
            <button
            onClick={() => router.push("/auth/login")}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all cursor-pointer duration-300 ${
                isCollapsed ? "justify-center" : ""
            } hover:bg-red-100 text-red-600`}
            >
            <div className={`${!isCollapsed ? "pl-3.5" : ""} flex items-center gap-3`}>
                <LogOut className="w-5 h-5" />
                {!isCollapsed && <span className="text-sm font-medium">Keluar</span>}
            </div>
            </button>
        </div>
        </div>
    </div>
    );
}
