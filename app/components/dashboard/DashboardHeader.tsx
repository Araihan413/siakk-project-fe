"use client";

type Props = {
  userName: string;
};

export default function DashboardHeader({ userName }: Props) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800">
        Selamat Datang, {userName} 👋
      </h1>
      <p className="text-gray-600">Ini adalah ringkasan sistem Anda.</p>
    </header>
  );
}
