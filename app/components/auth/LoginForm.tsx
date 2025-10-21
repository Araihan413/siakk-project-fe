'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { loginUser } from '../../../lib/auth/LoginApi';
import LampImage from '@/public/AuthImg/img2.png';
import NurseIllustration from '@/public/AuthImg/img1.png';
import Alert from '../../components/Alert';
import Input from '@/components/ui/input';

interface LoginFormProps {
  toggle: () => void;
}

export default function LoginForm({ toggle }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const searchParams = useSearchParams();
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  useEffect(() => {
    if (searchParams.get('expired') === '1') {
      setAlert({ type: 'info', message: 'Sesi Anda telah habis. Silakan login kembali.' });
    }
  }, [searchParams]);

  const handleCloseAlert = () => {
    setAlert(null); 
    const url = new URL(window.location.href);
    url.searchParams.delete('expired');
    window.history.replaceState({}, '', url.toString());
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginUser(email, password);

    if (res.error) {
      setAlert({ type: 'error', message: res.message });
    } else {
      setAlert({ type: 'success', message: res.message });
      setTimeout(() => {
        if (res.role === 'admin') window.location.href = '/';
        else window.location.href = '/auth/login';
      }, 1200);
    }
  };

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen overflow-hidden bg-white">
       {alert && <Alert type={alert.type} message={alert.message}  onClose={handleCloseAlert} />}
      <div className="absolute bottom-0 left-0 right-0 top-[8%] z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 85 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
         <path
            d="M 0 100 L 0 25 C 65 170, 75 0, 100 90 Q 100 100, 100 100 Z"
            fill="#015711"
          />
        </svg>
      </div>

      <div className="hidden lg:col-span-1 lg:flex flex-1 flex-col justify-end items-center relative z-10 ">
        {/* Lampu */}
        <div className="absolute top-0 left-[16%] w-[14vh] max-w-[120px] aspect-[174/276] z-20">
          <Image
            src={LampImage}
            alt="Lampu Gantung"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Ilustrasi */}
        <div className="relative w-[85vw] max-w-[650px] aspect-[600/534] z-30 top-0  sm:translate-x-0 mt-30">
          <Image
            src={NurseIllustration}
            alt="Ilustrasi Perawat dan Dokter"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* ====== Kanan (Form Login) ====== */}
      <div className="col-span-1 flex-1 flex items-center lg:items-start justify-center p-6 lg:p-12 relative z-10">
        <div className="w-full  items-center justify-center lg:max-w-[80%] bg-[#F7FAFC] p-12 rounded-2xl shadow-xl border border-gray-100">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold text-[#1f2937]">
              Selamat Datang
            </h1>
            <p className="mt-2 text-[#99A1B7] font-semibold text-[14.5px]">
              Silakan mulai pendokumentasian keperawatan keluarga
            </p>
          </header>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Input id="email" label='Email' error="" placeholder="Masukkan Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required ></Input>
            </div>

            <div>
              <Input id="password" label='Password' error="" placeholder="Masukkan Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required ></Input>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-lg shadow-md text-base font-medium text-white bg-[#369748] hover:bg-[#00642b] transition-colors"
            >
              Masuk
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Belum punya akun?{' '}
              <button
                type="button"
                onClick={toggle}
                className="font-semibold text-[#369748] hover:text-[#00642b] cursor-pointer"
              >
                Daftar di sini
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
