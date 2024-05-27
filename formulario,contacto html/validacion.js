//funcion flecha es una funcion sin nombre que ayuda a utilizar una funcion solo una sola vez sin reutilizarse//
/*caja.style.transition = "1s";
caja.style.backgroundColor = "#19191a";
caja.style.color = "white";
nombre.style.transition = "1s";
email.style.transition = "1s";
telefono.style.transition = "1s";
web.style.transition = "1s";
asunto.style.transition = "1s";
idmensaje.style.transition = "1s";
nombre.style.backgroundColor = "#373739";
email.style.backgroundColor = "#373739";
telefono.style.backgroundColor = "#373739";
web.style.backgroundColor = "#373739";
asunto.style.backgroundColor = "#373739";
idmensaje.style.backgroundColor = "#373739";
console.log(cambiod);*/

/*
if (cambiolet == true){
    luna.style.right = "20%"
    icon.style.left = "20%"
    icon.style.fontSize="30px"
    luna.style.fontSize = "33px"
    icon.style.transition = "1s"
    luna.style.transition = "1s"
    form.style.transition = "1s"
    form.style.width = "60%"
    form.style.fontSize = "30px"
    letra.style.fontSize = "30px"
    luna.style.fontSize = "30px"
    nombre.style.fontSize ="30px"
    nombre.style.transition = "1s"
    email.style.fontSize ="30px"
    email.style.transition = "1s"
    telefono.style.fontSize ="30px"
    telefono.style.transition = "1s"
    web.style.fontSize ="30px"
    web.style.transition = "1s"
    asunto.style.fontSize ="30px"
    asunto.style.transition = "1s"
    idmensaje.style.fontSize ="30px"
    idmensaje.style.transition = "1s"
    botonenvio.style.fontSize = "30px"
    botonenvio.style.transition = "1s"
}
else{
    luna.style.right = "31%"
    icon.style.left = "31%"
    icon.style.fontSize="20px"
    luna.style.fontSize = "23px"
    icon.style.transition = "1s"
    luna.style.transition = "1s"
    form.style.transition = "1s"
    form.style.width = "40%"
    form.style.fontSize = "16px"
    letra.style.fontSize = "20px"
    luna.style.fontSize = "23px"
    nombre.style.fontSize ="16px"
    nombre.style.transition = "1s"
    email.style.fontSize ="16px"
    email.style.transition = "1s"
    telefono.style.fontSize ="16px"
    telefono.style.transition = "1s"
    web.style.fontSize ="16px"
    web.style.transition = "1s"
    asunto.style.fontSize ="16px"
    asunto.style.transition = "1s"
    idmensaje.style.fontSize ="16px"
    idmensaje.style.transition = "1s"
    botonenvio.style.fontSize = "15px"
    botonenvio.style.transition = "1s"
    */
window.addEventListener("load", () => {
    document.getElementById("botoncito1").addEventListener("click", a =>{
        let icon = document.getElementById("lunita");
        let cambio = a.target.checked
        console.log(cambio)
        if (cambio == true){
            icon.innerHTML = '<i class="fa-regular fa-sun"></i>';
            document.getElementById("cajita").classList.remove("fondowhite");
            document.getElementById("cajita").classList.remove("cajitabest");
            document.getElementById("cajita").classList.add("fondodark");
        }
        else{
            icon.innerHTML = '<i class="fa-regular fa-moon"></i>'
            document.getElementById("cajita").classList.remove("fondodark");
            document.getElementById("cajita").classList.add("fondowhite");

        }
    })
    document.getElementById("botnocito2")
})
//toggle te permite remplazar clases (si esta agregado lo quita, si no esta agregado lo agrega)//


function validar(){
    telefonofuntion()
}

function cambioletra(){
    let letra = document.addEventListener("click", ()=>{

    })
}

/*function cambiocolorO(){
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let web = document.getElementById("web");
    let asunto = document.getElementById("asunto");
    let idmensaje = document.getElementById("idmensaje");
    let icon = document.getElementById("lunita");
    let luna = document.getElementById("botoncito1")
    let caja = document.getElementById("cajita");
    luna.addEventListener("click", a => {
        let cambiod = a.target.checked;
        if (cambiod == true){
            icon.innerHTML = '<i class="fa-regular fa-sun"></i>';
            
            console.log(cambiod);
        }
        else{
            icon.innerHTML = '<i class="fa-regular fa-moon"></i>';
            caja.style.transition = "1s";
            caja.style.backgroundColor = "white";
            caja.style.color = "black";
            nombre.style.transition = "1s";
            email.style.transition = "1s";
            telefono.style.transition = "1s";
            web.style.transition = "1s";
            asunto.style.transition = "1s";
            idmensaje.style.transition = "1s";
            nombre.style.backgroundColor = "white";
            email.style.backgroundColor = "white";
            telefono.style.backgroundColor = "white";
            web.style.backgroundColor = "white";
            asunto.style.backgroundColor = "white";
            idmensaje.style.backgroundColor = "white";
        }
    })
    }
*/

function telefonofuntion(){
    let telefono = document.getElementById("telefono");
    let vtelefono = telefono.value;
    console.log(vtelefono.length);
    if (isNaN(vtelefono.trim())== false)
        if (vtelefono.trim().length == 9 || vtelefono.trim().length == 0){
            console.log("confirmacion");
            document.getElementById("telefono").style.border = "solid";
            document.getElementById("telefono").style.borderColor = "green";
            document.getElementById("ptelefono").style.display = "none";
        }
        else{
            document.getElementById("telefono").style.border = "solid";
            document.getElementById("telefono").style.borderColor = "red"
            document.getElementById("ptelefono").style.display = "block"
            document.getElementById("ptelefono").innerText = "Debe ser 9 digitos los que se deben registar";
            console.log("error");
        }
    else{
        document.getElementById("telefono").style.border = "solid";
        document.getElementById("telefono").style.borderColor = "red"
        document.getElementById("ptelefono").style.display = "block";
        document.getElementById("ptelefono").innerText = "Deben registrarse numeros";
        console.log("error debe ser numero");
    }

}


function cambiocolorC(){
    document.getElementById("cajita").style.backgroundColor = "white";
}


