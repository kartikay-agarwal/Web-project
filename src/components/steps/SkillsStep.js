import { useState } from 'react';
import { FormCard } from '../FormCard';
import { StepHeader } from '../StepHeader';

export function SkillsStep({ skills, onAddSkill, onRemoveSkill }) {
  const [inputValue, setInputValue] = useState('');

  const submitSkill = () => {
    onAddSkill(inputValue);
    setInputValue('');
  };

  return (
    <div className="step-content active">
      <StepHeader
        icon="⚡"
        title="Skills"
        description="Add your technical skills, frameworks, and tools you work with."
      />
      <FormCard label="Add Skills">
        <div className="skill-input-row">
          <input
            type="text"
            placeholder="e.g. React, Python, Figma..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                submitSkill();
              }
            }}
          />
          <button className="btn-small" type="button" onClick={submitSkill}>
            Add
          </button>
        </div>
        <div className="skills-cloud">
          {skills.length === 0 ? (
            <div className="skills-empty">No skills added yet. Start typing above!</div>
          ) : (
            skills.map((skill, index) => (
              <div className="skill-tag" key={`${skill}-${index}`}>
                {skill}
                <button className="remove-skill" type="button" onClick={() => onRemoveSkill(index)}>
                  ×
                </button>
              </div>
            ))
          )}
        </div>
      </FormCard>
    </div>
  );
}
