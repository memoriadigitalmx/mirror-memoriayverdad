function restantes(textArea, span){
	var largo = textArea.value.length;
	span.text(1000 - largo);
}

$('#email'),$('#mensaje'), $('#nombre'), $('#organizacion'), $('#ocupacion'), $('#sexoM'), $('#sexoF'), $('#edad')

function valida(correo, mensaje, nombre, organizacion, ocupacion, sexoM, sexoF, edad){
	if(correo.val() != ""){
		if(validarEmail(correo.val())){
			if(mensaje.val() != ""){
				var sexo = "";
				if(sexoM.is(":checked")){
					sexo = "Masculino"
				}
				if(sexoF.is(":checked")){
					sexo = "Femenino"
				}
				$.ajax({
					type: "POST",
					url: "sendbymail.php",
					data: {email: correo.val(), mensaje: mensaje.val(), nombre: nombre.val(), organizacion: organizacion.val(), ocupacion: ocupacion.val(), edad: edad.val(), sexo: sexo},
					success: function(data){
						alert(data);
						if(data.indexOf('Su mensaje ha sido enviado correctamente')!=-1){
							location.reload();
						}
					}
				});
			}
			else{
				alert("Debe ingresar el Mensaje");
			}
		}
		else{
			alert("La dirección de Correo Electrónico " + correo.val() + " es incorrecta.");
		}
	}
	else{
		alert("Debe ingresar el Correo Electrónico");
	}
	return false;
}

function validarEmail(valor) {
	return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor);
}