'use client'
import React from 'react';

type FontSizeChangerProps = {
  showFont?: boolean;
};

export default function FontSizeChanger({ showFont }: FontSizeChangerProps) {
  if (!showFont) return null;

  return (
    <div className="flex items-center space-x-2 text-sm">
      <span>Font Size:</span>
      <button className="px-2 py-1 bg-teal-700 hover:bg-teal-600 rounded text-white">A-</button>
      <button className="px-2 py-1 bg-teal-700 hover:bg-teal-600 rounded text-white">A+</button>
    </div>
  );
}