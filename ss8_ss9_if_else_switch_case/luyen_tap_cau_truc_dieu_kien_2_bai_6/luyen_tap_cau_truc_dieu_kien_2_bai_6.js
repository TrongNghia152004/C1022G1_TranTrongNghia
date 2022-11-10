function ekk(){
    let a = +document.getElementById("soa").value;
    let b = +document.getElementById("sob").value;
    if (a !== 0){
        document.getElementById("result").innerHTML =  "Phương trinh có nghiệm là: " + (-b)/a
    }else if (a === 0 && b === 0){
        document.getElementById("result").innerHTML = "Phương trình có vô số nghiệm"
    } else {
        document.getElementById("result").innerHTML = "Phương trình vô nghiệm"
    }
}