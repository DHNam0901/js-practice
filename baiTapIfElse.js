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
