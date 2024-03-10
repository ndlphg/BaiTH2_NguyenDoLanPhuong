const form = document.querySelector('form');
const aInput = document.querySelector('#a');
const bInput = document.querySelector('#b');
const resultElement = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const a = parseInt(aInput.value);
    const b = parseInt(bInput.value);

    if (isNaN(a) || isNaN(b)) {
        resultElement.textContent = 'Vui lòng nhập số hợp lệ';
        return;
    }

    if (a === 0) {
        if (b === 0) {
            resultElement.textContent = 'Phương trình vô số nghiệm';
        } else {
            resultElement.textContent = 'Phương trình vô nghiệm';
        }
    } else {
        const x = -b / a;
        resultElement.textContent = `Nghiệm của phương trình là: x = ${x}`;
    }
});
