export function hourSelect(selectId, callback = null) {
  if (!selectId) {
    console.warn(`Elemento ${selectId} nao encontrada`);
    return;
  }

  selectId.innerHTML = "";

  const sheduleHour = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  sheduleHour.forEach((h) => {
    const option = document.createElement("option");
    option.value = h;
    option.textContent = h;
    selectId.appendChild(option);
  });
}
