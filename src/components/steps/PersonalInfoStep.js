import { FormCard } from '../FormCard';
import { StepHeader } from '../StepHeader';

export function PersonalInfoStep({ formData, updateField }) {
  return (
    <div className="step-content active">
      <StepHeader
        icon="👤"
        title="Personal Info"
        description="Let's start with the basics — your name, title, and a short bio."
      />
      <FormCard label="Identity">
        <div className="form-group">
          <label>
            Full Name <span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            value={formData.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Job Title / Role</label>
          <input
            type="text"
            placeholder="e.g. Full-Stack Developer"
            value={formData.jobTitle}
            onChange={(event) => updateField('jobTitle', event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            rows="3"
            placeholder="A brief introduction about yourself..."
            value={formData.bio}
            onChange={(event) => updateField('bio', event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Profile Image URL</label>
          <input
            type="url"
            placeholder="https://your-image-url.com/photo.jpg"
            value={formData.profileImage}
            onChange={(event) => updateField('profileImage', event.target.value)}
          />
          <span className="input-hint">Paste a direct image URL for your profile photo</span>
        </div>
      </FormCard>
    </div>
  );
}
