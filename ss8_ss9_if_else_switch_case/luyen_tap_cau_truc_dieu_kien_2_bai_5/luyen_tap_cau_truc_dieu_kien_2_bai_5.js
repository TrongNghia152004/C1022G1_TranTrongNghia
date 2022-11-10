function ek(){
    let a = document.getElementById("canha").value;
    let b = document.getElementById("canhb").value;
    let s = 1/2*a*b
    if (s > 0){
        document.getElementById("result").innerHTML = "Diện tích tam giác vuông là: " + s
    }else {
        document.getElementById("result").innerHTML = "Giá trị của cạnh không phù hợp"
    }
}