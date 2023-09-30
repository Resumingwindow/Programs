let a1 = 546327;
var b, sum = 0;
var z = a1;
while(a1 > 0)
{
  b = a1 % 10;
  sum = sum * 10 + b;
  a = parseInt(a1 / 10);
}
console.log(sum);
