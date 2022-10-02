const subtrair = document.getElementById('subtrair')
const somar = document.getElementById('somar')
const braco = document.getElementById('braco')

const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach(elemento => {
  elemento.addEventListener('click', event => {
    manipulaDados(braco, event.target.textContent)
  })
})

function manipulaDados(peça, operacao) {
  if (operacao === '-') {
    peça.value--
  } else {
    peça.value++
  }
}
