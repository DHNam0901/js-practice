let tong =Number(prompt("Nhập Tổng:"));
let hieu =Number(prompt("Nhập Hiệu:"));
if(tong > hieu){
    let x= (tong + hieu)/2;
    let y= (tong - hieu)/2;
    console.log("Số thứ nhất là: " + x);
    console.log("Số thứ hai là: " + y);
}else{
    console.log("Hiệu lớn hơn tổng vui lòng nhập lại");
}
//bài 8
let chieuCao =Number(prompt("Nhập chiều cao:"));
let canNang =Number(prompt("Nhập cân nặng:"));
let BMI= canNang / chieuCao ** 2;
if(BMI < 18.5){
    console.log("Gầy");
}else if(BMI >= 18.5 && BMI < 25){
    console.log("Bình thường");
}else if(BMI >= 25 && BMI < 30){
    console.log("Thừa cân");
}else{
    console.log("Béo phì");
}
//bai 9
let nam =Number(prompt("Nhập năm"));
if(nam%4==0 && nam%100!==0 || nam%400==0){
    console.log("Năm nhuận");
}else{
    console.log("Không phải năm nhuận");
}
//bai10
let thang = Number(prompt("Nhập tháng"));
if(thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12){
    console.log("Tháng có 31 ngày");
}else if(thang == 4 || thang == 6 || thang == 9 || thang == 11){
    console.log("Tháng có 30 ngày");
}else if(thang == 2){
    let nam =Number(prompt("Nhập năm"));
    if(nam%4==0 && nam%100!==0 || nam%400==0){
        console.log("thang co 29 ngay");
    }else{
        console.log("thang co 28 ngay");
    }
}
else{
    console.log("Tháng không hợp lệ");
}
