const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunction = () => {
        sum = Math.round( (+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value) );

        if(sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберете размер и материал картины'
        } else if(promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    const addListener = (el, event) => {
        el.addEventListener(event, calcFunction);
    }

    addListener(sizeBlock, 'change');
    addListener(materialBlock, 'change');
    addListener(optionsBlock, 'change');
    addListener(promocodeBlock, 'input');

}

export default calc;