const dateInput = document.getElementById("date")
import dayjs from "dayjs"

dateInput.value = dayjs().format("YYYY-MM-DD")
