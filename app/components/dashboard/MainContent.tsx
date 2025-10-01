"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function MainContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="shadow-md">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Grafik Aktivitas</h2>
          <p className="text-gray-500">📊 Placeholder untuk chart / grafik.</p>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Pengaturan Cepat</h2>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
              <Settings className="w-5 h-5" /> Kelola Akun
            </button>
            <button className="w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300 flex items-center justify-center gap-2">
              🔄 Sinkronisasi Data
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
