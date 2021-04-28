export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  array, startIndex, endIndex, auxiliaryArray,
  animations,
) {
  if (startIndex === endIndex) return;
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  mergeSortHelper(auxiliaryArray, startIndex, middleIndex, array, animations);
  mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, array, animations);
  doMerge(array, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
}

function doMerge(
  array, startIndex, middleIndex, endIndex,
  auxiliaryArray, animations,
) {
  let k = startIndex;
  let i = startIndex;
  let j = middleIndex + 1;
  while (i <= middleIndex && j <= endIndex) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      array[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      array[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIndex) {
    animations.push([k, auxiliaryArray[i]]);
    array[k++] = auxiliaryArray[i++];
  }
  while (j <= endIndex) {
    animations.push([k, auxiliaryArray[j]]);
    array[k++] = auxiliaryArray[j++];
  }
}

// export function getBubbleSortAnimations(array) {
//   const animations = [];
//   if (array.length <= 1) return array;
//   const auxiliaryArray = array.slice();
//   bubbleSortHelper(array, auxiliaryArray, animations);
//   return animations;
// }

// function bubbleSortHelper(
//   array, auxiliaryArray, animations
// ) {
//   let i = 0;
//   let j = 0;
//   // console.log("i is" + i);

//   for (i = 0; i < array.length - 1; i++) {
//     // console.log("i is" + i);

//     for (j = 0; j < (array.length - i - 1); j++) {
//       const elementNo = j + 1;
//       if (array[j] > array[j++]) {
//         // animations.push([j, auxiliaryArray[j]]);
//         const temp = array[i];
//         auxiliaryArray[i] = array[elementNo];
//         // console.log("j is: " + j);
//         auxiliaryArray[elementNo] = temp;
//       }
//     }
//   }
//   let y = 0;
//   for (y = 0; y < array.length; y++) {
//     animations.push([y, array[y]]);
//   }
// }
