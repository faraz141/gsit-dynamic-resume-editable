"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const generateCvButton = document.getElementById('generateCv');
    const resumePreview = document.getElementById('resumePreview');
    generateCvButton.addEventListener('click', () => {
        if (form.checkValidity()) {
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                contactNo: document.getElementById('contactNo')
                    .value,
                dob: document.getElementById('dob').value,
                nationality: document.getElementById('nationality').value,
                education: document.getElementById('education')
                    .value,
                workExperience: document.getElementById('workExperience').value,
                skills: document.getElementById('skills')
                    .value,
            };
            updateResumePreview(formData);
        }
        else {
            form.reportValidity();
        }
    });
    function updateResumePreview(formData) {
        resumePreview.innerHTML = `
            <div class="resumeContent">
                <h2 contenteditable="true" data-key="name">${formData.name}</h2>
                <p><strong>Email:</strong> <span contenteditable="true" data-key="email">${formData.email}</span></p>
                <p><strong>Contact Number:</strong> <span contenteditable="true" data-key="contactNo">${formData.contactNo}</span></p>
                <p><strong>Date of Birth:</strong> <span contenteditable="true" data-key="dob">${new Date(formData.dob).toLocaleDateString()}</span></p>
                <p><strong>Nationality:</strong> <span contenteditable="true" data-key="nationality">${formData.nationality}</span></p>
                <h3 contenteditable="true" data-key="education">Education</h3>
                <p contenteditable="true" data-key="education">${formData.education}</p>
                <h3 contenteditable="true" data-key="workExperience">Work Experience</h3>
                <p contenteditable="true" data-key="workExperience">${formData.workExperience}</p>
                <h3 contenteditable="true" data-key="skills">Skills</h3>
                <p contenteditable="true" data-key="skills">${formData.skills}</p>
            </div>
        `;
        resumePreview.querySelectorAll('[contenteditable]').forEach((el) => {
            el.addEventListener('input', (event) => {
                const target = event.target;
                const key = target.getAttribute('data-key');
                if (key) {
                    const updatedValue = target.innerText.trim();
                    formData[key] = updatedValue;
                }
            });
        });
    }
});
