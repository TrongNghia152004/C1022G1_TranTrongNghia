function ekkk(){
    let a = +document.getElementById("soa").value;
    let b = +document.getElementById("sob").value;
    let c = +document.getElementById("soc").value;
    let delta = ""
    let result1 = ""
    let result2 = ""
    let result3 = ""
    if (a === 0 && b!==0) {
        document.getElementById("result").innerHTML = (-c) / b;
    }else if (a!==0) {
        delta = b*b - 4*a*c;
             }if (delta<0) {
                    document.getElementById("result").innerHTML = "Phương trình vô nghiệm"
            }else if ( delta === 0){
                result1 = (-b) / 2*a
                    document.getElementById("result").innerHTML = "Phương trình có một nghiệm duy nhất: " + result1
                }else if (delta > 0) {
                 result2 = (-b + Math.sqrt(delta)) / 2 * a
                 result3 = (-b - Math.sqrt(delta)) / 2 * a
                     document.getElementById("result").innerHTML = "Phương trình có 2 nghiệm phân biệt: " + result2 + " và " + result3
                }else {
                     document.getElementById("result").innerHTML = "Phương trình vô nghiệm."
    }
}