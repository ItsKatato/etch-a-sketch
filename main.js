const drawingBoard = document.querySelector('.drawingBoard');
const gridSlider = document.querySelector('.gridRange');
let gridAmount = gridSlider.value * gridSlider.value;
const root = document.querySelector(':root');
const colorSelector = document.querySelector('.colorSelected')
const colorPicker = document.querySelector('.colorPicker')
let selectedColor = colorPicker.value
const randomColor = Math.floor(Math.random()*16777215).toString(16);
const rainbowBtnBkg = document.querySelector('.rainbowTool')
const rainbowChkBox = document.querySelector('.checkbox')
const rainbowImg= document.querySelector('.rainbowImg')
const eraser = document.querySelector('.reset')


root.style.setProperty('--gridEdgeAmount', gridSlider.value)

function rainbowDraw(){
    let color = ""
    color = Math.floor(Math.random()*16777215).toString(16);
    return color
}


document.addEventListener('mouseover',function(e){
    if (rainbowChkBox.checked){
        selectedColor = `#` + rainbowDraw();
    } else {
        selectedColor = colorPicker.value;
    }
    if (e.target && e.target.matches(".grid")){
        e.target.style.backgroundColor = selectedColor;
     }
 });

for (let i = 0; i < gridAmount; i++){
    let div = document.createElement('div');
    div.classList.add('grid');
    drawingBoard.appendChild(div);
}

const grids = document.querySelectorAll('.grid');

gridSlider.addEventListener('input', () => {
    root.style.setProperty('--gridEdgeAmount', gridSlider.value)
    gridAmount = gridSlider.value * gridSlider.value;
    while (drawingBoard.firstChild){
        drawingBoard.removeChild(drawingBoard.firstChild)
    }
    for (let i = 0; i < gridAmount; i++){
        let div = document.createElement('div');
        div.classList.add('grid');
        drawingBoard.appendChild(div);
    }
    
})


colorPicker.addEventListener('input', () => {
    selectedColor = colorPicker.value;
})

rainbowChkBox.addEventListener('click', () => {
    if (rainbowChkBox.checked){
        rainbowBtnBkg.style.backgroundColor = '#FA6A34';
        rainbowImg.style.filter = 'invert(100%) sepia(15%) saturate(0%) hue-rotate(252deg) brightness(105%) contrast(100%)';
    } else {
        rainbowBtnBkg.style.backgroundColor = '#EDF6F9';
        rainbowImg.style.filter = 'invert(30%) sepia(0%) saturate(3482%) hue-rotate(335deg) brightness(94%) contrast(96%)';
    }

})

eraser.addEventListener('click', () => {
    while (drawingBoard.firstChild){
        drawingBoard.removeChild(drawingBoard.firstChild)
    }
    for (let i = 0; i < gridAmount; i++){
        let div = document.createElement('div');
        div.classList.add('grid');
        drawingBoard.appendChild(div);
    }
})