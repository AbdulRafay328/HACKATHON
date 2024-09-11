document.getElementById("resume")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const Nameele = document.getElementById("name") as HTMLInputElement;
  const Emailele = document.getElementById("email") as HTMLInputElement;
  const Phoneele = document.getElementById("phone") as HTMLInputElement;
  const Dobele = document.getElementById("dob") as HTMLInputElement;
  const PictureProfile = document.getElementById("propic") as HTMLInputElement;
  const Schoolele = document.getElementById("school") as HTMLInputElement;
  const Degreeele = document.getElementById("degree") as HTMLSelectElement;
  const eduTextele = document.getElementById(
    "education"
  ) as HTMLTextAreaElement;
  const Jobele = document.getElementById("jobname") as HTMLInputElement;
  const Companyele = document.getElementById("comname") as HTMLInputElement;
  const jobTextele = document.getElementById("exp") as HTMLTextAreaElement;
  const skillTextele = document.getElementById("skill") as HTMLTextAreaElement;
  const resumeoutput = document.querySelector(
    ".resumeoutput"
  ) as HTMLDivElement;

  if (
    Nameele &&
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
    resumeoutput
  ) {
    const Name = Nameele.value;
    const Email = Emailele.value;
    const Phone = Phoneele.value;
    const Dob = Dobele.value;
    const School = Schoolele.value;
    const Degree = Degreeele.value;
    const eduText = eduTextele.value;
    const Job = Jobele.value;
    const Company = Companyele.value;
    const jobText = jobTextele.value;
    const skillText = skillTextele.value;

    const profilePicture = PictureProfile.files?.[0];
    const profilePictureurl = profilePicture
      ? URL.createObjectURL(profilePicture)
      : "";

    const resumeOutput = `
    <h1>RESUME,</h1>

    ${
      profilePictureurl
        ? `<img src="${profilePictureurl}" alt="Profile Picture" class="pop">`
        : ""
    }

    <h2>Personal info</h2>
    <p> <strong> Name:</strong> <span id="editname" class="editable"> ${Name} </span> </p>
    <p> <strong> Email: </strong> <span id="editemail" class="editable"> ${Email} </span> </p>
    <p> <strong> Phone no:</strong> <span id="editphone" class="editable"> ${Phone} </span> </p>
    <p> <strong> Dob:</strong> <span id="editdob" class="editable"> ${Dob} </span> </p>

    <h2>Education</h2>
    <p> <strong> School:</strong> <span id="editschool" class="editable"> ${School} </span> </p>
    <p> <strong> Degree: </strong> <span id="editdegree" class="editable">  ${Degree} </span> </p>
    <p> <strong> About edu: </strong> <span id="editedutext" class="editable"> ${eduText} </span> </p>

    <h2>Experience</h2>
    <p> <strong> Job:</strong> <span id="editjob" class="editable"> ${Job} </span></p>
    <p> <strong> company: </strong> <span id="editcompany" class="editable"> ${Company} </span></p>
    <p> <strong> job des:</strong> <span id="editjobtext" class="editable">  ${jobText} </span> </p>

    <h2>Skills</h2>
    <p> <strong>Skills:</strong> <span id="editskilltext" class="editable"> ${skillText} </span> </p>
    `;

    const Editablecontent = () => {
      const editableele = document.querySelectorAll(".editable");
      editableele.forEach((element) => {
        element.addEventListener("click", function () {
          const currentele = element as HTMLElement;
          const currentvalues = currentele.textContent || "";

          if (currentele.tagName === "p" || currentele.tagName === "span") {
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentvalues;
            input.classList.add("editing input");

            currentele.style.display = "none";
            currentele.parentNode?.insertBefore(input, currentele);
          }
        });
      });
    };

    if (resumeOutput && resumeoutput) {
      resumeoutput.innerHTML = resumeOutput;
      Editablecontent();
    }
  } else {
    console.error(`One or more output elements are missing`);
  }
});
