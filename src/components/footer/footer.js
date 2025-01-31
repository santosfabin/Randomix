function Footer() {
  const divFooter = document.createElement("footer");

  const sectionFooter = document.createElement("div");
  sectionFooter.id = "sectionFooter"
  divFooter.appendChild(sectionFooter);

  const innerFooterSection = document.createElement("div");
  innerFooterSection.id = "innerFooterSection"
  sectionFooter.appendChild(innerFooterSection);

  const innerSection = document.createElement("div")
  innerFooterSection.appendChild(innerSection)

  const gitHubImage = document.createElement("img");
  gitHubImage.src = "https://santosfabin.github.io/Randomix/src/assets/footer/gitHubImage.png";
  gitHubImage.alt = "Github";
  innerSection.appendChild(gitHubImage);

  const linksSection = document.createElement("div");
  innerSection.appendChild(linksSection);

  const projectLink = document.createElement("a");
  projectLink.href = "https://github.com/santosfabin/Randomix";
  projectLink.target = "_blank";
  projectLink.textContent = "Project";
  linksSection.appendChild(projectLink);

  const andersonLink = document.createElement("a");
  andersonLink.href = "https://github.com/andersonjr1";
  andersonLink.target = "_blank";
  andersonLink.textContent = "Anderson";
  linksSection.appendChild(andersonLink);

  const fabianoLink = document.createElement("a");
  fabianoLink.href = "https://github.com/santosfabin";
  fabianoLink.target = "_blank";
  fabianoLink.textContent = "Fabiano";
  linksSection.appendChild(fabianoLink);

  const gabriellLink = document.createElement("a");
  gabriellLink.href = "https://github.com/gbrQueiroz";
  gabriellLink.target = "_blank";
  gabriellLink.textContent = "Gabriell";
  linksSection.appendChild(gabriellLink);

  const alphaImageLink = document.createElement("a");
  alphaImageLink.href = "https://www.alphaedtech.org.br/";
  alphaImageLink.target = "_blank";
  innerFooterSection.appendChild(alphaImageLink);

  const alphaImage = document.createElement("img");
  alphaImage.src = "https://santosfabin.github.io/Randomix/src/assets/footer/alphaImage.png";
  alphaImage.alt = "AplhaEdtech Site";
  alphaImageLink.appendChild(alphaImage);

  const copyrightText = document.createElement("p");
  copyrightText.textContent = "© 2024 - All rights reserved.";
  sectionFooter.appendChild(copyrightText);

  return divFooter;
}

document.querySelector("body").appendChild(Footer());

export { Footer };