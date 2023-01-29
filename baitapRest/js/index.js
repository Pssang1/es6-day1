const tinhDTB = (...rest) => {
  let DSD = rest;
  let diem = 0;
  DSD.forEach((item) => {
    diem += item;
  });
  return diem / DSD.length;
};

const tinhDTBK1 = () => {
  let toan = document.querySelector("#inpToan").value * 1;
  let ly = document.querySelector("#inpLy").value * 1;
  let hoa = document.querySelector("#inpHoa").value * 1;
  document.querySelector("#tbKhoi1").innerHTML = tinhDTB(toan, ly, hoa).toFixed(
    2
  );
};
const tinhDTBK2 = () => {
  let van = document.querySelector("#inpVan").value * 1;
  let su = document.querySelector("#inpSu").value * 1;
  let dia = document.querySelector("#inpDia").value * 1;
  let english = document.querySelector("#inpEnglish").value * 1;
  document.querySelector("#tbKhoi2").innerHTML = tinhDTB(
    van,
    su,
    dia,
    english
  ).toFixed(2);
};
