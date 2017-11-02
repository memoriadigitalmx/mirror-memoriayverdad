var descargas = "";
var marcados = 0;

function descargaMasiva(){
	if(marcados == 1){
		var ruta = descargas.substring(0,descargas.length-1)
		//ruta = ruta.replace("//","/");
		document.getElementById("liga").href=ruta;
		document.getElementById("liga").click();
	}
	else{
		var spin = document.getElementById("spinner");
		spin.style.display = 'block';
		$.ajax({
			type: "POST",
			url: "empaquetar.php",
			data: {archivos: descargas},
			success: function(data){
				if(data != ""){
					document.getElementById("liga").href=data;
					document.getElementById("liga").click();
					spin.style.display = 'none';
				}
			}
		});
	}
}

function activaBoton(){
	var elemento = document.getElementById("descargar");
	var table = document.getElementById("tablaDocumentos");
	var rowCount = table.rows.length;
	//alert (rowCount);
	descargas = "";
	marcados = 0;
	for(var i=1; i<rowCount; i++) {
		var row = table.rows[i];
		var activo = row.cells[0].childNodes[0].checked;
		if(activo){
			marcados++;
			var path = row.cells[9].childNodes[0].textContent;
			path = path.substring(1);
			descargas += "../" + path + ",";
		}
	}
	
	if(marcados >= 1)	
		elemento.style.display = 'block';
	else
		elemento.style.display = 'none';
}