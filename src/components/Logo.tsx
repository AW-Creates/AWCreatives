import React from 'react';

export const Logo = ({ className = "h-10" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Infinity-inspired AW mark */}
        <svg viewBox="0 0 40 40" className="w-full h-full text-accent fill-none stroke-current stroke-[1.5]">
          <path d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20Z" className="opacity-20" />
          <path d="M12 28L20 12L28 28" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 20H24" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10Z" strokeDasharray="4 4" className="opacity-40" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-xl tracking-tight text-white">Wilcher</span>
        <span className="font-display italic text-accent text-xs tracking-[0.2em] uppercase opacity-80">Creatives</span>
      </div>
    </div>
  );
};
