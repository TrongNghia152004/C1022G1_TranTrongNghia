function bm(){
    let dien_nang_tieu_thu = document.getElementById("n1").value;
    let don_gia_dien = document.getElementById("n2").value;
    let tien_dien = dien_nang_tieu_thu*don_gia_dien
    if (dien_nang_tieu_thu> 0 && don_gia_dien >0 ) {
        document.getElementById("result").innerHTML = "Giá điện :" + tien_dien + " VNĐ "
    }else {
        document.getElementById("result").innerHTML = "Giá trị nhập vào không hợp lệ."
    }
}