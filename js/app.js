"use strict";

const ingresos = [];
const egresos = [];

//incia el programa
let cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};

//calculo la sumatoria de ingresos
let totalIngresos = () => {
  let totalIngreso = 0;
  let imprimir = JSON.parse(localStorage.getItem("presupuestoIngresos"));
  if (imprimir != null) {
    imprimir.forEach((element) => {
      totalIngreso += element._valor;
    });
  } else {
    console.log("El array esta nulo");
  }
  return totalIngreso;
};

//calculo la sumatoria de egresos
let totalEgresos = () => {
  let totalEgreso = 0;
  let imprimir = JSON.parse(localStorage.getItem("presupuestoEgresos"));
  if (imprimir != null) {
  imprimir.forEach((element) => {
    totalEgreso += element._valor;
  });
} else {
    console.log("El array esta nulo");
  }
  return totalEgreso;
};

//cargo encabezado llamando funciones de moneda y %
let cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  // ------------ JQuery --------------------
  $("#presupuesto").html(formatoMoneda(presupuesto));
  $("#porcentaje").html(formatoPorcentaje(porcentajeEgreso));
  $("#ingresos").html(formatoMoneda(totalIngresos()));
  $("#egresos").html(formatoMoneda(totalEgresos()));
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-AR", {
    style: "currency",
    currency: "ars",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-AR", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

//muestro en pantalla la lista de ingresos
const cargarIngresos = () => {
  let ingresosHTML = "";
  let imprimir = JSON.parse(localStorage.getItem("presupuestoIngresos"));
  if (imprimir != null) {
    imprimir.forEach((element) => {
      ingresosHTML += crearIngresoHTML(element);
      // ------------ JQuery --------------------
      $("#lista-ingresos").html(ingresosHTML);
    });
  } else {
    console.log("Se imprimen valores x defecto del Array Ingresos");
  }
};

const crearIngresoHTML = (element) => {
  let ingresoHTML = `
         <div class="elemento limpiarEstilos">
         <div class="elemento_descripcion">${element._descripcion}</div>
         <div class="derecha limpiarEstilos">
             <div class="elemento_valor">+ ${formatoMoneda(
               element._valor
             )}</div>
             <div class="elemento_eliminar">
                 <button class='elemento_eliminar--btn'>
                     <ion-icon name="close-circle-outline"
                     onclick='eliminarIngreso(${element._id})'></ion-icon>
                 </button>
             </div>
         </div>
     </div>
    `;
  return ingresoHTML;
};

//funcion para eliminar ingresos
const eliminarIngreso = (id) => {
  let borrar = JSON.parse(localStorage.getItem("presupuestoIngresos"));
  let actualizo = borrar.filter((e) => e._id != id);
  localStorage.setItem("presupuestoIngresos", JSON.stringify(actualizo));
  cargarCabecero();
  cargarIngresos();
};

//muestro en pantalla la lista de egresos
const cargarEgresos = () => {
  let egresosHTML = "";
  let imprimir = JSON.parse(localStorage.getItem("presupuestoEgresos"));
  if (imprimir != null) {
    imprimir.forEach((element) => {
      egresosHTML += crearEgresoHTML(element);
      // ------------ JQuery --------------------
      $("#lista-egresos").html(egresosHTML);
    });
  } else {
    console.log("Se imprimen valores x defecto del Array Egresos");
  }
};
const crearEgresoHTML = (egreso) => {
  let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso._descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso._valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(
          egreso._valor / totalEgresos()
        )}</div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="close-circle-outline"
                onclick='eliminarEgreso(${egreso._id})'></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
  return egresoHTML;
};

//funcion para eliminar egresos
let eliminarEgreso = (id) => {
  let borrar = JSON.parse(localStorage.getItem("presupuestoEgresos"));
  let actualizo = borrar.filter((e) => e._id != id);
  localStorage.setItem("presupuestoEgresos", JSON.stringify(actualizo));
  cargarCabecero();
  cargarEgresos();
};

//funcion para alta de ingresos (formulario)
let agregarDato = () => {
  let forma = document.forms["forma"];
  let tipo = forma["tipo"];
  let descripcion = forma["descripcion"];
  let valor = forma["valor"];
  let paso1 = JSON.parse(localStorage.getItem("presupuestoIngresos"));
  let paso2 = JSON.parse(localStorage.getItem("presupuestoEgresos"));
  if (tipo.value === "ingreso") {
    if (localStorage.getItem("presupuestoIngresos") != null) {
      if (descripcion.value !== "" && valor.value !== "") {
        paso1.push(new Ingreso(descripcion.value, +valor.value));
        localStorage.setItem("presupuestoIngresos", JSON.stringify(paso1));
        cargarCabecero();
        cargarIngresos();
      } else {
        console.log("Un campo esta vacío");
      }
    } else {
      let ingreso = new Ingreso(descripcion.value, +valor.value);
      ingresos.push(ingreso);
      localStorage.setItem("presupuestoIngresos", JSON.stringify(ingresos));
      cargarCabecero();
      cargarIngresos();
    }
  } else if (localStorage.getItem("presupuestoEgresos") != null) {
    if (descripcion.value !== "" && valor.value !== "") {
      paso2.push(new Egreso(descripcion.value, +valor.value));
      localStorage.setItem("presupuestoEgresos", JSON.stringify(paso2));
      cargarCabecero();
      cargarEgresos();
    } else {
      console.log("Un campo esta vacío");
    }
  } else {
    let egreso = new Egreso(descripcion.value, +valor.value);
    egresos.push(egreso);
    localStorage.setItem("presupuestoEgresos", JSON.stringify(egresos));
    cargarCabecero();
    cargarEgresos();
  }
};

// ------------ JQuery --------------------

// capturo click para agregar dato
$("#ion").click((e) => {
  agregarDato();
});

// inicio el programa con la carga inicial
$(() => {
  cargarApp();
});
