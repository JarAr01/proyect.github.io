function Calcular (){
    var num1 = document.getElementById('entero1').value;
    var num2 = document.getElementById('entero2').value;
    var sum = num1 + num2;
    document.getElementById("resultado").innerHTML="Multiplicacion : " + (num1 * num2 ) + "<br>" + "Resta : " + (num1 - num2) + "<br>" + "Suma : " + sum + "<br>" + "\nDivición : " + (num1 / num2 );
  }
