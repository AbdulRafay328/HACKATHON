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
            : "", "\n\n    <h2>Personal info</h2>\n    <p> <strong> Name:</strong> <span id=\"editname\" class=\"editable\"> ").concat(Name, " </span> </p>\n    <p> <strong> Email: </strong> <span id=\"editemail\" class=\"editable\"> ").concat(Email, " </span> </p>\n    <p> <strong> Phone no:</strong> <span id=\"editphone\" class=\"editable\"> ").concat(Phone, " </span> </p>\n    <p> <strong> Dob:</strong> <span id=\"editdob\" class=\"editable\"> ").concat(Dob, " </span> </p>\n\n    <h2>Education</h2>\n    <p> <strong> School:</strong> <span id=\"editschool\" class=\"editable\"> ").concat(School, " </span> </p>\n    <p> <strong> Degree: </strong> <span id=\"editdegree\" class=\"editable\">  ").concat(Degree, " </span> </p>\n    <p> <strong> About edu: </strong> <span id=\"editedutext\" class=\"editable\"> ").concat(eduText, " </span> </p>\n\n    <h2>Experience</h2>\n    <p> <strong> Job:</strong> <span id=\"editjob\" class=\"editable\"> ").concat(Job, " </span></p>\n    <p> <strong> company: </strong> <span id=\"editcompany\" class=\"editable\"> ").concat(Company, " </span></p>\n    <p> <strong> job des:</strong> <span id=\"editjobtext\" class=\"editable\">  ").concat(jobText, " </span> </p>\n\n    <h2>Skills</h2>\n    <p> <strong>Skills:</strong> <span id=\"editskilltext\" class=\"editable\"> ").concat(skillText, " </span> </p>\n    ");
        var Editablecontent = function () {
            var editableele = document.querySelectorAll(".editable");
            editableele.forEach(function (element) {
                element.addEventListener("click", function () {
                    var _a;
                    var currentele = element;
                    var currentvalues = currentele.textContent || "";
                    if (currentele.tagName === "p" || currentele.tagName === "span") {
                        var input = document.createElement("input");
                        input.type = "text";
                        input.value = currentvalues;
                        input.classList.add("editing input");
                        currentele.style.display = "none";
                        (_a = currentele.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentele);
                    }
                });
            });
        };
        if (resumeOutput && resumeoutput) {
            resumeoutput.innerHTML = resumeOutput;
            Editablecontent();
        }
    }
    else {
        console.error("One or more output elements are missing");
    }
});
