export function phoneValidator(tel) {
  tel.addEventListener("input", () => {
    // limpa e qualquer valor que nao seja numero e define o tamanho de 11 numeros
    const telClear = tel.value.replace(/\D/g, "").substring(0, 11);

    const telArray = telClear.split("");
    let telFormat = "";

    if (telArray.length > 0) {
      telFormat = `(${telArray.slice(0, 2).join("")})`;
    }
    if (telArray.length >= 3) {
      telFormat += `${telArray.slice(2, 7).join("")}`;
    }
    if (telArray.length >= 8) {
      telFormat += `-${telArray.slice(7, 11).join("")}`;
    }

    if (tel.value !== telFormat) {
      tel.value = telFormat;
    }
  });
}
