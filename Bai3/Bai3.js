function checkLetter(array) {
    let count = 0;
    let a = "Không có"
    for (let i=0;i<array.length;i++) {
        if ((array[i] == "a") || (array[i] == "e") || (array[i] == "i") || (array[i] == "o") || (array[i] == "u")) {
            count++;
        }
    }
    if (count != 0) {
        return count;
    } else {
        return a
    }
}