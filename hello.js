//bt4
const pi = Math.PI;
let r =Number(prompt("Nhập bán kính hình tròn:"));
let s = pi * r **2;
let c = 2 * pi * r;
s = s.toFixed(2);
c = c.toFixed(2);
console.log("Diện tích hình tròn là: " + s);
console.log("Chu vi hình tròn là: " + c);
//bài 5
let a = Number(prompt("Nhập số chiều dài:"));
let b = Number(prompt("Nhập số chiều rộng:"));
let dienTich = a * b;
let chuVi = (a + b) * 2;
console.log("Diện tích hình chữ nhật là: " + dienTich);
console.log("Chu vi hình chữ nhật là: " + chuVi);