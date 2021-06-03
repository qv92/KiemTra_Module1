function checkNumberInArray(number,arr) {
    let result = "";
    for (let i=0;i<arr.length;i++) {
        if (arr[i] == number) {
            result += i + ",";
        }
    }
    if (result.length == 0) {
        result = "Không tìm được vị trí của số trong mảng!";
    }
    return result;
}