function Validar(){
    const nombre = document.getElementById("inputNombre").value
    const correo = document.getElementById("inputCorreo").value
    const telefono = document.getElementById("inputTelefono").value
    if (nombre.length > 3){
       if(correo.length > 0){
           if( telefono.length>6){
        console.log("hola")
        mostrarVentana();
        }
        else{
            alert("hacen falta caracteres en su telefono")
        }
       }
       else{
           alert("hacen falta caracteres en su correo")
       }
    }
    else{
        alert("hacen falta caracteres en su nombre")
    }
}
function mostrarVentana(){
  const div = document.querySelector(".modal-information");
  const nombre = document.querySelector(".input-nombre").value;
  const correo = document.getElementById("inputCorreo").value
  const telefono = document.getElementById("inputTelefono").value
  
  div.style.display = 'block';
  div.innerHTML += `
        <input class="input-name" value="${nombre}">
        <input class="input-email" value="${correo}"> 
        <input class="input-tel" value="${telefono}">  `
  

}

function ocultarVentana(){
    const div = document.querySelector(".modal-information")
    div.style.display = 'none';
  }