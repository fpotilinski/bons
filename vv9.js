function valida(f) {
	  var ok = true;
	  var msg = "¡Respuesta incorrecta!";
		
	  if(document.getElementById("respuesta1").value == "BERTO EL DINO")
	  {
		ok = true;
	  }else{
		ok = false;
	  }

	  if(ok==true)
		location.href = "byneg1.html";
		f.preventDefault();
	  
	  if(ok == false)
		alert(msg);
	  
	  
	}