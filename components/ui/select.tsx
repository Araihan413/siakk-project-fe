'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  name?: string;
  error?: string;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (event: { target: { name?: string; value: string } }) => void;
  className?: string;
}

const Select: React.FC<CustomSelectProps> = ({
  label,
  name,
  error,
  placeholder = 'Pilih Option',
  options = [],
  value,
  onChange,
  onBlur,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
        if (onBlur && value) {
          onBlur({ target: { name, value } });
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onBlur, name, value]);

  const handleSelect = (selectedValue: string) => {
    onChange?.(selectedValue);
    setOpen(false);
    
    onBlur?.({ target: { name, value: selectedValue } });
  };

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div className="space-y-1" ref={ref}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type="hidden"
          name={name}
          value={value || ''}
          onChange={() => {}}
        />

        <button
          type="button"
          id={name}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            'w-full flex justify-between items-center px-3 py-2 mt-2 text-left border-2 border-gray-200 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-0 focus:ring-[#008037] focus:border-[#008037] sm:text-sm transition-all',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            className
          )}
        >
          <span>{selectedLabel || placeholder}</span>
          <svg
            className={cn(
              'w-4 h-4 ml-2 text-gray-500 transition-transform',
              open && 'rotate-180'
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-56 overflow-auto animate-fade-in">
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={cn(
                  'px-3 py-2 cursor-pointer hover:bg-blue-50 text-sm text-gray-700',
                  value === opt.value && 'bg-blue-100 font-medium'
                )}
              >
                {opt.label}
              </div>
            ))}
            {options.length === 0 && (
              <div className="px-3 py-2 text-sm text-gray-500 italic">
                Tidak ada opsi
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Select;