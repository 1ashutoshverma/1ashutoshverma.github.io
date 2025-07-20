// export const downloadResume = () => {
//   const link = document.createElement("a");
//   link.download = "Ashutosh-Verma-Resume.pdf";
//   link.href = "/Ashutosh-Verma-Resume.pdf";
//   link.setAttribute("class", "resume-link-2");
//   link.click();
//   window.open(
//     "https://drive.google.com/uc?export=download&id=15JdBn34lKzaBECr6NkCT7RsnV5H2RG11",
//     "_blank"
//   );
// };

export const downloadResume = () => {
  window.open("/Ashutosh_Verma_Resume.pdf", "_blank");
  const link = document.createElement("a");
  link.href = "/Ashutosh_Verma_Resume.pdf";
  link.download = "Ashutosh_Verma_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


export const githubHandle = () => {
  window.open("https://github.com/1ashutoshverma", "_blank");
};

export const customAnchor = (href) => {
  const link = document.createElement("a");
  link.href = href;
  link.setAttribute("class", "resume-link-2");
  link.click();
};

export const parseBoldText = (text) => {
  const parts = text.split(/(\*.*?\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <b className="bold-text" key={index}>
          {part.slice(1, -1)}
        </b>
      );
    }
    return <span key={index}>{part}</span>;
  });
};
