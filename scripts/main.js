const buttonReact = document.querySelector('.theResult');
const colorName = document.querySelector('.color');
function generateColor() {
    const red = Math.floor(Math.random() * 255) +1;
    const green = Math.floor(Math.random() * 255) +1;
    const blue = Math.floor(Math.random() * 255) +1;

    const rgbColor = ` rgb(${red}, ${green}, ${blue})`;
    document.querySelector('body').style.backgroundColor = rgbColor;
    colorName.textContent = rgbColor;
    
}
buttonReact.addEventListener('click',() => generateColor())

