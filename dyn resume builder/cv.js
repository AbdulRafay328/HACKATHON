var _a;
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var Nameele = document.getElementById("name");
    var Emailele = document.getElementById("email");
    var Phoneele = document.getElementById("phone");
    var Dobele = document.getElementById("dob");
    var PictureProfile = document.getElementById("propic");
    var Schoolele = document.getElementById("school");
    var Degreeele = document.getElementById("degree");
    var eduTextele = document.getElementById("education");
    var Jobele = document.getElementById("jobname");
    var Companyele = document.getElementById("comname");
    var jobTextele = document.getElementById("exp");
    var skillTextele = document.getElementById("skill");
    var resumeoutput = document.querySelector(".resumeoutput");
    if (Nameele &&
        Emailele &&
        Phoneele &&
        Dobele &&
        PictureProfile &&
        Schoolele &&
        Degreeele &&
        eduTextele &&
        Jobele &&
        Companyele &&
        jobTextele &&
        skillTextele &&
        resumeoutput) {
        var Name = Nameele.value;
        var Email = Emailele.value;
        var Phone = Phoneele.value;
        var Dob = Dobele.value;
        var School = Schoolele.value;
        var Degree = Degreeele.value;
        var eduText = eduTextele.value;
        var Job = Jobele.value;
        var Company = Companyele.value;
        var jobText = jobTextele.value;
        var skillText = skillTextele.value;
        var profilePicture = (_a = PictureProfile.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureurl = profilePicture
            ? URL.createObjectURL(profilePicture)
            : "";
        var resumeOutput = "\n    <h1>RESUME,</h1>\n\n    ".concat(profilePictureurl
            ? "<img src=\"".concat(profilePictureurl, "\" alt=\"Profile Picture\" class=\"pop\">")
            : "", "\n\n    <h2>Personal info</h2>\n    <p> <strong> Name:</strong> ").concat(Name, " </p>\n    <p> <strong> Email: </strong> ").concat(Email, " </p>\n    <p> <strong> Phone no:</strong> ").concat(Phone, " </p>\n    <p> <strong> Dob:</strong> ").concat(Dob, " </p>\n\n    <h2>Education</h2>\n    <p> <strong> School:</strong> ").concat(School, " </p>\n    <p> <strong> Degree: </strong> ").concat(Degree, " </p>\n    <p> <strong> About edu: </strong> ").concat(eduText, " </p>\n\n    <h2>Experience</h2>\n    <p> <strong> Job:</strong> ").concat(Job, " </p>\n    <p> <strong> company: </strong> ").concat(Company, " </p>\n    <p> <strong> job des:</strong> ").concat(jobText, " </p>\n\n    <h2>Skills</h2>\n    <p> <strong>Skills:</strong> ").concat(skillText, " </p>\n\n    ");
        if (resumeOutput && resumeoutput) {
            resumeoutput.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output elements are missing");
        }
    }
    else {
        console.error("One or more output elements are missing");
    }
});
