function okkkk(){
    let a = +document.getElementById("nb1").value;
    let b = +document.getElementById("nb2").value;
    let c = +document.getElementById("nb3").value;
    let dtb = (a + (b * 2) + (c * 3)) / 6;
    if (dtb >= 8) {
        if (dtb >= 9.5) {
            document.getElementById("result").innerHTML = dtb + " Học sinh xuất sắc";
        } else {
            document.getElementById("result").innerHTML = dtb + " Học sinh giỏi";
        }
    } else if (dtb >= 6.5) {
        document.getElementById("result").innerHTML = dtb + "." + " Học sinh khá";
    } else if (dtb >= 5) {
        document.getElementById("result").innerHTML = dtb + "." + " Học sinh trung bình";
    } else if (dtb >= 3.5) {
        document.getElementById("result").innerHTML = dtb + "." + " Học sinh yếu";
    } else {
        document.getElementById("result").innerHTML = dtb + "." + " Học sinh kém";
    }
}