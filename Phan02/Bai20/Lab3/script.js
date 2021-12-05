// Làm bài tập tại đây

function run(userCoin, bookPrice) {
    // Đã cho trước 2 biến userCoin, bookPrice (dòng số 3)
    // Nên các bạn không tự khai báo 2 biến này

    let result = 'Thiếu tiền'
    
    if(userCoin >= bookPrice){
        result = 'Đủ tiền';
    }

    return result
}
