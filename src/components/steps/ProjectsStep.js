import { EntryListEditor } from '../EntryListEditor';
import { StepHeader } from '../StepHeader';

const config = [
  { key: 'title', label: 'Project Title', placeholder: 'e.g. Weather App' },
  {
    key: 'description',
    label: 'Description',
    placeholder: 'Brief description...',
    element: 'textarea',
  },
  {
    key: 'link',
    label: 'Project URL (optional)',
    placeholder: 'https://...',
    type: 'url',
  },
];

export function ProjectsStep({ projects, onAdd, onUpdate, onRemove }) {
  return (
    <div className="step-content active">
      <StepHeader
        icon="🚀"
        title="Projects"
        description="Showcase your best work — up to 6 projects with descriptions and links."
      />
      <EntryListEditor
        items={projects}
        config={config}
        itemLabel="Project"
        onUpdate={onUpdate}
        onRemove={onRemove}
      />
      <button className="btn-add" type="button" onClick={onAdd}>
        <span className="btn-add-icon">+</span> Add Project
      </button>
    </div>
  );
}
