let x =1;
while (x <= 100) {
  console.log(x)
  x++;
}

for (let i = 1; i <= 100; i++) {
  console.log("for loop output;" + i);
}

for (let i = 2; i <= 100; i += 2) {
  console.log("even numbers: " + i);
}

let names = ["Vicki", "April", "Vanessa", "Holly", "Kanyon", "Khris", ];
for (k in names) {
  console.log(names[k]);
}
