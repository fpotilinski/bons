function valida(f) {	  
	  var ok = true;
	  var msg = "¡Respuesta incorrecta!";
		
	  if(document.getElementById("respuesta1").value == "3169#")
	  {
		ok = true;
	  }else{
		ok = false;
	  }

	  if(ok==true)
		location.href = "tech.html";
		f.preventDefault();
	  
	  if(ok == false)
		alert(msg);
	  
	  
	}