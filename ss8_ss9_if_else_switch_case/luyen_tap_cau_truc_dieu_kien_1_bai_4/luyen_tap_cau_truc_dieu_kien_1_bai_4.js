function dapan(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let n3 = document.getElementById("num3").value;
    if (n1 > n2 && n1 > n3){
        document.getElementById("result").innerHTML = "Số lớn nhất là: " + n1
    } else if (n2 > n1 && n2 > n3){
        document.getElementById("result").innerHTML = "Số lớn nhất là: " + n2
    } else{
        document.getElementById("result").innerHTML = "Số lớn nhất là: " + n3
    }
}