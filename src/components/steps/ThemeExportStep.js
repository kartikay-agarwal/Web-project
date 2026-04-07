import { FormCard } from '../FormCard';
import { StepHeader } from '../StepHeader';
import { themes } from '../../data/themes';

export function ThemeExportStep({ selectedTheme, onThemeChange, onDownload }) {
  return (
    <div className="step-content active">
      <StepHeader
        icon="🎨"
        title="Theme & Export"
        description="Choose a visual style for your portfolio, then download it."
      />
      <FormCard label="Choose Theme">
        <div className="theme-grid">
          {themes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`theme-card${selectedTheme === theme.id ? ' selected' : ''}`}
              onClick={() => onThemeChange(theme.id)}
            >
              <div className="theme-swatch">
                {theme.swatches.map((swatch) => (
                  <span key={swatch} style={{ background: swatch }} />
                ))}
              </div>
              <div className="theme-label">{theme.label}</div>
              <div className="theme-tag">{theme.tag}</div>
            </button>
          ))}
        </div>
      </FormCard>
      <div className="export-card" style={{ marginTop: '1.25rem' }}>
        <div className="export-illustration">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <rect
              x="8"
              y="8"
              width="48"
              height="48"
              rx="12"
              fill="rgba(129,140,248,0.08)"
              stroke="rgba(129,140,248,0.2)"
              strokeWidth="1.5"
            />
            <path
              d="M32 22v14m0 0l-5-5m5 5l5-5"
              stroke="#818cf8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M22 42h20" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h3>Export Your Portfolio</h3>
        <p>Download your portfolio as a single HTML file — ready to host anywhere.</p>
        <button className="btn btn-primary btn-large" type="button" onClick={onDownload}>
          ↓ Download HTML
        </button>
      </div>
    </div>
  );
}
