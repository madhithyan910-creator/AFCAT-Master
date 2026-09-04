import React, { useState, useRef } from 'react';
import { UserProgressState } from '../types';
import { sound } from '../utils/audio';
import { 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Download, 
  Upload, 
  ShieldAlert, 
  CheckCircle2, 
  Target, 
  Sparkles, 
  HelpCircle,
  Database,
  RefreshCw,
  Bell,
  Crosshair,
  Compass,
  Eye
} from 'lucide-react';

interface SettingsViewProps {
  state: UserProgressState;
  onResetState: () => void;
  onImportState: (newState: UserProgressState) => void;
  onToggleSound: () => void;
  onToggleHud?: () => void;
  onSetHudIntensity?: (intensity: 'subtle' | 'standard' | 'high') => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
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
    <div className="max-w-3xl mx-auto space-y-6 pb-16 animate-fade-in text-white">
      {/* Toast message notification */}
      {toastMessage && (
        <div className="p-3.5 rounded-2xl bg-sky-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xl border border-white/20 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl flex items-center justify-between">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERATIONAL PREFERENCES</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-['Rajdhani'] tracking-tight">
            MISSION SETTINGS & TELEMETRY
          </h1>
          <p className="text-xs text-white/60">
            Configure sound effects, manage data backups, adjust daily study pacing, or reset cadet logs.
          </p>
        </div>
      </div>

      {/* Audio & Feedback */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
        <h2 className="text-sm font-bold font-['Rajdhani'] tracking-wider uppercase text-white/80">
          Audio & Feedback Telemetry
        </h2>

        <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/10">
          <div className="space-y-0.5">
            <div className="text-sm font-bold text-white">Sound Effects (SFX)</div>
            <div className="text-xs text-white/50">Auditory clicks, correct answers, level up chimes, and combat soundscapes</div>
          </div>
          <button
            onClick={onToggleSound}
            className={`px-4 py-2 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
              soundOn
                ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                : 'bg-white/5 text-white/40 border-white/10 hover:bg-white/10'
            }`}
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span>{soundOn ? 'ACTIVE (ON)' : 'MUTED (OFF)'}</span>
          </button>
        </div>
      </div>

      {/* Aviation HUD (Heads-Up Display) Visual Overlays */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-sky-400" />
              <h2 className="text-sm font-bold font-['Rajdhani'] tracking-wider uppercase text-white/80">
                Aviation HUD (Heads-Up Display) Overlays
              </h2>
            </div>
            <p className="text-xs text-white/50">
              Tactical cockpit flight director graphics, compass ribbon, artificial horizon pitch ladder, and radar range rings.
            </p>
          </div>
          {onToggleHud && (
            <button
              onClick={onToggleHud}
              className={`px-4 py-2 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
                (state.settings?.hudEnabled ?? true)
                  ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                  : 'bg-white/5 text-white/40 border-white/10 hover:bg-white/10'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{(state.settings?.hudEnabled ?? true) ? 'ACTIVE (ON)' : 'DISABLED'}</span>
            </button>
          )}
        </div>

        {/* Intensity Level Selector */}
        {(state.settings?.hudEnabled ?? true) && onSetHudIntensity && (
          <div className="pt-2 border-t border-white/5 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-white/60 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>HUD Opacity & Tactical Intensity</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(['subtle', 'standard', 'high'] as const).map((level) => {
                const isSelected = (state.settings?.hudIntensity ?? 'subtle') === level;
                return (
                  <button
                    key={level}
                    onClick={() => onSetHudIntensity(level)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      isSelected
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-sm font-bold'
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 font-medium'
                    }`}
                  >
                    <div className="text-xs capitalize font-semibold">{level}</div>
                    <div className="text-[10px] text-white/40 mt-0.5">
                      {level === 'subtle' ? '18% Contrast' : level === 'standard' ? '30% Contrast' : '45% Contrast'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Backup & Restore Data */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
        <h2 className="text-sm font-bold font-['Rajdhani'] tracking-wider uppercase text-white/80">
          Flight Telemetry & Local Storage
        </h2>
        <p className="text-xs text-white/60">
          All your answered questions, mistake logs, bookmarks, and XP are stored locally on your device. Export a backup JSON to sync across machines or preserve your preparation records.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleExport}
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-98 group"
          >
            <Download className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
            <span>Export Progress JSON</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-98 group"
          >
            <Upload className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Import / Restore Backup</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json"
            className="hidden"
          />
        </div>

        {/* Current Storage Stats */}
        <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5 text-center font-mono">
          <div>
            <div className="text-[10px] text-white/40 uppercase">QUESTIONS LOGGED</div>
            <div className="text-base font-bold text-sky-400">{Object.keys(state.answeredQuestions || {}).length}</div>
          </div>
          <div>
            <div className="text-[10px] text-white/40 uppercase">MISTAKES CACHED</div>
            <div className="text-base font-bold text-rose-400">{Object.keys(state.mistakes || {}).length}</div>
          </div>
          <div>
            <div className="text-[10px] text-white/40 uppercase">TOTAL XP</div>
            <div className="text-base font-bold text-amber-400">{state.xp}</div>
          </div>
        </div>
      </div>

      {/* Danger Zone: Reset Operations */}
      <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 backdrop-blur-xl shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>Danger Zone: Progress Reset</span>
        </div>
        <p className="text-xs text-white/60">
          Resetting will clear all accumulated XP, answered questions history, mistake logs, and bookmarks, returning your status to a fresh Cadet standard.
        </p>

        {!confirmReset ? (
          <button
            onClick={() => {
              sound.playClick();
              setConfirmReset(true);
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-98"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset All Progress & Telemetry</span>
          </button>
        ) : (
          <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-500/40 space-y-3 animate-fade-in max-w-md">
            <p className="text-xs text-rose-200 font-medium">
              ⚠️ Are you absolutely certain? This operation cannot be undone. All your questions, tests, and XP will be cleared.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleExecuteReset}
                className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors shadow-lg shadow-rose-600/30"
              >
                Yes, Reset Everything
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white/80 text-xs transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
