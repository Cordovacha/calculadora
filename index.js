function Limpiar (){
    document.getElementById("miCalculadora").reset();
}
 

//function removerCss (result){
   // if (resultInput => 0){
       // resultInput.classList.remove('error')
   // } else
    // return resultInput.value;
//}

//DRY don't repeat yourself
// KISS Keep it stupid simple
  //handleResult(result)
 //function handleResult(result){
   //  if(result < 0){

function sumar() {
    let x = parseInt(document.getElementById("valor1").value);    
    let y = parseInt(document.getElementById("valor2").value);

    let resultInput = document.getElementById('resolver')
    const result = x + y
    
    if(result > 0){
         resultInput.value = result
        resultInput.classList.add('success');
        resultInput.classList.remove('error');
    } else {    
        document.getElementById('resolver').value = result;
     }

    }



function restar() {
    var x = parseInt(document.getElementById("valor1").value);    
    var y = parseInt(document.getElementById("valor2").value);  
    let resultInput = document.getElementById('resolver');
    const result = x - y;
    
    if (result < 0){

       resultInput.value = "No puede ser menor que 0"; 
        resultInput.classList.add('error')
        

//resultInput.classList.remove('error');
        //return resultInput;
         
    }   else if (result => 0){

        resultInput.classList.add('success');
        resultInput.classList.remove('error')
       // removerCss.resultInput;
        document.getElementById('resolver').value = result;
       
        
    } else
    document.getElementById('resolver').value = result;



}



function multiplicar() {
    var x = parseInt(document.getElementById("valor1").value);    
    var y = parseInt(document.getElementById("valor2").value); 
    let resultInput = document.getElementById('resolver');
    const result = x * y
    
    if(result > 0){
         resultInput.value = result
        resultInput.classList.add('success');
        resultInput.classList.remove('error');

    } else {    

        document.getElementById('resolver').value = result;
     }

 
}



function dividir() {
    var x = parseInt(document.getElementById("valor1").value);    
    var y = parseInt(document.getElementById("valor2").value);
    //     
    let resultInput = document.getElementById('resolver');
    const result = Math.round(x / y);
    
    if(result => 0){
        resultInput.value = "el resultado esta redondeado";
        resultInput.value = result;
        resultInput.classList.add('success');
        resultInput.classList.remove('error');
    } else {    
        document.getElementById('resolver').value = result;

     }

}

