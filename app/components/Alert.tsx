'use client';
import { useEffect, useState } from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'info' | 'warning' | 'dark';
  message: string;
  onClose?: () => void;
}

const typeStyles: Record<string, string> = {
  success: 'text-green-800 border-green-300 bg-green-50',
  error: 'text-red-800 border-red-300 bg-red-50',
  info: 'text-blue-800 border-blue-300 bg-blue-50',
  warning: 'text-yellow-800 border-yellow-300 bg-yellow-50',
  dark: 'text-gray-800 border-gray-300 bg-gray-50',
};

export default function Alert({ type, message, onClose }: AlertProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(() => onClose?.(), 300);
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 flex items-center border rounded-md shadow-md px-4 py-2 text-sm font-medium transition-all duration-300 ease-out
        ${typeStyles[type]} 
        ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
      style={{ maxWidth: '80%', width: 'auto', minWidth: '180px' }}
      role="alert"
    >
      <div className="truncate">{message}</div>
      <button
        onClick={close}
        className="ml-3 text-gray-600 hover:text-gray-900"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}
