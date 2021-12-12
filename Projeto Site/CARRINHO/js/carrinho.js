var total = 0; //produtos que estão na LocalStorage.
 var i = 0; 
 var valor = 0; //produto convertido em Float.
 
 for(i=1; i<=99; i++) //produtos registrados na localStorage
 {
	 var prod = localStorage.getItem("produto" + i + ""); // verifica se há recheio nesta posição. 
	 if(prod != null) 
	 {	
		 
		 document.getElementById("itens").innerHTML += localStorage.getItem("qtd" + i) + " x ";
		 document.getElementById("itens").innerHTML += localStorage.getItem("produto" + i);
		 document.getElementById("itens").innerHTML += " ";
		 document.getElementById("itens").innerHTML += "R$ " + localStorage.getItem("valor" + i) + "<hr>";
		 
		 // calcula o total
		 valor = parseFloat(localStorage.getItem("valor" + i)); 
		 total = (total + valor); // arredonda para 2 casas decimais 
	 }
 } 
 
 document.getElementById("total").innerHTML = total.toFixed(2); 