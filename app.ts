interface ResumeFormData {
  name: string;
  email: string;
  contactNo: string;
  dob: string;
  nationality: string;
  education: string;
  workExperience: string;
  skills: string;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resumeForm') as HTMLFormElement;
  const generateCvButton = document.getElementById(
    'generateCv',
  ) as HTMLButtonElement;
  const resumePreview = document.getElementById(
    'resumePreview',
  ) as HTMLDivElement;

  generateCvButton.addEventListener('click', () => {
    if (form.checkValidity()) {
      const formData: ResumeFormData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        contactNo: (document.getElementById('contactNo') as HTMLInputElement)
          .value,
        dob: (document.getElementById('dob') as HTMLInputElement).value,
        nationality: (
          document.getElementById('nationality') as HTMLInputElement
        ).value,
        education: (document.getElementById('education') as HTMLTextAreaElement)
          .value,
        workExperience: (
          document.getElementById('workExperience') as HTMLTextAreaElement
        ).value,
        skills: (document.getElementById('skills') as HTMLTextAreaElement)
          .value,
      };

      updateResumePreview(formData);
    } else {
      form.reportValidity();
    }
  });

  function updateResumePreview(formData: ResumeFormData) {
    resumePreview.innerHTML = `
            <div class="resumeContent">
                <h2 contenteditable="true" data-key="name">${formData.name}</h2>
                <p><strong>Email:</strong> <span contenteditable="true" data-key="email">${
                  formData.email
                }</span></p>
                <p><strong>Contact Number:</strong> <span contenteditable="true" data-key="contactNo">${
                  formData.contactNo
                }</span></p>
                <p><strong>Date of Birth:</strong> <span contenteditable="true" data-key="dob">${new Date(
                  formData.dob,
                ).toLocaleDateString()}</span></p>
                <p><strong>Nationality:</strong> <span contenteditable="true" data-key="nationality">${
                  formData.nationality
                }</span></p>
                <h3 contenteditable="true" data-key="education">Education</h3>
                <p contenteditable="true" data-key="education">${
                  formData.education
                }</p>
                <h3 contenteditable="true" data-key="workExperience">Work Experience</h3>
                <p contenteditable="true" data-key="workExperience">${
                  formData.workExperience
                }</p>
                <h3 contenteditable="true" data-key="skills">Skills</h3>
                <p contenteditable="true" data-key="skills">${
                  formData.skills
                }</p>
            </div>
        `;

    resumePreview.querySelectorAll('[contenteditable]').forEach((el) => {
      el.addEventListener('input', (event) => {
        const target = event.target as HTMLElement;
        const key = target.getAttribute('data-key');
        if (key) {
          const updatedValue = target.innerText.trim();
          formData[key as keyof ResumeFormData] = updatedValue;
        }
      });
    });
  }
});
