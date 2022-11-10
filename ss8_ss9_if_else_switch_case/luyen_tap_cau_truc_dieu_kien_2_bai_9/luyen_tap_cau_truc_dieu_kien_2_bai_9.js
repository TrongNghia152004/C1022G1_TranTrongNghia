function hehe(){
    let a = +document.getElementById("soa").value;
    let b = +document.getElementById("sob").value;
    let c = +document.getElementById("soc").value;
    if (a >0 && b > 0 && c > 0){
            }if (a + b > c && a + c > b && b + c > a){
        document.getElementById("result").innerHTML = "a,b,c là cạnh tam giác"
             }else {
        document.getElementById("result").innerHTML = "a,b,c không phải là cạnh của tam giác"
    }
}