const data = [4, 3, 2, 1, 0, -1, -2]
let isSorted = false

function shuffle(arr, index = 0) {
  if(index == Math.floor(arr.length/2)) return arr
  const rand = Math.floor(Math.random()*arr.length)
  const temp = arr[index]
  arr[index] = arr[rand]
  arr[rand] = temp
  
  return shuffle(arr, index+1)
}
function bogoSort(arr) {
  let tryCount = 0
  while (!isSorted) {
    tryCount++
    arr = shuffle(arr)
    for (let ind = 0; ind < arr.length; ind++) {
      if(arr[ind]>arr[ind+1]) break
      if(ind === arr.length-1) {
        isSorted = true
        break
      }
    }
  }
  return [arr, tryCount]
}
console.log("sorted.",bogoSort(data)[0], "trys.",bogoSort(data)[1]);
