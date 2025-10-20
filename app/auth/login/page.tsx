// app/page.tsx

"use client";

import {useRouter} from "next/navigation";
// Sesuaikan impor path
import LoginForm from "../../components/auth/LoginForm"; 

export default function HomePage() {
  const router = useRouter();

  return (
      <main className="min-h-screen"> 
      <LoginForm toggle={() => router.push('/auth/register')} />
    </main>
  );
}