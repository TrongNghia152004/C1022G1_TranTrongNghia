function haha(){
    let age = +document.getElementById("age").value;
    if (age >0 && age < 120){
        document.getElementById("result").innerHTML='Bạn nhập tuổi phù hợp'
    } else {
        document.getElementById("result").innerHTML = 'Bạn nhập tuổi không phù hợp'
    }
}