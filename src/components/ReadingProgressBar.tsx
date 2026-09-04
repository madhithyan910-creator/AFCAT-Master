import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';

interface ReadingProgressBarProps {
  currentSection: string;
  totalSections: number;
  currentSectionIndex: number;
  percent: number;
  className?: string;
  onSectionClick?: (index: number) => void;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  currentSection,
  totalSections,
  currentSectionIndex,
  percent,
  className = '',
  onSectionClick
}) => {
  // Clamp between 0 and 100
  const clampedPercent = Math.max(0, Math.min(100, Math.round(percent)));

  return (
    <div className={`sticky top-0 z-30 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-sky-400/20 shadow-lg shadow-sky-950/40 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        {/* Left Status */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-sky-400 font-bold">
              TRAINING PROGRESS
            </div>
            <div className="text-white font-semibold flex items-center gap-1.5 truncate max-w-xs sm:max-w-md">
              <span className="text-white/50 text-[11px]">Section {currentSectionIndex + 1}/{totalSections}:</span>
              <span className="truncate">{currentSection}</span>
            </div>
          </div>
        </div>

        {/* Right Percentage Readout */}
        <div className="flex items-center gap-2 font-mono text-[11px] self-end sm:self-auto">
          <span className="px-2 py-0.5 rounded-md bg-sky-500/15 text-sky-300 border border-sky-400/30 font-bold">
            {clampedPercent}%
          </span>
          <span className="text-white/50 text-[10px]">OF MODULE COMPLETED</span>
        </div>
      </div>

      {/* Segmented Physical Progress Track */}
      <div className="mt-2.5 flex items-center gap-1">
        {Array.from({ length: totalSections }).map((_, idx) => {
          const isDone = idx < currentSectionIndex;
          const isCurrent = idx === currentSectionIndex;
          return (
            <div
              key={idx}
              onClick={() => onSectionClick?.(idx)}
              className={`h-2 flex-1 rounded-full transition-all duration-300 cursor-pointer ${
                isDone 
                  ? 'bg-gradient-to-r from-sky-400 to-cyan-300 shadow-sm shadow-sky-400/30' 
                  : isCurrent 
                    ? 'bg-sky-500/60 ring-2 ring-sky-400/40' 
                    : 'bg-white/10 hover:bg-white/20'
              }`}
              title={`Jump to Section ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};
