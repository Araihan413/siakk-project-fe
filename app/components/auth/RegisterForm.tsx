'use client';

import Image from 'next/image';
import { useState } from 'react';
import NurseIllustration from '@/public/AuthImg/img1.png';
import RegisterStep from '../../components/auth/register/RegisterStep';
import { registerUser } from '@/lib/auth/RegisterApi';
import Alert from '../Alert';
import { useRouter } from 'next/navigation';

export default function RegisterForm({ toggle }: { toggle: () => void }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    npm: '',
    program_studi: '',
    semester: '',
    usia: '',
    jenis_kelamin: '',
    alamat: '',
    no_hp: '',
    password: '',
    confirmPassword: '',
    nidn: '', 
    departemen: '', 
  });
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    const res = await registerUser(form);

    if (res.error) {
      setAlert({ type: 'error', message: res.message });
    } else {
      setAlert({type: 'success', message: res.message});
      setTimeout(() => {
        router.push('/auth/login');
      }, 1200);
    }
  };


const [animate, setAnimate] = useState(""); 

const handleNextWithAnim = () => {
  setAnimate("animate-flipLeft");
  setTimeout(() => {
    setAnimate("");
    handleNext(); 
  }, 300); 
};

const handleBackWithAnim = () => {
  setAnimate("animate-flipRight");
  setTimeout(() => {
    setAnimate("");
    handleBack(); 
  }, 300);
};

const handleCloseAlert = () => {
  setAlert(null); 
};

  return (
    <div className="relative flex flex-col lg:flex-row w-full min-h-screen overflow-hidden bg-white">
      {alert && <Alert type={alert.type} message={alert.message}  onClose={handleCloseAlert} />}
      {/* Background */}
      <div className="absolute bottom-0 left-0 right-0 top-[8%] z-0">
        <svg className="w-full h-full" viewBox="0 0 85 100" preserveAspectRatio="none">
          <path d="M 0 100 L 0 25 C 65 170, 75 0, 100 90 Q 100 100, 100 100 Z" fill="#015711" />
        </svg>
      </div>

      <div className="hidden lg:flex flex-1 flex-col justify-between items-center relative z-10 p-8">
        <header className="text-center lg:text-left w-full mt-4">
          <h1 className="text-3xl font-extrabold text-[#1f2937]">Buat Akun Baru</h1>
          <p className="mt-2 text-[14.5px] text-[#99A1B7] font-semibold">
            Gabung bersama kami untuk memulai perjalanan Anda
          </p>
        </header>
        <div className="relative w-[85vw] max-w-[650px] aspect-[600/534] z-30 lg:translate-x-[-4.5%] top-8">
          <Image src={NurseIllustration} alt="Ilustrasi Perawat dan Dokter" fill className="object-contain" priority />
        </div>
      </div>
      {/* Kanan Form */}
      <div className="flex-1 lg:-mt-38 sm:mt-0 flex items-center justify-center p-6 lg:p-12 relative z-10 lg:translate-x-[-10%] sm:translate-x-0">
        <div className="w-full lg:max-w-[70%] bg-[#F7FAFC] p-12 rounded-2xl shadow-xl border border-gray-100">
          <form
            onSubmit={handleSubmit}
            className={`form-container space-y-6 transition-transform duration-500 ${animate}`}
          >
            <RegisterStep
              step={step}
              role={form.role}
              form={form}
              handleChange={handleChange}
            />
            <div className="flex justify-between mt-6 items-center">
            {/* Tombol Back */}
            <div>
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBackWithAnim}
                  className={`text-[#369748] hover:text-[#00642b] ${animate && "transform-gpu"}`}
                >
                  Back
                </button>
              )}
            </div>
            {/* Next (teks) & Submit */}
            <div className="flex items-center gap-4">
              {(form.role === 'mahasiswa' || form.role === 'dosen') && step < 2 && (
                <span
                  onClick={handleNextWithAnim}
                  className={`cursor-pointer text-[#369748] hover:text-[#00642b] font-medium ${animate}`}
                >
                  Next
                </span>
              )}
              {(form.role === 'admin' || step === 2 || (form.role === 'mahasiswa' && step === 2) || (form.role === 'dosen' && step === 2)) && (
                <button
                  type="submit"
                  className="py-3 px-6 rounded-lg shadow-md text-white bg-[#369748] hover:bg-[#00642b] transition-colors"
                >
                  Daftar
                </button>
              )}
            </div>
          </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Sudah punya akun?{' '}
              <button type="button" onClick={toggle} className="font-semibold text-[#369748] hover:text-[#00642b] cursor-pointer">
                Masuk di sini
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
