function okkk() {
    let so_Tuoi = document.getElementById("old").value;
    if (so_Tuoi => 15) {
        document.getElementById("result").innerHTML = so_Tuoi + " tuổi. " + "Bạn đủ điều kiện học lớp 10."
    } else {
        document.getElementById("result").innerText = so_Tuoi + " tuổi. " + "Bạn Không đủ điều kiện học lớp 10."
    }
}