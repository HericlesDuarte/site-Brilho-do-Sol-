
//junta as informações e formata para exibição//   
function format() {
  
    let Nome = document.getElementById('Nome').value
    let Telefone = document.getElementById('Telefone').value
    let Email = document.getElementById('Email').value
    
    document.getElementById('cliente').innerText = 'Dados para contato'
    document.getElementById('telefone').innerHTML = `${Nome}<br> ${Telefone}<br>${Email}`
 
    
}

