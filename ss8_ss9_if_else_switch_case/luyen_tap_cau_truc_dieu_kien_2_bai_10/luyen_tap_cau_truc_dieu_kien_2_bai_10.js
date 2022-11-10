function bm(){
    let kWh = document.getElementById("n1").value;
    let bac6=kWh*2927;
    let bac5=kWh*2834;
    let bac4=kWh*2536;
    let bac3=kWh*2014;
    let bac2=kWh*1734;
    let bac1=kWh*1678;
        if (kWh>400) {
            document.getElementById('result').innerHTML = 'Tiền bạn phải trả: ' + bac6 + ' VND';
        } else if (kWh>300) {
            document.getElementById('result').innerHTML = 'Tiền bạn phải trả: ' + bac5 + ' VND';
        } else if (kWh>200) {
            document.getElementById('result').innerHTML = 'Tiền bạn phải trả: ' + bac4 + ' VND';
        } else if (kWh>100) {
            document.getElementById('result').innerHTML = 'Tiền bạn phải trả: ' + bac3 + ' VND';
        } else if (kWh>50) {
            document.getElementById('result').innerHTML = 'Tiền bạn phải trả: ' + bac2 + ' VND';
        }else {
            document.getElementById('result').innerHTML = 'Tiền bạn phải trả: ' + bac1 + ' VND';
        }
}