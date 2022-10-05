const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2
  }
}

controle.forEach(elemento => {
  elemento.addEventListener('click', event => {
    atualizaEstatisticas(
      event.target.dataset.peca,
      event.target.dataset.controle,
      event.target.parentNode
    )
    manipulaDados(event.target.parentNode, event.target.dataset.controle)
  })
})

function manipulaDados(controle, operacao) {
  const peca = controle.querySelector('[data-contador]')
  if (operacao === '-' && !(parseInt(peca.value) <= 0)) {
    peca.value--
  } else if (operacao === '+' && parseInt(peca.value) >= 0) {
    peca.value++
  }
}

function atualizaEstatisticas(peca, controle, componente) {
  const instrumento = componente.querySelector('[data-contador]')
  console.log(instrumento.value)
  estatisticas.forEach(elemento => {
    if (controle === '+' && parseInt(instrumento.value) >= 0) {
      elemento.textContent =
        parseInt(elemento.textContent) +
        pecas[peca][elemento.dataset.estatistica]
    } else if (controle === '-' && !(parseInt(instrumento.value) <= 0)) {
      elemento.textContent =
        parseInt(elemento.textContent) -
        pecas[peca][elemento.dataset.estatistica]
    }
  })
}
