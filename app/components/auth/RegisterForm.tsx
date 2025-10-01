"use client";

import { useState, FormEvent } from "react";

interface RegisterFormProps {
  toggle: () => void;
}

export default function RegisterForm({ toggle }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
    // TODO: Tambahkan fungsi register ke backend di sini
  };

  return (
    <section className="flex max-w-3xl w-full p-5 bg-[#379748] rounded-2xl items-center">
      {/* === Left Form Section === */}
      <div className="px-8 md:w-1/2">
        <h2 className="font-bold text-3xl text-[#f3fff5]">Register</h2>
        <p className="mt-4 text-sm text-[#f3fff5]">
          Create your account to get started.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded-xl border border-white focus:border-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-xl border border-white focus:border-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded-xl border border-white focus:border-white focus:outline-none"
          />

          <button
            type="submit"
            className="py-2 bg-[#05541e] text-gray-200 rounded-xl hover:scale-105 hover:bg-[#0a8330] duration-300"
          >
            Register
          </button>
        </form>

        <div className="flex mt-4 text-sm justify-between items-center">
          <p>Already have an account?</p>
          <button
            onClick={toggle}
            className="py-2 px-5 bg-[#05541e] text-white font-semibold rounded-xl hover:scale-110 hover:bg-[#002c7424] duration-300"
          >
            Login
          </button>
        </div>
      </div>

      {/* === Right Image Section === */}
      <div className="hidden md:block w-1/2">
        <img
          src="/loginimg.png"
          alt="Dashboard preview"
          className="object-cover max-h-[3800px] rounded-2xl"
        />
      </div>
    </section>
  );
}
