'use client';

export interface RegisterResponse {
  message: string;
  role?: string;
  error?: string;
}

export interface DataRegister {
  name: string;
  email: string;
  role: string;
  npm?: string;
  nidn?: string; 
  program_studi?: string;
  semester?: string;
  usia?: string;
  jenis_kelamin?: string;
  alamat?: string;
  no_hp?: string;
  password: string;
  confirmPassword: string;
  departemen?: string; 
}


export async function registerUser(DataRegister: DataRegister   ): Promise<RegisterResponse> {
  let dataToSend: any = {};

  if (DataRegister.role === 'mahasiswa') {
    dataToSend = {
      name: DataRegister.name,
      nama_lengkap: DataRegister.name,
      email: DataRegister.email,
      role: DataRegister.role,
      npm: DataRegister.npm,
      program_studi: DataRegister.program_studi,
      semester: DataRegister.semester,
      usia: DataRegister.usia,
      jenis_kelamin: DataRegister.jenis_kelamin,
      alamat: DataRegister.alamat,
      no_hp: DataRegister.no_hp,
      password: DataRegister.password,
      confirmPassword: DataRegister.confirmPassword,
    };
  } else if (DataRegister.role === 'dosen') {
    dataToSend = {
      name: DataRegister.name,
      nama_lengkap: DataRegister.name,
      email: DataRegister.email,
      role: DataRegister.role,
      nidn: DataRegister.nidn,
      program_studi: DataRegister.program_studi,
      departemen: DataRegister.departemen,
      usia: DataRegister.usia,
      jenis_kelamin: DataRegister.jenis_kelamin,
      alamat: DataRegister.alamat,
      no_hp: DataRegister.no_hp,
      password: DataRegister.password,
      confirmPassword: DataRegister.confirmPassword,
    };
  }

  console.log("data sesuai role",dataToSend);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
      body: JSON.stringify(dataToSend),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return {
        message: 'Ups Data yang kamu masukkan belum tepat. Coba periksa kembali ya...',
        error: errorData.message || 'Register gagal',
      }
    }

    const data: RegisterResponse = await res.json();
    return {
      ...data,
      message: `Selamat Register berhasil! Silahkan login untuk melanjutkan.`,
    }
  } catch (error) {
    console.error('Register error:', error);
    return {
      message: 'Terjadi kendala koneksi. Silakan coba lagi beberapa saat lagi 🔄',
      error: 'Terjadi kesalahan jaringan',
    };
  }
}