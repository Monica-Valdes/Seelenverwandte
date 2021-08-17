window.onload = function() {
    btnRegistrar = document.getElementById("btnRegistrar");
    ingreso = document.getElementById("ingreso");
    registro = document.getElementById("registro");
    principal = document.getElementById("principal");
    btnRegistroR = document.getElementById("btnRegistroR");
    txtcorreoR = document.getElementById("correoR");
    txtnombreR = document.getElementById("nombreR");
    txtcontrasenaR = document.getElementById("contrasenaR");
    txtconfirmacionR = document.getElementById("confirmacionR");
    txtfechaR = document.getElementById("fechaR");

    btnIngresar = document.getElementById("btnIngresar");
    txtcorreoI = document.getElementById("correoI");
    txtcontrasenaI = document.getElementById("contrasenaI");

    nombreP = document.getElementById("nombreP");
    btnenviarM = document.getElementById("enviarM");
    txtcorreoM = document.getElementById("correoM");
    txtmensajeM = document.getElementById("mensajeM");

    photo = document.getElementById("photo");

    btnMapa = document.getElementById("btnmapa");

    if (localStorage.getItem("login") !== "1") {
        ingreso.style.display = "block";
        principal.style.display = "none";
        document.getElementById("redactar").style.display = "none";
        document.getElementById("camara").style.display = "none";
    }
    else {
        ingreso.style.display = "none";
        principal.style.display = "block";
        document.getElementById("redactar").style.display = "block";
        nombre = localStorage.getItem("nombre");
        correo = localStorage.getItem("correo");
        nombreP = localStorage.getItem("nombreP").innerHTML = nombre;
        leerM();
    }
}

btnenviarM=document.getElementById("enviarM").addEventListener("click", function(){
    if(txtcorreoM.value == ""){
         alert("Debe ingresar el correo");
         txtcorreoM.classList.add("errorCampo"); //Agregar mediante código una clase (estilo)
         return false;
     }
     else{
        txtcorreoM.classList.remove("errorCampo"); //Quitar mediante código una clase (estilo)
         }
    if(txtmensajeM.value == ""){
        alert("Debe ingresar el mensaje");
        txtmensajeM.classList.add("errorCampo");  //Agregar mediante código una clase (estilo)
        return false;
    }
    else{
       txtmensajeM.classList.remove("errorCampo"); //Quitar mediante código una clase (estilo)
        }

   let datosM = new FormData();
    datosM.append("correoM", txtcorreoM.value);
    datosM.append("mensajeM", txtmensajeM.value);

    fetch("http://tpambvr.orgfree.com/guardarMensaje.php",{
         method: 'POST', //*GET, POST, PUT, DELETE, ETC...
         body: datosM
    })
    .then(function(response){
       if (response.ok) {
           alert("Mensaje registrado");
       }
       else{
           alert("Ocurrio un error al registrar el mensaje");
           console.log(response);
       }
    })
    .catch(function(err) {
          alert("Ocurrio un error ->" + err);
          console.log(err);
    });
});

btnRegistrar.addEventListener("click", function() {
    ingreso.style.display = "none"; //ocultar
    registro.style.display = "block"; //mostrar
});


btnRegistroR.addEventListener("click", function () {
    if(txtcorreoR.value == ""){
        alert("Debe ingresar el correo");
        txtcorreoR.classList.add("errorCampo"); //Agregar mediante código una clase (estilo)
        return false;
    }
    else{
       txtcorreoR.classList.remove("errorCampo"); //Quitar mediante código una clase (estilo)
        }
   if(txtnombreR.value == ""){
       alert("Debe ingresar el nombre");
       txtnombreR.classList.add("errorCampo");  //Agregar mediante código una clase (estilo)
       return false;
   }
   else{
      txtnombreR.classList.remove("errorCampo"); //Quitar mediante código una clase (estilo)
       }
   if(txtcontrasenaR.value == ""){
       alert("Debe ingresar la contraseña");
       txtcontrasenaR.classList.add("errorCampo");  //Agregar mediante código una clase (estilo)
       return false;
   }
   else{
      txtcontrasenaR.classList.remove("errorCampo"); //Quitar mediante código una clase (estilo)
       }
   if(txtconfirmacionR.value == ""){
       alert("Debe confirmar la contraseña");
       txtconfirmacionR.classList.add("errorCampo");  //Agregar mediante código una clase (estilo)
       return false;
   }
  if(txtcontrasenaR.value !== txtconfirmacionR.value){
       alert("La contraseña y la confirmacion no coinciden");
       txtconfirmacionR.classList.add("errorCampo");  //Agregar mediante código una clase (estilo)
       return false;
   }
   else{
      txtconfirmacionR.classList.remove("errorCampo"); //Quitar mediante código una clase (estilo)
       }
   if(txtfechaR.value == ""){
       alert("Debe ingresar la fecha de nacimiento");
       txtfechaR.classList.add("errorCampo");  //Agregar mediante código una clase (estilo)
       return false;
   }
   else{
      txtfechaR.classList.remove("errorCampo"); //Quitar mediante código una clase (estilo)
       }

  let datos = new FormData();
   datos.append("correoR", txtcorreoR.value);
   datos.append("nombreR", txtnombreR.value);
   datos.append("contrasenaR", txtcontrasenaR.value);
   datos.append("fechaR", txtfechaR.value);

   fetch("http://tpambvr.orgfree.com/registro.php",{
        method: 'POST', //*GET, POST, PUT, DELETE, ETC...
        body: datos
   })
   .then(function(response){
      if (response.ok) {
          alert("Usuario registrado");
          ingreso.style.display = "block";
          registro.style.display = "none";
      }
      else{
          alert("Ocurrio un error al registrar");
          console.log(response);
      }
   })
   .catch(function(err) {
         alert("Ocurrio un error ->" + err);
         console.log(err);
   });
});

btnIngresar.addEventListener("click", function () {
    if(txtcorreoI.value == ""){
        alert("Debe ingresar el correo");
        txtcorreoI.classList.add("errorCampo"); //Agregar mediante código una clase (estilo)
        return false;
    }
    else {
       txtcorreoI.classList.remove("errorCampo"); //Quitar mediante código una clase (estilo)
   }
   if(txtcontrasenaI.value == ""){
       alert("Debe ingresar la contraseña");
       txtcontrasenaI.classList.add("errorCampo");
       return false;
   }
   else {
      txtcontrasenaI.classList.remove("errorCampo"); //Quitar mediante código una clase (estilo)
  }

   let datosI = new FormData();
   datosI.append("correo", txtcorreoI.value);
   datosI.append("contrasena", txtcontrasenaI.value);

   fetch("http://tpambvr.orgfree.com/ingreso.php", {
        method: 'POST', //*GET, POST, PUT, DELETE, ETC...
        body: datosI
   })
   .then(function (response) {
      return response.json();
   })
   .then(function(data){
       if (data.fallo == "contrasena") {
          alert("Debe escribir la contraseña correcta");
         } 
       if (data.fallo == "usuario") {
          alert("El correo no esta registrado");
       }
       else {
          nombre = data.nombre;
          correo = data.correo;
          ingreso.style.display = "none";
          principal.style.display = "block";
          nombreP.innerHTML = nombre;
          localStorage.setItem("login", 1);
          localStorage.setItem("nombre", nombre);
          localStorage.setItem("correo", correo);
          leerM();
       }
   })
   .catch(function(err) {
         alert("Ocurrio un error inesperado");
         console.log(err);
   });
});

function abrirBarra() {
    document.getElementById("barraMenu").style.width ="250px";
}

function cerrarBarra() {
    document.getElementById("barraMenu").style.width ="0";
}

function leerM() {
    let datosLM = new FormData();
    datosLM.append("correoUsuario", correo);
    fetch("http://tpambvr.orgfree.com/leerMensajes.php", {
      method: 'POST', // *GET, POST, PUT, DELETE, ETC.
      body: datosLM
    })
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
      for (let x = 0; x < data.length; x++) {
        document.getElementById("mensajes").innerHTML =
        document.getElementById("mensajes").innerHTML + data[x].mensaje + "<br>" +
        data[x].fechahora + "<br>";
      }
    });
} //leerM --> leer los mensajes

function tomarFoto() {
  document.getElementById("redactar").style.display = "none";
  document.getElementById("mensajes").style.display = "none";
  document.getElementById("camara").style.display = "block";
  cerrarBarra();
} //TomarFoto

function mensajes() {
  document.getElementById("redactar").style.display = "block";
  document.getElementById("mensajes").style.display = "block";
  document.getElementById("camara").style.display = "none";
  cerrarBarra();
} //Mensajes

function cerrarSesion() {
    cerrarBarra();
    localStorage.removeItem("nombre");
    localStorage.removeItem("correo");
    localStorage.setItem("login", 0);
    //localStorage.clear();
    document.getElementById("redactar").style.display = "none";
    document.getElementById("principal").style.display = "none";
    document.getElementById("mensajes").style.display = "none";
    document.getElementById("camara").style.display = "none";
    document.getElementById("ingreso").style.display = "block";
}

document.getElementById("btnopen").addEventListener("click", function() {
    camera.click();
});

document.getElementById("camara").addEventListener("change", function(e) {
   ruta= URL.createObjectURL(e.target.files[0]);
    obtenerLugar();
    photo.src=ruta;
    if(obtenerSO()=="iOS"){
        let link = document.createElement('a');
        link.download="test.png";
        //link.href=photo.toDataURL("image/png").replace("image/png","image/octet-stream");
        link.href=ruta;
        link.click();
        alert("Foto Capturada");
    }
});

function obtenerSO(){
    let so=null;
    let platform=window.navigator.platform,
        iosPlatforms =['iPhone', 'iPad','iPod'];
    if(iosPlatforms.includes(platform)){
        so='iOS';
    }
    return so;
}

function obtenerLugar(){
    coordenadas={lat:0, lon:0};
    navigator.geolocation.getCurrentPosition(function(position){
        coordenadas={lat:position.coords.latitude, lon:position.coords.longitude}

        fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + coordenadas.lat + "&lon=" + coordenadas.lon)
        .then(response => response.json())
        .then(data =>{
            document.getElementById("lugar").value=data.address.country+" "+ data.address.state;
        })
        .catch(error =>{
            console.log(error);
            coordenadas={lat: 0, lon:0 };
        });
    });
}//Localizacion de la foto

document.getElementById("btnmapa").addEventListener('click',function(){
    window.open("http://www.openstreetmap.org/?mlat="+coordenadas.lat + "&mlon="+coordenadas.lon + "&zoom=20");
});//Maps -- Ubicación