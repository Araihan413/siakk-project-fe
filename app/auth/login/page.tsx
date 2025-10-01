"use client";

import { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      {isLogin ? (
        <LoginForm toggle={() => setIsLogin(false)} />
      ) : (
        <RegisterForm toggle={() => setIsLogin(true)} />
      )}
    </main>
  );
}
