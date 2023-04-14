const arr = [
    "abc",
    "cba",
    "acb",
    "pjq",
    "acc",
    "asd",
    "cca",
    "ads",
    123,
    111,
    213,
    "ap",
    "pa",
  ];
  const daima = (arr, res = []) => {
    if (!arr.length) return res;
    let map = new Map();
    for (const key of arr) {
      let isNumber = typeof key === "number";
      let temp = isNumber
        ? (key + "")
            .split("")
            .sort((a, b) => a - b)
            .join("")
        : key.split("").sort().join("");
      if (!map.has(temp)) {
        map.set(temp, [key]);
      } else {
        let tempArr = map.get(temp);
        tempArr = [...tempArr, key];
        map.set(temp, tempArr);
      }
    }
    return Array.from(map.values());
  };
  console.log(daima(arr));