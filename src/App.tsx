import React, { useState, useEffect, useCallback } from 'react';
import { SectionType, UserProgressState, Question, MockTestResult } from './types';
import { loadState, saveState, addXP, recordQuestionAnswer, getInitialState } from './utils/storage';
import { sound } from './utils/audio';

// Components
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { CommandCenter } from './components/CommandCenter';
import { LearnView } from './components/LearnView';
import { PracticeView } from './components/PracticeView';
import { ArenaView } from './components/ArenaView';
import { MockTestView } from './components/MockTestView';
import { RevisionView } from './components/RevisionView';
import { DefenceHubView } from './components/DefenceHubView';
import { AfsbMasterView } from './components/AfsbMasterView';
import { CurrentAffairsView } from './components/CurrentAffairsView';
import { AnalyticsView } from './components/AnalyticsView';
import { PlannerView } from './components/PlannerView';
import { DiagramGalleryView } from './components/DiagramGalleryView';
import { FleetGalleryView } from './components/FleetGalleryView';
import { SettingsView } from './components/SettingsView';
import { SettingsModal } from './components/SettingsModal';
import { SearchModal } from './components/SearchModal';
import { AviationHudOverlay } from './components/AviationHudOverlay';

export default function App() {
  const [state, setState] = useState<UserProgressState>(() => loadState());
  const [activeSection, setActiveSection] = useState<SectionType>('command_center');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Sync state to localStorage whenever it changes
  useEffect(() => {
    saveState(state);
  }, [state]);

  // Global Keyboard Shortcuts (⌘K / Ctrl+K & Arrow Key Navigation on Command Center)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sound.playClick();
        setSearchOpen(prev => !prev);
        return;
      }

      // Ignore arrow shortcuts if modals are open or typing into an input field
      if (searchOpen || settingsOpen) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      // Navigate between sections using arrow keys when on the Command Center screen
      if (activeSection === 'command_center') {
        const SECTIONS: SectionType[] = [
          'command_center',
          'learn',
          'practice',
          'arena',
          'mock_tests',
          'diagrams',
          'fleet_gallery',
          'revision',
          'defence_hub',
          'afsb_master',
          'current_affairs',
          'analytics',
          'planner',
          'settings',
        ];

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          sound.playClick();
          const currentIndex = SECTIONS.indexOf(activeSection);
          const nextIndex = (currentIndex + 1) % SECTIONS.length;
          setActiveSection(SECTIONS[nextIndex]);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          sound.playClick();
          const currentIndex = SECTIONS.indexOf(activeSection);
          const prevIndex = (currentIndex - 1 + SECTIONS.length) % SECTIONS.length;
          setActiveSection(SECTIONS[prevIndex]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, searchOpen, settingsOpen]);

  const handleUpdateState = useCallback((newState: UserProgressState) => {
    setState(newState);
  }, []);

  const handleAddXP = useCallback((amount: number) => {
    setState(prev => {
      const { state: updatedState, leveledUp } = addXP(prev, amount);
      if (leveledUp) {
        sound.playLevelUp();
      }
      return updatedState;
    });
  }, []);

  const handleRecordQuestionAnswer = useCallback((question: Question, answerIdx: number) => {
    setState(prev => recordQuestionAnswer(prev, question, answerIdx));
  }, []);

  const handleLearnRecordAnswer = useCallback((questionId: string, isCorrect: boolean) => {
    setState(prev => {
      const answeredQuestions = {
        ...prev.answeredQuestions,
        [questionId]: { correct: isCorrect, timestamp: new Date().toISOString() }
      };
      return {
        ...prev,
        answeredQuestions
      };
    });
  }, []);

  const handleSaveMockResult = useCallback((result: MockTestResult) => {
    setState(prev => ({
      ...prev,
      mockHistory: [result, ...prev.mockHistory]
    }));
  }, []);

  const handleClearMistake = useCallback((questionId: string) => {
    setState(prev => {
      const mistakes = { ...prev.mistakes };
      delete mistakes[questionId];
      return { ...prev, mistakes };
    });
  }, []);

  const handleResetState = useCallback(() => {
    sound.playClick();
    const fresh = getInitialState();
    setState(fresh);
  }, []);

  const handleToggleSound = useCallback(() => {
    const nextSound = !state.settings.soundEnabled;
    sound.enabled = nextSound;
    if (nextSound) sound.playClick();
    setState(prev => ({
      ...prev,
      settings: { ...prev.settings, soundEnabled: nextSound }
    }));
  }, [state.settings.soundEnabled]);

  const handleToggleHud = useCallback(() => {
    sound.playClick();
    setState(prev => {
      const current = prev.settings?.hudEnabled ?? true;
      return {
        ...prev,
        settings: {
          ...prev.settings,
          hudEnabled: !current
        }
      };
    });
  }, []);

  const handleSetHudIntensity = useCallback((intensity: 'subtle' | 'standard' | 'high') => {
    sound.playClick();
    setState(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        hudIntensity: intensity
      }
    }));
  }, []);

  const mistakesCount = Object.keys(state.mistakes || {}).length;

  return (
    <div className="min-h-screen frosted-glass-bg text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-white relative">
      {/* Aviation Heads-Up Display (HUD) Visual Overlay */}
      <AviationHudOverlay
        enabled={state.settings?.hudEnabled ?? true}
        intensity={state.settings?.hudIntensity ?? 'subtle'}
      />

      {/* Top Application Header */}
      <div className="relative z-20">
        <Header
          state={state}
          onUpdateState={handleUpdateState}
          onOpenSearch={() => {
            sound.playClick();
            setSearchOpen(true);
          }}
          onOpenSettings={() => {
            sound.playClick();
            setSettingsOpen(true);
          }}
          onSelectSection={(sec) => {
            sound.playClick();
            setActiveSection(sec);
          }}
          onToggleMobileSidebar={() => {
            sound.playClick();
            setMobileSidebarOpen(prev => !prev);
          }}
        />
      </div>

      <div className="flex-1 flex overflow-hidden relative z-10">
        {/* Navigation Sidebar */}
        <Sidebar
          currentSection={activeSection}
          onSelectSection={(sec) => {
            sound.playClick();
            setActiveSection(sec);
            setMobileSidebarOpen(false);
          }}
          mobileOpen={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
          mistakesCount={mistakesCount}
          revisionDueCount={0}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {activeSection === 'command_center' && (
              <CommandCenter
                state={state}
                onSelectSection={(sec) => {
                  sound.playClick();
                  setActiveSection(sec);
                }}
                onStartMission={() => {
                  sound.playClick();
                  setActiveSection('practice');
                }}
                onStartDailyChallenge={() => {
                  sound.playClick();
                  setActiveSection('arena');
                }}
              />
            )}

            {activeSection === 'learn' && (
              <LearnView
                onRecordAnswer={handleLearnRecordAnswer}
                onAddXP={handleAddXP}
                onNavigateToDiagrams={() => {
                  sound.playClick();
                  setActiveSection('diagrams');
                }}
              />
            )}

            {activeSection === 'practice' && (
              <PracticeView
                onRecordAnswer={handleRecordQuestionAnswer}
                onAddXP={handleAddXP}
              />
            )}

            {activeSection === 'arena' && (
              <ArenaView
                onAddXP={handleAddXP}
              />
            )}

            {activeSection === 'mock_tests' && (
              <MockTestView
                onSaveResult={handleSaveMockResult}
                onAddXP={handleAddXP}
              />
            )}

            {activeSection === 'diagrams' && (
              <DiagramGalleryView />
            )}

            {activeSection === 'fleet_gallery' && (
              <FleetGalleryView />
            )}

            {activeSection === 'revision' && (
              <RevisionView
                mistakes={state.mistakes || {}}
                onClearMistake={handleClearMistake}
                onAddXP={handleAddXP}
              />
            )}

            {activeSection === 'defence_hub' && (
              <DefenceHubView />
            )}

            {activeSection === 'afsb_master' && (
              <AfsbMasterView />
            )}

            {activeSection === 'current_affairs' && (
              <CurrentAffairsView
                onAddXP={handleAddXP}
              />
            )}

            {activeSection === 'analytics' && (
              <AnalyticsView
                state={state}
              />
            )}

            {activeSection === 'planner' && (
              <PlannerView />
            )}

            {activeSection === 'settings' && (
              <SettingsView
                state={state}
                onResetState={handleResetState}
                onImportState={handleUpdateState}
                onToggleSound={handleToggleSound}
                onToggleHud={handleToggleHud}
                onSetHudIntensity={handleSetHudIntensity}
              />
            )}
          </div>
        </main>
      </div>

      {/* Spotlight Search Modal (⌘K) */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={(sec) => {
          setActiveSection(sec);
          setSearchOpen(false);
        }}
      />

      {/* Settings & Backup Modal */}
      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        state={state}
        onResetState={handleResetState}
        onImportState={handleUpdateState}
        onToggleSound={handleToggleSound}
        onToggleHud={handleToggleHud}
        onSetHudIntensity={handleSetHudIntensity}
      />
    </div>
  );
}
