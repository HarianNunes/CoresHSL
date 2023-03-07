// Alias baseado no jQuery
const $ = document.querySelector.bind(document)
const $all = document.querySelectorAll.bind(document)

const onChangeRangesRGBA = () => {
  const red = $('#red').value
  const green = $('#green').value
  const blue = $('#blue').value
  const alpha = $('#alpha').value

  $(
    '#color-display-rgba'
  ).style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

// $('#red').oninput = onChangeRangesRGBA
// $('#green').oninput = onChangeRangesRGBA
// $('#blue').oninput = onChangeRangesRGBA
// $('#alpha').oninput = onChangeRangesRGBA

/**
 * for(let l of lista)
 */

$all('#color-ranges-rgba input[type=range]').forEach(
  (range) => (range.oninput = onChangeRangesRGBA)
)

//selecionando os controles deslizantes
const hueSlider = $('#hue');
const saturationSlider = $('#saturation');
const lightnessSlider = $('#lightness');
const colorDisplayHSL = $('#color-display-hsl');

//criando a função para aplicar os valores dos controles na box
const onChangeRangesHSL = () => {
    const hue = hueSlider.value
    const saturation = saturationSlider.value
    const lightness = lightnessSlider.value
    colorDisplayHSL.style.backgroundColor = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
}

//criando um ouvinte de eventos para chamara função
$all('#color-ranges-hsl input[type=range]').forEach(
  (range) => (range.oninput = onChangeRangesHSL)
)

//chama a função para definir a cor inicial da box
onChangeRangesHSL();