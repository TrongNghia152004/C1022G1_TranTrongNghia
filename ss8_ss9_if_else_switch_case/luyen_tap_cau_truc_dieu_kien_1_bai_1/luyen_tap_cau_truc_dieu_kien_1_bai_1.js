function okk() {
    let nb1 = document.getElementById("number1").value;
    let nb2 = document.getElementById("number2").value;
    let dapan = nb1 % nb2
    let result = ""
    if (dapan === 0){
        result = "Số chẵn"
    } else{
        result = "Số lẻ"
    }
    document.getElementById("result").innerHTML = result
}