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
    reserva: "¡Hola! Vi la disponibilidad en la web y quiero reservar un horario en un consultorio. Día y horario: ",
    reserva1: "¡Hola! Quiero reservar el CONSULTORIO 1. Día: ___ Horario: ___ ¿Una vez, semanal o mensual?: ___",
    reserva2: "¡Hola! Quiero reservar el CONSULTORIO 2. Día: ___ Horario: ___ ¿Una vez, semanal o mensual?: ___"
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

  // Calendarios: en pantallas chicas la vista semanal no entra, se muestra como lista (agenda)
  var frames = document.querySelectorAll(".calendario-frame[data-src]");
  var chico = window.matchMedia("(max-width: 640px)");
  function ajustarCalendarios() {
    frames.forEach(function (f) {
      var semana = f.getAttribute("data-src");
      var url = chico.matches ? semana.replace("mode=WEEK", "mode=AGENDA") : semana;
      if (f.getAttribute("src") !== url) f.setAttribute("src", url);
    });
  }
  ajustarCalendarios();
  if (chico.addEventListener) chico.addEventListener("change", ajustarCalendarios);

  // Año del footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
