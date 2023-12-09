function printPrimesInRange(a, b) {
    // Hàm kiểm tra số nguyên tố
    function isPrime(number) {
        if (number < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    // In tất cả số nguyên tố từ a đến b
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// In ra tất cả số nguyên tố từ 10 đến 50
printPrimesInRange(1, 50);
