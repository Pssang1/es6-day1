const hoverME = (value) => {
  let str = [...value];
  let hoverMe = "";
  console.log(str);
  str.forEach((item) => {
    let HV = `<span>${item}</span>`;
    hoverMe += HV;
  });
  return (document.querySelector(".heading").innerHTML = hoverMe);
};

const input = () => {
  let str = document.querySelector(".heading").innerHTML;
  hoverME(str);
};

input();
