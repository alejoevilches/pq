export function validateLetters(e){
  e.target.value = e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "")
}

export function validateNumbers(e){
  e.target.value = e.target.value.replace(/[^0-9]/g, "")
}