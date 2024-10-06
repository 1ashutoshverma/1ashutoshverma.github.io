import MyResume from "../assets/Ashutosh_verma_resume.pdf";

export const downloadResume = () => {
  const link = document.createElement("a");
  link.download = "Ashutosh-Verma-Resume.pdf";
  link.href = MyResume;
  link.setAttribute("class", "resume-link-2");
  link.click();

  window.open(
    "https://drive.google.com/file/d/1QZr-n2vaq2GIF7DbXJ3P44bGt7z3QKWi/view?usp=sharing",
    "_blank"
  );
};

export const githubHandle = () => {
  window.open("https://github.com/1ashutoshverma", "_blank");
};
