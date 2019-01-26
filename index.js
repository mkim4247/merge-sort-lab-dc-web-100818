function findMinAndRemoveSorted(array){
  let min = array[0]
  let index = 0

  for(let i = 1; i < array.length; i++){
    if(array[i] < min){
      min = array[i]
      index = i
    }
  }
  array.splice(index, 1)
  return min
}

function merge(array1, array2){
  let sorted = []

  while(array1.length > 0 && array2.length > 0){
    if(array1[0] < array2[0]){
      sorted.push(array1[0])
      array1.splice(0, 1)
    } else {
      sorted.push(array2[0])
      array2.splice(0, 1)
    }
  }
  return sorted.concat(array1).concat(array2)
}

function mergeSort(array){
  let mid = array.length/2
  let first = array.slice(0, mid)
  let second = array.slice(mid, array.length)

  if(array.length < 2){
    return array
  } else {
    return merge(mergeSort(first), mergeSort(second))
  }
}
