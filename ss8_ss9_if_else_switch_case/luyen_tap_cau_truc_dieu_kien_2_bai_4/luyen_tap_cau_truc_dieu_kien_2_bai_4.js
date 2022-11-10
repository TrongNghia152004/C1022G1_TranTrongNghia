function ukkk(){
    let a = document.getElementById("canha").value;
    let b = document.getElementById("canhb").value;
    let s = a*b
    if (s > 0){
        document.getElementById("result").innerHTML = "Diện tích hình chữ nhật là " + s
    }else {
        document.getElementById("result").innerHTML = "Giá trị của cạnh không phù hợp"
    }
}