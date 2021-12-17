var reloj;   

    function stop()
    {
        
        clearInterval(reloj);
        swal("Cuenta detenida", "La cuenta ha finalizado en "+contad1+".", "info");
        document.getElementById("btn1").disabled = false;

    }

    function cuenta() 
    {
        
        contad1=-1;
        s = document.getElementById("contador");

    if(document.getElementById("valor").value === ''){
        swal("Campo vacío", "Coloca un valor para iniciar la cuenta.", "error");
    }
    else if(document.getElementById("valor").value < 0){
        swal("Valor incorrecto", "Ingresa un número positivo.", "error");
    } 
    else
    {

        var valor = parseInt(document.getElementById("valor").value); 

        reloj = setInterval(
            function() {

            document.getElementById("btn1").disabled = true;
            contad1++;

            s.innerHTML = contad1;
            if (contad1 == valor){
                clearInterval(reloj);
                document.getElementById("btn1").disabled = false;
                swal("Cuenta terminada", "La cuenta ha finalizado en "+contad1+".", "success");
            }

        },500)

    }


    }

