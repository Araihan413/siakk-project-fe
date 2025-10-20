'use client';

export interface LoginResponse {
  message: string;
  role?: string;
  name?: string;
  error?: string;
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return {
        message: 'Ups! Email atau password kamu belum tepat. Coba periksa kembali ya...',
        error: errorData.error || 'Login gagal',
      };
    }

    const data: LoginResponse = await res.json();
    if (data.name) localStorage.setItem('name', data.name);
    if (data.role) localStorage.setItem('role', data.role);


    return {
      ...data,
      message: `Selamat datang kembali! Login berhasil sebagai ${data.role?.toUpperCase() || 'User'}`,
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      message: 'Terjadi kendala koneksi. Silakan coba lagi beberapa saat lagi 🔄',
      error: 'Terjadi kesalahan jaringan',
    };
  }
}