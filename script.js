"use strict";

function getOption() {
  provencie.sort();
  provencie.forEach((item) => {
    const option = createElement("option", "option", item);
    $("#region").appendChild(option);
  });
}

getOption();

async function selectRegion(select = "Toshkent") {
  const response = await fetch(
    `https://islomapi.uz/api/present/day?region=${select}`
  );
  const result = await response.json();
  renderData(result);
}

selectRegion();

$("#region").addEventListener("change", (e) => {
  $("#city").innerHTML = e.target.value;
  switch (e.target.value.toLowerCase()) {
    case "qashqadaryo":
      selectRegion("qarshi");
      break;
    case "farg'ona":
      selectRegion("qo'qon");
      break;
    case "sirdaryo":
      selectRegion("guliston");
      break;
    case "samarqand":
      selectRegion("samarqand");
      break;
    case "buxoro":
      selectRegion("buxoro");
      break;
    case "jizzax":
      selectRegion("jizzax");
      break;
    case "namangan":
      selectRegion("namangan");
      break;
    case "andijon":
      selectRegion("andijon");
      break;
    case "surxondaryo":
      selectRegion("termiz");
      break;
    case "navoiy":
      selectRegion("navoiy");
      break;
    case "xorazm":
      selectRegion("urganch");
      break;
    default:
      selectRegion("toshkent");
  }
});

function renderData(result) {
  const {
    times: { asr, hufton, peshin, quyosh, shom_iftor, tong_saharlik },
  } = result;
  $a(".fs-1")[0].textContent = tong_saharlik;
  $a(".fs-1")[1].textContent = quyosh;
  $a(".fs-1")[2].textContent = peshin;
  $a(".fs-1")[3].textContent = asr;
  $a(".fs-1")[4].textContent = shom_iftor;
  $a(".fs-1")[5].textContent = hufton;
}

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var sessionn = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    sessionn = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var time = sessionn + " " + h + ":" + m + ": " + s;
  document.getElementById("time").innerText = time;
  document.getElementById("time").textContent = time;
  setTimeout(showTime, 1000);
}
showTime();

const day = $(".week_day");

function data() {
  const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyaby",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];
  const d = new Date();
  day.innerHTML = `${d.getDate()}-${
    monthNames[d.getMonth()]
  }  ${d.getFullYear()}-yil`;
}
setInterval(() => {
  data();
}, 500);
