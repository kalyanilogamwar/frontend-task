function find(arr) {
    const map = new Map();
    const dup = [];
  
    for (let i = 0; i < arr.length; i++) {
      const e = arr[i];
      if (map.has(e)) {
        map.set(e, map.get(e) + 1);
      } else {
        map.set(e, 1);
      }
    }
    for (const[key, value] of map.entries()) {
      if (value > 1) {
        dup.push(key);
      }
    }
  
    return dup;
  }
  const arr = [1, 2, 3, 2, 4, 3, 5, 6, 7, 5];
  const dup = find(arr);
  console.log(dup);
// const input = prompt("Enter a list of comma-separated values:");
// const arr = input.split(",").map(Number);
// const dup = find(arr);
// console.log(dup); 
  