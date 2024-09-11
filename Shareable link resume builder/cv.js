var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _this = this;
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
    var Resumelink = document.getElementById("link");
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
        resumeoutput &&
        Resumelink) {
        var Name_1 = Nameele.value;
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
        var Resumepath = Resumelink.value;
        var uniqueAddress = "resumes/".concat(Resumepath.replace(/\s+/g, '_'), "_cv.html");
        var profilePicture = (_a = PictureProfile.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureurl = profilePicture
            ? URL.createObjectURL(profilePicture)
            : "";
        var resumeOutput = "\n    <h1>RESUME,</h1>\n\n    ".concat(profilePictureurl
            ? "<img src=\"".concat(profilePictureurl, "\" alt=\"Profile Picture\" class=\"pop\">")
            : "", "\n\n    <h2>Personal info</h2>\n    <p> <strong> Name:</strong> <span id=\"editname\" class=\"editable\"> ").concat(Name_1, " </span> </p>\n    <p> <strong> Email: </strong> <span id=\"editemail\" class=\"editable\"> ").concat(Email, " </span> </p>\n    <p> <strong> Phone no:</strong> <span id=\"editphone\" class=\"editable\"> ").concat(Phone, " </span> </p>\n    <p> <strong> Dob:</strong> <span id=\"editdob\" class=\"editable\"> ").concat(Dob, " </span> </p>\n\n    <h2>Education</h2>\n    <p> <strong> School:</strong> <span id=\"editschool\" class=\"editable\"> ").concat(School, " </span> </p>\n    <p> <strong> Degree: </strong> <span id=\"editdegree\" class=\"editable\">  ").concat(Degree, " </span> </p>\n    <p> <strong> About edu: </strong> <span id=\"editedutext\" class=\"editable\"> ").concat(eduText, " </span> </p>\n\n    <h2>Experience</h2>\n    <p> <strong> Job:</strong> <span id=\"editjob\" class=\"editable\"> ").concat(Job, " </span></p>\n    <p> <strong> company: </strong> <span id=\"editcompany\" class=\"editable\"> ").concat(Company, " </span></p>\n    <p> <strong> job des:</strong> <span id=\"editjobtext\" class=\"editable\">  ").concat(jobText, " </span> </p>\n\n    <h2>Skills</h2>\n    <p> <strong>Skills:</strong> <span id=\"editskilltext\" class=\"editable\"> ").concat(skillText, " </span> </p>\n    ");
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
        var downloadlink = document.createElement('a');
        downloadlink.href = "Data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downloadlink.download = uniqueAddress;
        if (resumeOutput && resumeoutput) {
            resumeoutput.innerHTML = resumeOutput;
            resumeoutput.classList.remove("hidden");
            resumeoutput.appendChild(downloadlink);
            var buttoncontainer = document.createElement('div');
            buttoncontainer.id = "buttonsContainer";
            resumeoutput.appendChild(buttoncontainer);
            var downloadbutton = document.createElement("button");
            downloadbutton.textContent = "Download as PDF";
            downloadbutton.addEventListener("click", function () {
                window.print();
            });
            buttoncontainer.appendChild(downloadbutton);
            var sharelinkbutton = document.createElement('button');
            sharelinkbutton.textContent = "Copy shareable link";
            sharelinkbutton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resumes/".concat(Name_1.replace(/\s+/g, '_'), "_cv.html");
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            _a.sent();
                            alert("Shareablle link copy in clipboard");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to copy link:", err_1);
                            alert("Failed to copy link to clipboard please try again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttoncontainer.appendChild(sharelinkbutton);
            Editablecontent();
        }
    }
    else {
        console.error("One or more output elements are missing");
    }
});
