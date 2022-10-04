const controle = document.querySelectorAll('[data-controle]')

controle.forEach(elemento => {
  elemento.addEventListener('click', event => {
    manipulaDados(event.target.parentNode, event.target.dataset.controle)
  })
})

function manipulaDados(controle, operacao) {
  const peca = controle.querySelector('[data-contador]')
  if (operacao === '-') {
    peca.value--
  } else {
    peca.value++
  }
}
