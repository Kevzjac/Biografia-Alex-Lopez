//Función para validar los campos del formulario
function validation(){
    var in_name = document.getElementById("forms--name").value;
    var er_name = document.getElementById("name-error");

    var in_email = document.getElementById("forms--email").value;
    var er_email = document.getElementById("email-error");
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var in_subject = document.getElementById("forms--subject").value;
    var er_subject = document.getElementById("subject-error");

    var in_message = document.getElementById("forms--message").value;
    var er_message = document.getElementById("message-error");

    if(in_name.trim() === "" || in_name.length > 50){
        alert("Información digitada incorrectamente");
        er_name.style.display = "block";
        return false;
    }

    else if(!regex.test(in_email)){
        alert("Información digitada incorrectamente");
        er_email.style.display = "block";
        return false;
    } 

    else if(in_subject.trim() === "" || in_subject.length > 50){
        alert("Información digitada incorrectamente");
        er_subject.style.display = "block";
        return false;
    }

    else if(in_message.trim() === "" || in_message.length > 300){
        alert("Información digitada incorrectamente");
        er_message.style.display = "block";
        return false;
    }  

    else {
        er_name.style.display = "none";
        er_email.style.display = "none";
        er_subject.style.display = "none";
        er_message.style.display = "none";

        alert("Estimad@ "+ in_name + " sus datos se han guardado satisfactoriamente");
        return true;
    }
}

//Función para redimensionar las imágenes cuando la resolución de la pantalla disminuya
window.addEventListener('resize', tamaño_imagen);
function tamaño_imagen(){
    const width = window.innerWidth;
    const cisco = document.getElementById('cisco');
    const fortinet = document.getElementById('fortinet');
    const google = document.getElementById('google');
    const huawei = document.getElementById('huawei');
    const java = document.getElementById('java');
    const microsoft = document.getElementById('microsoft');
    const alura_play = document.getElementById('alura_play');
    const encriptador = document.getElementById('encriptador');
    const numero_secreto = document.getElementById('numero_secreto');
    const turismo = document.getElementById('turismo');
    
       
    if (width <= 767){
        cisco.style.width = '70%';
        cisco.style.height = '70%';
        fortinet.style.width = '70%';
        fortinet.style.height = '70%';
        google.style.width = '70%';
        google.style.height = '70%';
        huawei.style.width = '70%';
        huawei.style.height = '70%';
        java.style.width = '70%';
        java.style.height = '70%';
        microsoft.style.width = '70%';
        microsoft.style.height = '70%';
        alura_play.style.width = '70%';
        alura_play.style.height = '90%';
        encriptador.style.width = '70%';
        encriptador.style.height = '90%';
        numero_secreto.style.width = '70%';
        numero_secreto.style.height = '90%';
        turismo.style.width = '70%';
        turismo.style.height = '90%';
        
    } 
}




