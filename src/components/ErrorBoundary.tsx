import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Wine, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Sangria Restro & Bar UI Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#080506] text-[#e8e4dc] flex items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md p-8 rounded-3xl bg-[#140205] border border-[#8c1426] shadow-[0_0_50px_rgba(140,20,38,0.5)]">
            <div className="w-16 h-16 rounded-full bg-[#8c1426]/30 border border-[#d4af37] flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
              <Wine className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#f5eed0] mb-2">Sangria Restro & Bar</h2>
            <p className="text-xs text-[#a89f91] mb-6">
              Refreshing the cellar ambiance. Please click below to reload the experience.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e8c868] to-[#b89324] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 mx-auto hover:brightness-110 shadow-lg"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Experience</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
