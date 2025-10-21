'use client';

import React from 'react';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';

interface RegisterStepProps {
  step: number;
  role: string;
  form: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSelectChange: (fieldName: string) => (value: string) => void;
  goBack?: () => void; 
}

export default function RegisterStep({ step, role, form, handleChange, handleSelectChange, goBack }: RegisterStepProps) {
  // Step 1 → Nama, Email, Role
if (step === 1) {
  return (
    <div className="space-y-4">
      <div>
        <Input id="nama" label='Nama Lengkap' name='name' error="" placeholder="Masukkan Nama Lengkap" value={form.name} onChange={handleChange} type="text" required ></Input>
      </div>
      <div>
        <Input id="email" label='Email' name='email' error="" placeholder="Masukkan Email" value={form.email} onChange={handleChange} type="email" required ></Input>

      </div>
      <div>
        <Select 
        name="role" 
        label="Role" 
        options={
          [{ value: "", label: "Pilih Role" },
          { value: "mahasiswa", label: "Mahasiswa" }, 
          { value: "dosen", label: "Dosen" }]} 
          error="" 
          placeholder="Pilih Role" 
          value={form.role} 
          onChange={handleSelectChange('role')}
          >
          </Select>
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
        <Input id="npm" label='NPM' name='npm' error="" placeholder="NPM" value={form.npm} onChange={handleChange} type="text" required ></Input>
      </div>
      <div>
        <Input id="prodi" label='Program Studi' name='program_studi' error="" placeholder="Program Studi" value={form.program_studi} onChange={handleChange} type="text" required ></Input>
      </div>
      <div>
        <Input id="semester" label='Semester' name='semester' error="" placeholder="Semester" value={form.semester} onChange={handleChange} type="text" required ></Input>
      </div>
      <div>
        <Input id="usia" label='Usia' name='usia' error="" placeholder="Usia" value={form.usia} onChange={handleChange} type="number" required ></Input>
      </div>
      <div>
        <Select 
        name="jenis_kelamin" 
        label="Jenis Kelamin" 
        options={
          [{ value: "", label: "Pilih Jenis Kelamin" },
          { value: "Laki-laki", label: "Laki-laki" }, 
          { value: "Perempuan", label: "Perempuan" }]} 
          error="" 
          placeholder="Pilih Jenis Kelamin" 
          value={form.jenis_kelamin} 
          onChange={handleSelectChange('jenis_kelamin')}
          >
          </Select>
      </div>
      
      <div>
        <Input id="telepon" label='No Telepon' name='no_hp' error="" placeholder="No Telepon" value={form.no_hp} onChange={handleChange} type="text" required ></Input>
      </div>
      <div  className='lg:col-span-2'>
        <Input id="alamat" label='Alamat' name='alamat' error="" placeholder="Alamat" value={form.alamat} onChange={handleChange} type="text" required ></Input>
      </div>

      {/* Password */}
      <div>
        <Input id="password" label='Password' name='password' error="" placeholder="Password" value={form.password} onChange={handleChange} type="password" required ></Input>
      </div>
      <div>
        <Input id="confirmPassword" label='Konfirmasi Password' name='confirmPassword' error="" placeholder="Confirmasi Password" value={form.confirmPassword} onChange={handleChange} type="password" required ></Input>
      </div>
    </div>
  );
}
// Step 2 → Field Dosen
if (step === 2 && role === 'dosen') {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Input id="nidn" label='NIDN' name='nidn' error="" placeholder="NIDN" value={form.nidn} onChange={handleChange} type="text" required ></Input>
      </div>
      <div>
        <Input id="prodi" label='Program Studi' name='program_studi' error="" placeholder="Pragram Studi" value={form.program_studi} onChange={handleChange} type="text" required ></Input>
      </div>
      <div>
        <Input id="departemen" label='Departemen' name='departemen' error="" placeholder="Departemen" value={form.departemen} onChange={handleChange} type="text" required ></Input>
      </div>
      <div>
        <Input id="usia" label='Usia' name='usia' error="" placeholder="Usia" value={form.usia} onChange={handleChange} type="number" required ></Input>
      </div>
      <div>
        <Select 
        name="jenis_kelamin" 
        label="Jenis Kelamin" 
        options={
          [{ value: "", label: "Pilih Jenis Kelamin" },
          { value: "Laki-laki", label: "Laki-laki" }, 
          { value: "Perempuan", label: "Perempuan" }]} 
          error="" 
          placeholder="Pilih Jenis Kelamin" 
          value={form.jenis_kelamin} 
          onChange={handleSelectChange('jenis_kelamin')}
          >
          </Select>
      </div>
      <div>
        <Input id="telepon" label='No Telepon' name='no_hp' error="" placeholder="No Telepon" value={form.no_hp} onChange={handleChange} type="text" required ></Input>
      </div>
      <div  className='lg:col-span-2'>
        <Input id="alamat" label='Alamat' name='alamat' error="" placeholder="Alamat" value={form.alamat} onChange={handleChange} type="text" required ></Input>
      </div>

      {/* Password */}
      <div>
        <Input id="password" label='Password' name='password' error="" placeholder="Password" value={form.password} onChange={handleChange} type="password" required ></Input>
      </div>
      <div>
        <Input id="confirmPassword" label='Konfirmasi Password' name='confirmPassword' error="" placeholder="Confirmasi Password" value={form.confirmPassword} onChange={handleChange} type="password" required ></Input>
      </div>
    </div>
  );
}



  return null;
}
