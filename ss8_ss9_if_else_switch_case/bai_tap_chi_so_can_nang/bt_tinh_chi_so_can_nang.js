function Ok(){
let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;



let bmi = weight / ( height * 2 )
    let result = ""
    if (bmi < 16)
        result = "Bạn thiếu ăn. " + "<img src='https://i.pinimg.com/736x/9e/85/fa/9e85fa6023c284646078af67f98521ff.jpg' width='100' height='100'/>"
    else if (bmi < 17)
        result = "Bạn như que tăm. " + "<img src='https://tinhayvip.com/wp-content/uploads/2021/11/anh-meo-che-sieu-bua-khien-cong-dong-mang-cuoi-bo-7.jpg' width='100' height='100'/>"
    else if (bmi < 18.5)
        result = "Bạn tạm được. " + "<img src='https://ephoto360.com/uploads/worigin/2019/07/24/minion-4505d37c70776c08_cf938a5ffe5c94168c7fcd846143786e.gif' width='100' height='100'/>"
    else if (bmi < 25)
        result = "Cuối cùng cũng có người bình thường. " + "<img src='https://phunugioi.com/wp-content/uploads/2020/11/tai-hinh-anh-dong-de-thuong.gif' width='100' height='100'/>"
    else if (bmi < 30)
        result = "Bạn trông thật mũm mĩm. " + "<img src='https://znews-photo.zingcdn.me/w660/Uploaded/aohvtsw/2019_09_28/o11.jpg' width='100' height='100'/>"
    else if (bmi < 35)
        result = "Bạn mập. " + "<img src='https://kynguyenlamdep.com/wp-content/uploads/2022/08/meme-soc-vai-meo-400x400.jpg' width='100' height='100'/>"
    else if (bmi < 40)
        result = "Bạn như con heo. " + "<img src='https://demoda.vn/wp-content/uploads/2022/01/anh-meme-meo.jpg' width='100' height='100'/>"
    else
        result = "Bạn mập cạn lời. " + "<img src='https://cdn.tgdd.vn/Files/2018/04/09/1080772/haha.gif' width='100' height='100'/>"
    document.getElementById("result").innerHTML = "Chỉ số BMI của bạn: " + bmi + "." + result
}