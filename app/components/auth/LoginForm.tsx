"use client";

import { useState } from "react";

interface LoginFormProps {
  toggle: () => void;
}

export default function LoginForm({ toggle }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <section className="flex items-center w-full max-w-3xl p-5 bg-[#379748] rounded-2xl">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 px-8">
        <h2 className="text-3xl font-bold text-[#f3fff5]">Login</h2>
        <p className="mt-4 text-sm text-[#f3fff5]">
          If you are already a member, please log in now.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-xl border border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded-xl border border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-white"
          />

          <button
            type="submit"
            className="py-2 text-gray-200 bg-[#05541e] rounded-xl hover:bg-[#0a8330] hover:scale-105 duration-300"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-between mt-4 text-sm text-[#f3fff5]">
          <p>Don&apos;t have an account?</p>
          <button
            onClick={toggle}
            type="button"
            className="px-5 py-2 font-semibold text-white bg-[#05541e] rounded-xl hover:bg-[#002c7424] hover:scale-110 duration-300"
          >
            Register
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden w-1/2 md:block">
        <img
          src="/loginimg.png"
          alt="Login preview illustration"
          className="object-cover rounded-2xl max-h-[380px] w-full"
        />
      </div>
    </section>
  );
}
