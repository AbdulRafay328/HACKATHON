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
    <p> <strong> Name:</strong> ${Name} </p>
    <p> <strong> Email: </strong> ${Email} </p>
    <p> <strong> Phone no:</strong> ${Phone} </p>
    <p> <strong> Dob:</strong> ${Dob} </p>

    <h2>Education</h2>
    <p> <strong> School:</strong> ${School} </p>
    <p> <strong> Degree: </strong> ${Degree} </p>
    <p> <strong> About edu: </strong> ${eduText} </p>

    <h2>Experience</h2>
    <p> <strong> Job:</strong> ${Job} </p>
    <p> <strong> company: </strong> ${Company} </p>
    <p> <strong> job des:</strong> ${jobText} </p>

    <h2>Skills</h2>
    <p> <strong>Skills:</strong> ${skillText} </p>

    `;

    if (resumeOutput && resumeoutput) {
      resumeoutput.innerHTML = resumeOutput;
    } else {
      console.error(`The resume output elements are missing`);
    }
  } else {
    console.error(`One or more output elements are missing`);
  }
});
