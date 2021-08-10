class Theme {
  constructor(tipo) {
    this.tipo = tipo;
  }
}
const theme = () => {
  if (localStorage.getItem("modo") == "oscuro") {
    aclarar();
  } else {
    oscurecer();
  }
};

//Seteo modo oscuro
const oscurecer = () => {
  $("body").css("background-color", "black");
  $("body").css("color", "lightblue");
  $(".agregar_tipo").css("color", "black");
  $(".agregar_descripcion").css("color", "black");
  $(".agregar_valor").css("color", "black");
  let modo = new Theme("oscuro");
  localStorage.setItem("modo", JSON.stringify(modo));
};

//Seteo modo dia
const aclarar = () => {
  $("body").css("background-color", "white");
  $("body").css("color", "black");
  let modo = new Theme("claro");
  localStorage.setItem("modo", JSON.stringify(modo));
};

//Llamo funcion con el click
$("#sun").click(function () {
  aclarar();
});
//Muestro texto con hoover
$("#sun").hover(
  function () {
    $(this).append($("<span> Modo claro</span>"));
  },
  function () {
    $(this).find("span").last().remove();
  }
);
$("#sun.fade").hover(function () {
  $(this).fadeOut(100);
  $(this).fadeIn(500);
});

//Llamo funcion con el click
$("#moon").click(function () {
  oscurecer();
});

//Muestro texto con hoover
$("#moon").hover(
  function () {
    $(this).append($("<span> Modo oscuro</span>"));
  },
  function () {
    $(this).find("span").last().remove();
  }
);
$("#moon.fade").hover(function () {
  $(this).fadeOut(100);
  $(this).fadeIn(500);
});

// traigo la ultima preferencia del usuario
let modoInicial = JSON.parse(localStorage.getItem("modo"));
if (modoInicial != null) {
  switch (modoInicial.tipo) {
    case "oscuro":
      oscurecer();
      console.log("oscuro");
      break;
    case "claro":
      aclarar();
      console.log("claro");
      break;
    default:
      console.log("Valor incorrecto");
  }
} else {
  aclarar();
  console.log("El array Ingresos esta nulo");
}
