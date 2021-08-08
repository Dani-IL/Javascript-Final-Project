// class Theme {
//     constructor(tipo, date) {
//         (this.tipo = tipo),
//         (this.date = date);
//     }
// }
// const theme = () => {
//     if (localStorage.getItem("modo") == "oscuro") {
//         aclarar();
//     } else {
//         oscurecer();
//     }
// };
// const oscurecer = () => {
//     $("body").css("background-color", "black");
//     $("p").css("color", "white");
//     $("h2").css("color", "white");
//     $("h4").css("color", "white");
//     $("header").css("background-color", "white");
//     $("a").css("color", "black");
//     document.getElementById("theme").textContent = "LIGTH";
//     let modo = new Theme("oscuro", 2021);
//     localStorage.setItem("modo", JSON.stringify(modo));
// };
// const aclarar = () => {
//     $("body").css("background-color", "white");
//     $("p").css("color", "black");
//     $("h2").css("color", "black");
//     $("h4").css("color", "black");
//     $("header").css("background-color", "black");
//     $("a").css("color", "white");
//     document.getElementById("theme").textContent = "DARK";
//     let modo = new Theme("claro", 2021);
//     localStorage.setItem("modo", JSON.stringify(modo));
// };
// $("#theme").click(theme);
// if (JSON.parse(localStorage.getItem("modo")).tipo == "oscuro") {
//     oscurecer();
// } else {
//     aclarar();
// }

// if (localStorage.getItem("modo") == "oscuro") {
//     oscurecer();
// } else {
//     aclarar();
// }
