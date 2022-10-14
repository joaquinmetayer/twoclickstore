function pagoRealizado(){
    pagarSena.classList.add('disabled');
    emailjs.init('sV9Ajqlig0lkp_0dX');
    formPago
    .addEventListener('submit', function(event) {
    event.preventDefault();
    const serviceID = 'default_service';
    const templateID = 'template_gqidwkg';
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        console.log("Pago enviado!");
        pagoExitoso.style.display = 'flex';
        cartContainer.style.display = 'none';
        conQueAbono.style.display = 'none';
        pagoSena.style.display = 'none';
        dolaresOPesos.style.display = 'none';
        precioFinal.style.display = 'none';
        window.location = "#pago-exitoso";
      }, (err) => {
        console.log('Error al enviar pago');
        errorPago.style.display = 'flex';
        pagoExitoso.style.display = 'none';
        cartContainer.style.display = 'none';
        conQueAbono.style.display = 'none';
        pagoSena.style.display = 'none';
        dolaresOPesos.style.display = 'none';
        precioFinal.style.display = 'none';
        window.location = "#error-pago";
      });
    });
}