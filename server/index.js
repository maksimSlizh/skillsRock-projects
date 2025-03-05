function highAndLow(string) {
  let arr = string.split(' ')
  let low = Number(arr[0])
  let hight = Number(arr[0])

  for (let i = 0; i < arr.length; i++) {
    if(Number(arr[i]) < low) {
      low = Number(arr[i])
    }

    if(Number(arr[i]) > hight) {
      hight = Number(arr[i])
    }
  }

  return `${hight} ${low}`
}


// highAndLow("1 2 3 4 5"); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
