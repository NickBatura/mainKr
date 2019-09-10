//Батура Никита F1819
//Задача 2 Полиндром
button1.onclick=function () {
  var str = document.getElementById("text1").value;
  str1.innerHTML=str;
  function palindrome() {
     str=str.toLowerCase().replace(/\s/g,``)
     return str === str.split("").reverse().join("");
  }
  resultPalindrome.innerHTML=palindrome();
}
//Задача 1 Число локальных максимумов
botton2.onclick = function () {
var arr =document.getElementById("form").value.replace(/\s/g,``).trim().split("");
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i]=="" || arr[i]==" ") {
     arr.splice(i,1);
  }
  else if (isNaN(+arr[i])==false) {
      arr2.push(+arr[i]);
  }
}
var b = 0;
for (var z = 0; z < arr2.length; z++) {
   if (z==0 && arr2[z]>arr2[1]) {
      ++b;
   }
   else if (arr2[z]>arr2[z-1] && arr2[z]>arr2[z+1]) {
     ++b;
   }
   else if (z==arr2.length-1 && arr2[z]>arr2[arr2.length-2]) {
     ++b;
   }
}
zadanie2.innerHTML=`Количество локальных максимумов ${b}`
}
