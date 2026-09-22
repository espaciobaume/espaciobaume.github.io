/* Espacio Baume · Interacciones básicas */
(function () {
  "use strict";

  // Número de WhatsApp (formato internacional, sin + ni espacios)
  var WHATSAPP = "5492243462995";

  // Mensajes precargados según desde dónde escriben
  var MENSAJES = {
    general: "¡Hola! Quiero información sobre Espacio Baume.",
    profesional: "¡Hola! Soy profesional de la salud y quiero información sobre los consultorios de Espacio Baume.",
    comunidad: "¡Hola! Quiero enterarme de las actividades y talleres de Espacio Baume.",
    tallerista: "¡Hola! Quiero proponer un taller o actividad en Espacio Baume.",
    visita: "¡Hola! Me gustaría coordinar una visita para conocer Espacio Baume.",
    reserva: "¡Hola! Vi la disponibilidad en la web y quiero reservar un horario en un consultorio. Día y horario: "
  };

  document.querySelectorAll("[data-wa]").forEach(function (link) {
    var texto = MENSAJES[link.dataset.wa] || MENSAJES.general;
    link.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto);
    link.target = "_blank";
    link.rel = "noopener";
  });

  // Menú en celulares
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu");

  function cerrarMenu() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector(".visually-hidden").textContent = "Abrir menú";
    nav.classList.remove("is-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var abierto = toggle.getAttribute("aria-expanded") === "true";
      if (abierto) {
        cerrarMenu();
      } else {
        toggle.setAttribute("aria-expanded", "true");
        toggle.querySelector(".visually-hidden").textContent = "Cerrar menú";
        nav.classList.add("is-open");
      }
    });

    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", cerrarMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        cerrarMenu();
        toggle.focus();
      }
    });
  }

  // Línea sutil bajo el header al hacer scroll
  var header = document.querySelector(".site-header");
  function marcarScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  if (header) {
    marcarScroll();
    window.addEventListener("scroll", marcarScroll, { passive: true });
  }

  // Calendario de disponibilidad: pestañas por consultorio
  // Consultorio 1 = color Salvia, Consultorio 2 = color Flamingo (colores de Google Calendar)
  var cal = document.querySelector(".calendario");
  var frame = cal && cal.querySelector(".calendario-frame");
  if (cal && frame) {
    var CAL = {
      "1": { id: cal.getAttribute("data-cal-1"), color: "%2333B679" },
      "2": { id: cal.getAttribute("data-cal-2"), color: "%23E67C73" }
    };
    var BASE = "https://calendar.google.com/calendar/embed?hl=es&wkst=2" +
      "&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&showTabs=0&showTz=0&showTitle=0&showCalendars=0";
    var chico = window.matchMedia("(max-width: 640px)");
    var vista = "ambos";
    var tabs = document.querySelectorAll(".calendario-tabs .tab");
    var leyendas = document.querySelectorAll(".calendario-leyenda .leyenda-item");

    function armarUrl() {
      var cuales = vista === "ambos" ? ["1", "2"] : [vista];
      var url = BASE + "&mode=" + (chico.matches ? "AGENDA" : "WEEK");
      cuales.forEach(function (n) { url += "&src=" + CAL[n].id; });
      cuales.forEach(function (n) { url += "&color=" + CAL[n].color; });
      return url;
    }
    function actualizar() {
      var url = armarUrl();
      if (frame.getAttribute("src") !== url) frame.setAttribute("src", url);
      tabs.forEach(function (t) {
        var activa = t.dataset.ver === vista;
        t.classList.toggle("is-active", activa);
        t.setAttribute("aria-pressed", activa ? "true" : "false");
      });
      leyendas.forEach(function (l, i) {
        l.hidden = !(vista === "ambos" || vista === String(i + 1));
      });
    }
    tabs.forEach(function (t) {
      t.addEventListener("click", function () { vista = t.dataset.ver; actualizar(); });
    });
    if (chico.addEventListener) chico.addEventListener("change", actualizar);
    actualizar();
  }

  // Año del footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
