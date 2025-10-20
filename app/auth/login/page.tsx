// app/page.tsx

"use client";

import { useState } from "react";
// Sesuaikan impor path
import LoginForm from "../../components/auth/LoginForm"; 
import RegisterForm from "../../components/auth/RegisterForm"; 

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
      <main className="min-h-screen"> 
      {isLogin ? (
        <LoginForm toggle={() => setIsLogin(false)} />
      ) : (
        <div className="min-h-screen "> 
          <RegisterForm toggle={() => setIsLogin(true)} />
        </div>
      )}
    </main>
  );
}