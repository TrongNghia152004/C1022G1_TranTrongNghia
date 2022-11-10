function cn(){
         let so_tien = document.getElementById("sotien").value;
         let thang = document.getElementById("thang").value;
         let lai_suat = document.getElementById("laisuat").value;
         let lai_thang = (so_tien*lai_suat/100)/thang
    if (so_tien > 0 && thang>0 && lai_suat>0){
    document.getElementById("result").innerHTML = "Số lãi phải trả ngân hàng hằng tháng là: " + lai_thang + " VNĐ"
    }else {
        document.getElementById("result").innerHTML = "Bạn nhập sai giá trị."
    }
}