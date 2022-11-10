function bn(){
    let thu_nhap = document.getElementById("thunhap").value;
    if (thu_nhap <= 5000000){
        document.getElementById("result").innerHTML = "Thu nhập cá nhân của bạn là: " + thu_nhap*90/100 + "VNĐ"
    }else if (thu_nhap <= 10000000){
        document.getElementById("result").innerHTML = "Thu nhập cá nhân của bạn là: " + thu_nhap*80/100 + "VNĐ"
    }else if (thu_nhap <= 15000000){
        document.getElementById("result").innerHTML = "Thu nhập cá nhân của bạn là: " + thu_nhap*70/100 + "VNĐ"
    }else {
        document.getElementById("result").innerHTML = "Làm gì nhiều tiền để đâu cho hết."
    }
}