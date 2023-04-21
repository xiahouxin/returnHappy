const utils = {
    swap(array, a, b) {
        [array[a], array[b]] = [array[b], array[a]]
    },
    randomNum() {
        return Math.floor(Math.random() * 100)
    },
    randomArray() {
        return Array.from(Array(this.randomNum()), _ => this.randomNum())
    }
}

function partition(array, start, end) {
    let j = start
    let index = Math.floor(Math.random() * (end - start + 1) + start)
    utils.swap(array, index, end)
    let pivot = array[end]   //随机选取基准
    for (let i = start; i <= end; i++) {
        if (array[i] <= pivot) {
            utils.swap(array, i, j++)
        }
    }
    return j - 1
}

function quickSort(array, start = 0, end = array.length - 1) {
    if (end - start < 1) return array
    let pivotIndex = partition(array, start, end)
    quickSort(array, start, pivotIndex - 1)
    quickSort(array, pivotIndex + 1, end)
    return array
}
let array = utils.randomArray()
console.log(quickSort(array))