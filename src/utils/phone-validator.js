export function phoneValidator(tel) {
  tel.addEventListener("input", () => {
    // limpa e qualquer valor que nao seja numero e define o tamanho de 11 numeros
    let s = tel.value.replace(/\D/g, "").substring(0, 11);
    // const s = telClear;
    // const telArray = telClear.split("");
    if (s.length === 0) {
      tel.value = "";
      return;
    }
    if (s.length <= 2) {
      tel.value = s;
      return;
    }

    if (s.length > 2 && s.length <= 7) {
      tel.value = `(${s.substring(0, 2)}) ${s.substring(2)}`;
      return;
    }

    tel.value = `(${s.substring(0, 2)}) ${s.substring(2, 7)}-${s.substring(7,11)}`;

  
  });
}
