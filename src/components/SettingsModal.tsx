import React, { useState, useRef } from 'react';
import { UserProgressState } from '../types';
import { sound } from '../utils/audio';
import { 
  X, 
  Download, 
  Upload, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  ShieldAlert, 
  CheckCircle, 
  Sparkles, 
  Target,
  Crosshair,
  Eye,
  Compass
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: UserProgressState;
  onResetState: () => void;
  onImportState: (newState: UserProgressState) => void;
  onToggleSound: () => void;
  onToggleHud?: () => void;
  onSetHudIntensity?: (intensity: 'subtle' | 'standard' | 'high') => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  state,
  onResetState,
  onImportState,
  onToggleSound,
  onToggleHud,
  onSetHudIntensity
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleExport = () => {
    sound.playClick();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `afcat-master-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Telemetry backup file downloaded successfully!');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.xp !== undefined || json.level !== undefined || json.studyPlan !== undefined) {
          sound.playLevelUp();
          onImportState(json);
          showToast('Progress and flight logs restored successfully!');
        } else {
          showToast('Invalid backup file format. Please use an AFCAT Master JSON backup.');
        }
      } catch (err) {
        showToast('Failed to parse backup JSON file.');
      }
    };
    reader.readAsText(file);
  };

  const handleExecuteReset = () => {
    sound.playClick();
    onResetState();
    setConfirmReset(false);
    showToast('All progress, XP, and mistake logs reset to Cadet standard.');
  };

  const soundOn = state.settings?.soundEnabled ?? true;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md p-6 rounded-2xl bg-[#0e172a] border border-white/20 shadow-2xl space-y-5 text-white relative">
        {/* Toast notification inside modal */}
        {toastMessage && (
          <div className="absolute top-3 left-6 right-6 z-20 p-2.5 rounded-xl bg-sky-500/90 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm border border-white/20 animate-fade-in">
            <CheckCircle className="w-4 h-4 text-white" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <h2 className="text-base font-bold font-['Rajdhani'] tracking-wide">
              MISSION SETTINGS & TELEMETRY
            </h2>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Audio Toggle */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
          <div className="space-y-0.5">
            <div className="text-xs font-semibold">Sound FX & Telemetry Audio</div>
            <div className="text-[11px] text-white/50">Auditory clicks and feedback on answers</div>
          </div>
          <button
            onClick={() => {
              onToggleSound();
            }}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              soundOn
                ? 'bg-sky-500/20 text-sky-300 border-sky-400/40 shadow-sm'
                : 'bg-white/5 text-white/40 border-white/10'
            }`}
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-sky-400" /> : <VolumeX className="w-4 h-4" />}
            <span>{soundOn ? 'ACTIVE' : 'MUTED'}</span>
          </button>
        </div>

        {/* Aviation HUD Overlays */}
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-semibold flex items-center gap-1.5">
                <Crosshair className="w-3.5 h-3.5 text-sky-400" />
                <span>Aviation HUD Visual Overlays</span>
              </div>
              <div className="text-[11px] text-white/50">Cockpit flight reticles, horizon ladder & radar</div>
            </div>
            {onToggleHud && (
              <button
                onClick={onToggleHud}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  (state.settings?.hudEnabled ?? true)
                    ? 'bg-sky-500/20 text-sky-300 border-sky-400/40 shadow-sm'
                    : 'bg-white/5 text-white/40 border-white/10'
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>{(state.settings?.hudEnabled ?? true) ? 'ACTIVE' : 'OFF'}</span>
              </button>
            )}
          </div>

          {(state.settings?.hudEnabled ?? true) && onSetHudIntensity && (
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {(['subtle', 'standard', 'high'] as const).map((lvl) => {
                const isSel = (state.settings?.hudIntensity ?? 'subtle') === lvl;
                return (
                  <button
                    key={lvl}
                    onClick={() => onSetHudIntensity(lvl)}
                    className={`py-1.5 px-2 rounded-lg border text-center text-[10px] capitalize transition-all ${
                      isSel
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300 font-bold'
                        : 'bg-white/5 border-white/5 text-white/50 hover:bg-white/10'
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Daily Goal Target */}
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 font-semibold">
              <Target className="w-3.5 h-3.5 text-amber-400" />
              <span>Daily Question Target</span>
            </div>
            <span className="font-mono text-amber-300 font-bold">
              {state.settings?.dailyGoalQuestions || 25} Qs/day
            </span>
          </div>
          <p className="text-[11px] text-white/50">
            Recommended pace: 25-40 questions daily for consistent retention.
          </p>
        </div>

        {/* Data Backup & Restore */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-white/40 font-mono">
            Data Backup & Restore (JSON)
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleExport}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-colors active:scale-95"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Export Backup</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-colors active:scale-95"
            >
              <Upload className="w-4 h-4 text-emerald-400" />
              <span>Import Backup</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".json"
              className="hidden"
            />
          </div>
        </div>

        {/* Danger Zone */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Danger Zone</span>
          </div>

          {!confirmReset ? (
            <button
              onClick={() => setConfirmReset(true)}
              className="w-full p-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 text-xs font-semibold flex items-center justify-center gap-2 transition-colors active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Telemetry & Progress</span>
            </button>
          ) : (
            <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 space-y-2.5 animate-fade-in">
              <p className="text-xs text-rose-200">
                Are you sure? This will reset all XP, answered questions, bookmarks, and mistake logs to zero.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleExecuteReset}
                  className="flex-1 py-2 px-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors shadow-md shadow-rose-600/30"
                >
                  Confirm Reset
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  className="flex-1 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white/80 text-xs transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
