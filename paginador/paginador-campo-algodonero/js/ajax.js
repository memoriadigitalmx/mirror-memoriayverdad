/**
 * Created by fernando.gomez on 2016-05-31.
 */
function objetoAjax(){
    var xmlhttp=false;
    try{
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(e){
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(E){
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function Pagina_2(nropagina){
    //donde se mostrará los registros
    divContenido = document.getElementById('contenido');

    ajax=objetoAjax();
    //uso del medoto GET
    //indicamos el archivo que realizará el proceso de paginar
    //junto con un valor que representa el nro de pagina
    ajax.open("GET", "pag-sec-2.php?pag="+nropagina);
    divContenido.innerHTML= '<img src="anim.gif">';
    ajax.onreadystatechange=function() {
            if (ajax.readyState==4) {
            //mostrar resultados en esta capa
            divContenido.innerHTML = ajax.responseText
        }
    }
    //como hacemos uso del metodo GET
    //colocamos null ya que enviamos
    //el valor por la url ?pag=nropagina
    ajax.send(null)
}
function Pagina_3(nropagina){
    //donde se mostrará los registros
    divContenido = document.getElementById('contenido');

    ajax=objetoAjax();
    //uso del medoto GET
    //indicamos el archivo que realizará el proceso de paginar
    //junto con un valor que representa el nro de pagina
    ajax.open("GET", "pag-sec-3.php?pag="+nropagina);
    divContenido.innerHTML= '<img src="anim.gif">';
    ajax.onreadystatechange=function() {
        if (ajax.readyState==4) {
            //mostrar resultados en esta capa
            divContenido.innerHTML = ajax.responseText
        }
    }
    //como hacemos uso del metodo GET
    //colocamos null ya que enviamos
    //el valor por la url ?pag=nropagina
    ajax.send(null)
}
function Pagina_4(nropagina){
    //donde se mostrará los registros
    divContenido = document.getElementById('contenido');

    ajax=objetoAjax();
    //uso del medoto GET
    //indicamos el archivo que realizará el proceso de paginar
    //junto con un valor que representa el nro de pagina
    ajax.open("GET", "pag-sec-4.php?pag="+nropagina);
    divContenido.innerHTML= '<img src="anim.gif">';
    ajax.onreadystatechange=function() {
        if (ajax.readyState==4) {
            //mostrar resultados en esta capa
            divContenido.innerHTML = ajax.responseText
        }
    }
    //como hacemos uso del metodo GET
    //colocamos null ya que enviamos
    //el valor por la url ?pag=nropagina
    ajax.send(null)
}
function Pagina_5(nropagina){
    //donde se mostrará los registros
    divContenido = document.getElementById('contenido');

    ajax=objetoAjax();
    //uso del medoto GET
    //indicamos el archivo que realizará el proceso de paginar
    //junto con un valor que representa el nro de pagina
    ajax.open("GET", "pag-sec-5.php?pag="+nropagina);
    divContenido.innerHTML= '<img src="anim.gif">';
    ajax.onreadystatechange=function() {
        if (ajax.readyState==4) {
            //mostrar resultados en esta capa
            divContenido.innerHTML = ajax.responseText
        }
    }
    //como hacemos uso del metodo GET
    //colocamos null ya que enviamos
    //el valor por la url ?pag=nropagina
    ajax.send(null)
}
function Pagina_6(nropagina){
    //donde se mostrará los registros
    divContenido = document.getElementById('contenido');

    ajax=objetoAjax();
    //uso del medoto GET
    //indicamos el archivo que realizará el proceso de paginar
    //junto con un valor que representa el nro de pagina
    ajax.open("GET", "pag-sec-6.php?pag="+nropagina);
    divContenido.innerHTML= '<img src="anim.gif">';
    ajax.onreadystatechange=function() {
        if (ajax.readyState==4) {
            //mostrar resultados en esta capa
            divContenido.innerHTML = ajax.responseText
        }
    }
    //como hacemos uso del metodo GET
    //colocamos null ya que enviamos
    //el valor por la url ?pag=nropagina
    ajax.send(null)
}
function Pagina_7(nropagina){
    //donde se mostrará los registros
    divContenido = document.getElementById('contenido');

    ajax=objetoAjax();
    //uso del medoto GET
    //indicamos el archivo que realizará el proceso de paginar
    //junto con un valor que representa el nro de pagina
    ajax.open("GET", "pag-sec-7.php?pag="+nropagina);
    divContenido.innerHTML= '<img src="anim.gif">';
    ajax.onreadystatechange=function() {
        if (ajax.readyState==4) {
            //mostrar resultados en esta capa
            divContenido.innerHTML = ajax.responseText
        }
    }
    //como hacemos uso del metodo GET
    //colocamos null ya que enviamos
    //el valor por la url ?pag=nropagina
    ajax.send(null)
}
