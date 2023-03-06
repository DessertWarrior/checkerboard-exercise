// Your JS goes here
const GRID_BLOCK = 9;
var array_of_RGB_colorNum;
function randomcolors(color) //max 127, 127, 127
{
    let rNum = [];
    for (let i = 0; i< 3; i ++)
    {
        rNum.push(Math.floor(Math.random()*128 + color[i]));
    }
    return `rgb(${rNum})`;
}
function styleSheetAssign()
{
    let checkerBoard =document.createElement('div');
    checkerBoard.className = 'checkerBoard';
    for (let i = 0; i < GRID_BLOCK; i++)
    {
        for (let j = 0; j < GRID_BLOCK; j++) {
            var element =document.createElement('div');
            element.style.width = '11.1%';
            element.style.float = 'left';
            element.style.paddingBottom = '11.1%';
            //element.style.backgroundColor = randomcolors(array_of_RGB_colorNum); //generate a random rgb color;
            playWoodblockSoundOnClick(element); //add click event to the element node
            checkerBoard.appendChild(element);  
        }
    }
    checkerBoard.style.paddingBottom = '100%';
    //checkerBoard.style.background = `linear-gradient(to right, red, yellow)`;
    document.body.appendChild(checkerBoard);
}
function randomGradientColor(gridNum)  //gradient red blue on edges.
{
    let remainder = 128 / GRID_BLOCK / GRID_BLOCK;
    let rNum = [];
    rNum.push(128 - gridNum* remainder);    //red
    rNum.push(gridNum);   //green.
    rNum.push(gridNum* remainder);  //blue

    return rNum;
}
//function to play woodblock sound using eventListener onclick event
function playWoodblockSoundOnClick(element)
{
    element.addEventListener('click',(()=>{
        let au = new Audio('http://www.denhaku.com/r_box/sr16/sr16perc/hi%20block.wav');
        au.play();
    }));
}
function flashTile(milisec)
{
    let elements = document.querySelector('.checkerBoard').childNodes;
    console.log(elements[1]);
    for (let i = 0; i < GRID_BLOCK; i++)
    {
        for (let j = 0; j < GRID_BLOCK; j++) {
            setInterval(()=>{
                array_of_RGB_colorNum = randomGradientColor(i*GRID_BLOCK + j);
                elements[i* GRID_BLOCK +j].style.backgroundColor = randomcolors(array_of_RGB_colorNum);
            }, milisec);
        }
    }
}


styleSheetAssign();
flashTile(2000); //add setInterval to allow background color changes on element