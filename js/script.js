/*Jorge Rodolfo de Jesús Valdés González
Modulo 3 Tarea 5 */

function seleccionbandera(){
    let valor = document.getElementById('banderas').value;
    if (valor == 1){
    document.getElementById("ejercicio1").style.display = "block";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "none";
    } else if (valor == 2){
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "block";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "none";
    } else if (valor == 3){
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "block";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "none";
    } else if (valor == 4){
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "block";
    document.getElementById("ejercicio5").style.display = "none";
    } else if (valor == 5){
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio3").style.display = "none";
    document.getElementById("ejercicio4").style.display = "none";
    document.getElementById("ejercicio5").style.display = "block";
    }
}