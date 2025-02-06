"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf_js_1 = require("html2pdf.js");
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    var _a, _b;
    e.preventDefault();
    var getInputValue = function (id) { var _a; return ((_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.value) || ''; };
    var getCheckboxValue = function (id) { var _a; return ((_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.checked) || false; };
    var firstName = getInputValue('firstName');
    var surname = getInputValue('surname');
    var title = getInputValue('title');
    var profileImage = (_b = (_a = document.getElementById('profileImage')) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
    var aboutMe = getInputValue('aboutMe');
    var phone = getInputValue('phone');
    var email = getInputValue('email');
    var address = getInputValue('address');
    var skills = getInputValue('skills').split(',').map(function (skill) { return skill.trim(); });
    var jobTitle = getInputValue('jobTitle');
    var jobDescription = getInputValue('jobDescription');
    var employer = getInputValue('employer');
    var location = getInputValue('location');
    var startDate = getInputValue('startDate');
    var endDate = getInputValue('endDate');
    var currentlyWorkHere = getCheckboxValue('currentlyWorkHere');
    var degree = getInputValue('degree');
    var institution = getInputValue('institution');
    var eduStartDate = getInputValue('eduStartDate');
    var eduEndDate = getInputValue('eduEndDate');
    var certName = getInputValue('certName');
    var certOrganization = getInputValue('certOrganization');
    document.getElementById('name').textContent = firstName;
    document.getElementById('surnameText').textContent = surname;
    document.getElementById('titleText').textContent = title;
    document.getElementById('ps').textContent = "About Me";
    document.getElementById('aboutMeText').textContent = aboutMe;
    document.getElementById('phone-number').textContent = phone;
    document.getElementById('emailText').textContent = email;
    document.getElementById('addressText').textContent = address;
    // Display Skills
    var skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
    // Display Experience
    var jobInfo = document.getElementById('jobInfo');
    if (jobInfo) {
        jobInfo.innerHTML = "\n            <strong>Job Title:</strong> ".concat(jobTitle, "<br>\n            <strong>Employer:</strong> ").concat(employer, "<br>\n            <strong>Location:</strong> ").concat(location, "<br>\n            <strong>Start Date:</strong> ").concat(startDate, "<br>\n            <strong>End Date:</strong> ").concat(endDate, "<br>\n            <strong>Description:</strong> ").concat(jobDescription, "<br>\n            <strong>Currently Working Here:</strong> ").concat(currentlyWorkHere ? 'Yes' : 'No', "\n        ");
    }
    // Display Education
    var eduInfo = document.getElementById('eduInfo');
    if (eduInfo) {
        eduInfo.innerHTML = "\n            <strong>Degree:</strong> ".concat(degree, "<br>\n            <strong>Institution:</strong> ").concat(institution, "<br>\n            <strong>Start Date:</strong> ").concat(eduStartDate, "<br>\n            <strong>End Date:</strong> ").concat(eduEndDate, "\n        ");
    }
    // Display Certification
    var certInfo = document.getElementById('certInfo');
    if (certInfo) {
        certInfo.innerHTML = "\n            <strong>Certificate Name:</strong> ".concat(certName, "<br>\n            <strong>Issuing Organization:</strong> ").concat(certOrganization, "\n        ");
    }
    // Show the generated resume
    var formContainer = document.querySelector('.form-container');
    var resumeContainer = document.querySelector('.resume');
    if (formContainer && resumeContainer) {
        formContainer.style.display = 'none';
        resumeContainer.style.display = 'flex';
        resumeContainer.style.flexDirection = 'row';
    }
});
(_b = document.getElementById('download-pdf')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var resume = document.getElementById('resume');
    if (resume) {
        (0, html2pdf_js_1.default)().from(resume).save('My_Resume.pdf');
    }
});
