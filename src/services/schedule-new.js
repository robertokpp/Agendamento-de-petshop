import { apiConfig } from "./api-config";

export async function scheduleNew(id, name, petName, fone, desc, date, hour) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({ id, name, petName, fone, desc, date, hour }),
    });

    alert("agendamento realizado com sucesso");
  } catch (error) {
    alert("Não foi possivel realizar o agendamento");
  }
}
