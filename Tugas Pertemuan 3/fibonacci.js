function generateFibonacci() {
    const jumlah = parseInt(document.getElementById('jumlah').value);
    let fibonacci = [];
    let a = 0, b = 1;

    for (let i = 0; i < jumlah; i++) {
        fibonacci.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }

    document.getElementById('hasil').innerText = fibonacci.join(', ');
}