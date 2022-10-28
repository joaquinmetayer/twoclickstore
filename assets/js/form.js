function pagoRealizado() {
  const formName = document.getElementById("name").value;
  const formSurname = document.getElementById("surname").value;
  const formEmail = document.getElementById("email").value;
  if (formName !== "" && formSurname !== "" && formEmail !== "") {
    pagarSena.innerHTML = "Enviando pago...";
    pagarSena.classList.add("disabled");
    emailjs.init("sV9Ajqlig0lkp_0dX");
    formPago.addEventListener("submit", function (event) {
      event.preventDefault();
      const serviceID = "default_service";
      const templateID = "template_gqidwkg";
      emailjs.sendForm(serviceID, templateID, this).then(
        _ => {
          pagarSena.classList.add("disabled");
          console.log("Pago enviado!");
          pagoExitoso.style.display = "flex";
          cartContainer.style.display = "none";
          conQueAbono.style.display = "none";
          pagoSena.style.display = "none";
          dolaresOPesos.style.display = "none";
          precioFinal.style.display = "none";
          window.location = "#pago-exitoso";
        },
        (err) => {
          pagarSena.classList.add("disabled");
          console.log("Error al enviar pago");
          errorPago.style.display = "flex";
          pagoExitoso.style.display = "none";
          cartContainer.style.display = "none";
          conQueAbono.style.display = "none";
          pagoSena.style.display = "none";
          dolaresOPesos.style.display = "none";
          precioFinal.style.display = "none";
          formPago.style.display = "none";
          window.location = "#error-pago";
        }
      );
    });
  }
}
