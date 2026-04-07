import { EntryListEditor } from '../EntryListEditor';
import { StepHeader } from '../StepHeader';

const config = [
  {
    type: 'row',
    fields: [
      { key: 'role', label: 'Role / Position', placeholder: 'e.g. Senior Developer' },
      { key: 'company', label: 'Company', placeholder: 'e.g. Google' },
    ],
  },
  { key: 'duration', label: 'Duration', placeholder: 'e.g. Jan 2022 — Present' },
  {
    key: 'description',
    label: 'Description (optional)',
    placeholder: 'What did you do?',
    element: 'textarea',
  },
];

export function ExperienceStep({ experiences, onAdd, onUpdate, onRemove }) {
  return (
    <div className="step-content active">
      <StepHeader
        icon="💼"
        title="Experience"
        description="Add your work experience — roles, companies, and what you accomplished."
      />
      <EntryListEditor
        items={experiences}
        config={config}
        itemLabel="Experience"
        onUpdate={onUpdate}
        onRemove={onRemove}
      />
      <button className="btn-add" type="button" onClick={onAdd}>
        <span className="btn-add-icon">+</span> Add Experience
      </button>
    </div>
  );
}
