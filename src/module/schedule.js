const dateInput = document.getElementById("date")
import dayjs from "dayjs"
import { sheduleHour } from "../utils/hour.js"

dateInput.value = dayjs().format("YYYY-MM-DD")

export function schedulesday(){
  const opening = sheduleHour.map((hour) => {
    console.log(hour)
  })
}