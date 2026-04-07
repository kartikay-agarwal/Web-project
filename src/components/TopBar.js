export function TopBar({ currentStep, totalSteps }) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand">
          <div className="brand-logo">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="22" height="22" rx="6" fill="url(#bg)" />
              <path d="M8 8h10v2H8zM8 12h7v2H8zM8 16h10v2H8z" fill="#fff" opacity=".85" />
              <defs>
                <linearGradient id="bg" x1="2" y1="2" x2="24" y2="24">
                  <stop stopColor="#818cf8" />
                  <stop offset="1" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="brand-name">Folio</span>
          <span className="brand-badge">Builder</span>
        </div>
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-text">
            Step {currentStep + 1} of {totalSteps}
          </span>
        </div>
      </div>
    </header>
  );
}

