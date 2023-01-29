const clickChangeColor = () => {
    const arrBtn = document.querySelectorAll('.color-button')
    const house = document.querySelector('#house')
    arrBtn.forEach(btn => {
        btn.onclick = () => {
            let color = btn.className;
            let newColor = color.replace('color-button', '')
            house.className = `house ${newColor}`
        }; 
    });
}
clickChangeColor();