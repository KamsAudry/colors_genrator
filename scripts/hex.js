const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function hexGenerator() {
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hex.length);
        color += hex[index];
    }
    document.querySelector('.color').textContent = color;
    document.querySelector('body').style.backgroundColor = '#e0e1dd';
    document.querySelector('.theResult').style.backgroundColor = color;
   
}

document.querySelector('.theResult').addEventListener('click',() => hexGenerator())


