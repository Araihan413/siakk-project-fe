'use client';

import React from 'react';

interface RegisterStepProps {
  step: number;
  role: string;
  form: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  goBack?: () => void; 
}

export default function RegisterStep({ step, role, form, handleChange, goBack }: RegisterStepProps) {
  // Step 1 → Nama, Email, Role
if (step === 1) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Masukkan Nama Lengkap"
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Masukkan Email"
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        >
          <option value="">Pilih Role</option>
          <option value="admin">Admin</option>
          <option value="mahasiswa">Mahasiswa</option>
          <option value="dosen">Dosen</option>
        </select>
      </div>

      {form.role === 'admin' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Konfirmasi Password</label>
            <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
            />
            </div>
        </div>
      )}
    </div>
  );
}


// Step 2+ → hanya field sesuai role, **tidak tampil nama/email/role**
if (step > 1 && role === 'mahasiswa') {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">NPM</label>
        <input
          type="text"
          name="npm"
          value={form.npm}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Program Studi</label>
        <input
          type="text"
          name="program_studi"
          value={form.program_studi}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Semester</label>
        <input
          type="text"
          name="semester"
          value={form.semester}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Usia</label>
        <input
          type="number"
          name="usia"
          value={form.usia}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
        <select
          name="jenis_kelamin"
          value={form.jenis_kelamin}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Alamat</label>
        <input
          type="text"
          name="alamat"
          value={form.alamat}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Konfirmasi Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
    </div>
  );
}
// Step 2 → Field Dosen
if (step === 2 && role === 'dosen') {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">NIDN</label>
        <input
          type="text"
          name="nidn"
          value={form.nidn}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Program Studi</label>
        <input
          type="text"
          name="program_studi"
          value={form.program_studi}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Departemen</label>
        <input
          type="text"
          name="departemen"
          value={form.departemen}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Usia</label>
        <input
          type="number"
          name="usia"
          value={form.usia}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
        <select
          name="jenis_kelamin"
          value={form.jenis_kelamin}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Alamat</label>
        <input
          type="text"
          name="alamat"
          value={form.alamat}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Konfirmasi Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037]"
        />
      </div>
    </div>
  );
}



  return null;
}
