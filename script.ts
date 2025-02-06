import html2pdf from 'html2pdf.js';

document.getElementById('resumeForm')?.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const getInputValue = (id: string): string => (document.getElementById(id) as HTMLInputElement)?.value || '';
    const getCheckboxValue = (id: string): boolean => (document.getElementById(id) as HTMLInputElement)?.checked || false;

    const firstName = getInputValue('firstName');
    const surname = getInputValue('surname');
    const title = getInputValue('title');
    const profileImage = (document.getElementById('profileImage') as HTMLInputElement)?.files?.[0];
    const aboutMe = getInputValue('aboutMe');
    const phone = getInputValue('phone');
    const email = getInputValue('email');
    const address = getInputValue('address');
    const skills = getInputValue('skills').split(',').map(skill => skill.trim());

    const jobTitle = getInputValue('jobTitle');
    const jobDescription = getInputValue('jobDescription');
    const employer = getInputValue('employer');
    const location = getInputValue('location');
    const startDate = getInputValue('startDate');
    const endDate = getInputValue('endDate');
    const currentlyWorkHere = getCheckboxValue('currentlyWorkHere');

    const degree = getInputValue('degree');
    const institution = getInputValue('institution');
    const eduStartDate = getInputValue('eduStartDate');
    const eduEndDate = getInputValue('eduEndDate');

    const certName = getInputValue('certName');
    const certOrganization = getInputValue('certOrganization');

    document.getElementById('name')!.textContent = firstName;
    document.getElementById('surnameText')!.textContent = surname;
    document.getElementById('titleText')!.textContent = title;

    document.getElementById('ps')!.textContent = "About Me";
    document.getElementById('aboutMeText')!.textContent = aboutMe;

    document.getElementById('phone-number')!.textContent = phone;
    document.getElementById('emailText')!.textContent = email;
    document.getElementById('addressText')!.textContent = address;

    // Display Skills
    const skillsList = document.getElementById('skillsList') as HTMLUListElement;
    skillsList.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Display Experience
    const jobInfo = document.getElementById('jobInfo');
    if (jobInfo) {
        jobInfo.innerHTML = `
            <strong>Job Title:</strong> ${jobTitle}<br>
            <strong>Employer:</strong> ${employer}<br>
            <strong>Location:</strong> ${location}<br>
            <strong>Start Date:</strong> ${startDate}<br>
            <strong>End Date:</strong> ${endDate}<br>
            <strong>Description:</strong> ${jobDescription}<br>
            <strong>Currently Working Here:</strong> ${currentlyWorkHere ? 'Yes' : 'No'}
        `;
    }

    // Display Education
    const eduInfo = document.getElementById('eduInfo');
    if (eduInfo) {
        eduInfo.innerHTML = `
            <strong>Degree:</strong> ${degree}<br>
            <strong>Institution:</strong> ${institution}<br>
            <strong>Start Date:</strong> ${eduStartDate}<br>
            <strong>End Date:</strong> ${eduEndDate}
        `;
    }

    // Display Certification
    const certInfo = document.getElementById('certInfo');
    if (certInfo) {
        certInfo.innerHTML = `
            <strong>Certificate Name:</strong> ${certName}<br>
            <strong>Issuing Organization:</strong> ${certOrganization}
        `;
    }

    // Show the generated resume
    const formContainer = document.querySelector('.form-container') as HTMLElement;
    const resumeContainer = document.querySelector('.resume') as HTMLElement;

    if (formContainer && resumeContainer) {
        formContainer.style.display = 'none';
        resumeContainer.style.display = 'flex';
        resumeContainer.style.flexDirection = 'row';
    }
});

document.getElementById('download-pdf')?.addEventListener('click', () => {
    const resume = document.getElementById('resume'); 
    if (resume) {
        html2pdf().from(resume).save('My_Resume.pdf');
    }
});
