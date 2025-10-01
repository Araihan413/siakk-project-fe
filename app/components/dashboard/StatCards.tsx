"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Activity, BarChart3 } from "lucide-react";

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <Card className="shadow-md hover:shadow-lg transition">
        <CardContent className="p-6 flex items-center gap-4">
          <Users className="w-10 h-10 text-blue-500" />
          <div>
            <h3 className="text-lg font-semibold">Total Pengguna</h3>
            <p className="text-2xl font-bold">124</p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md hover:shadow-lg transition">
        <CardContent className="p-6 flex items-center gap-4">
          <Activity className="w-10 h-10 text-green-500" />
          <div>
            <h3 className="text-lg font-semibold">Aktivitas Hari Ini</h3>
            <p className="text-2xl font-bold">58</p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md hover:shadow-lg transition">
        <CardContent className="p-6 flex items-center gap-4">
          <BarChart3 className="w-10 h-10 text-yellow-500" />
          <div>
            <h3 className="text-lg font-semibold">Total Laporan</h3>
            <p className="text-2xl font-bold">342</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
