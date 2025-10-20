import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton({ isCollapsed }: { isCollapsed: boolean }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });

      localStorage.removeItem("role");
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      router.push("/auth/login");
    }
  };

  return (
    <div className="p-2 space-y-2 border-t">
      <button
        onClick={handleLogout}
        className={`flex w-full p-3 text-red-600 rounded-lg transition-all duration-300 cursor-pointer items-center gap-3 hover:bg-red-100 ${
          isCollapsed ? "justify-center" : ""
        }`}
      >
        <div
          className={`flex items-center gap-3 ${!isCollapsed ? "pl-3.5" : ""}`}
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && (
            <span className="text-sm font-medium">Keluar</span>
          )}
        </div>
      </button>
    </div>
  );
}
