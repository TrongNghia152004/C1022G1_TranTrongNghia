function uk(){
let vnd = document.getElementById("vnd").value;
if (vnd <= 1000000){
    document.getElementById("result").innerHTML = "50% tiền hoa hồng"
}else if (vnd < 500000){
    document.getElementById("result").innerHTML = "25% tiền hoa hồng"
}else if (vnd < 200000){
    document.getElementById("result").innerHTML = "10% số tiền hoa hồng"
}else if (vnd < 100000){
    document.getElementById("result").innerHTML = "5% tiền hoa hồng"
}else{
    document.getElementById("result").innerHTML = "Đánh giá kém đuổi việc"
}
}