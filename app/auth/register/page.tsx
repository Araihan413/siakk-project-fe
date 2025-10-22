"use client";

import { useRouter } from "next/navigation";
import RegisterForm from "../../components/auth/RegisterForm"; 

export default function HomePage() {
  const router = useRouter();

  return (
      <main className="min-h-screen"> 
      <RegisterForm toggle={() => router.push('/auth/login')} />
    </main>
  );
}