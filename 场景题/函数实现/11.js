//实现千分位分割
// function format(number) {
//   let arr = number.toString().split(".");
//   let zhengshu = arr[0].split("");
//   let xiaoshu = arr[1] || "";
//   let all = "";
//   console.log(zhengshu);
//   zhengshu.reverse().forEach((item, index) => {
//     if (index !== 0 && index % 3 == 0) {
//       all = item + "," + all;
//     } else {
//       all = item + all;
//     }
//   });
//   return all + (xiaoshu ? "." + xiaoshu : "");
// }

function Format(number) {
  let arr = number.toString().split(".");
  let zhengshu = arr[0].split("");
  let xiaoshu = arr[1] || "";
  let all = "";
  console.log(zhengshu);
  console.log(xiaoshu);
  zhengshu.reverse().forEach((item, index) => {
    if (index !== 0 && index % 3 === 0) {
      all = item + "," + all;
    } else {
      all = item + all;
    }
  });
  return all + (xiaoshu ? "." + xiaoshu : "");
}
console.log(Format(1231223124.123));
