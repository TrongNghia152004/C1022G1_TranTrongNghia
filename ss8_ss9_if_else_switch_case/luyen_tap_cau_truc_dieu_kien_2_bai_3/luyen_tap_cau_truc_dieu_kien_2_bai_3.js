function ukk(){
    let a = document.getElementById("canh").value;
    let s = a*a
    if (s > 0){
        document.getElementById("result").innerHTML = "Diện tích hình vuông là: " + s
    }else {
        document.getElementById("result").innerHTML = "Giá trị của cạnh không phù hợp"
    }
}