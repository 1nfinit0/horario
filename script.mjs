document.addEventListener("DOMContentLoaded", () => {
  const schedule = [
      { time: "08:00 - 09:30", activities: ["Razonamiento Matemático (2do Sec - Padua)", "Álgebra (2do Sec - Padua)", "Física (6to Prim - Padua)", "Álgebra (6to Prim - Padua)", "Física (4to Sec - Noveno)", ""] },
      { time: "09:30 - 09:45", isBreak: true },
      { time: "09:45 - 11:15", activities: ["Razonamiento Matemático (1ro Sec - Padua)", "Física (2do Sec - Padua)", "Historia del Perú (2do Sec - Padua)", "Física (3ro Sec - Padua)", "Física (1ro Sec - Noveno)", ""] },
      { time: "11:15 - 11:30", isBreak: true },
      { time: "11:30 - 13:00", activities: ["Álgebra (1ro Sec - Padua)", "Química (1ro Sec - Padua)", "Historia del Perú (3ro Sec - Padua)", "Cívica (2do Sec - Padua)", "Física (2do Sec - Noveno)", ""] },
      { time: "13:00 - 14:30", activities: ["Razonamiento Matemático (3ro Sec - Padua)", "Álgebra (3ro Sec - Padua)", "Historia del Perú (1ro Sec - Padua)", "Física (1ro Sec - Padua)", "Física (3ro Sec - Noveno)", ""] },
      { time: "15:30 - 17:00", activities: ["Ensayo Banda (Padua)", "", "", "", "Ensayo Banda (Noveno)", ""] },
      { time: "18:30 - 20:00", activities: ["Estadística Inferencial (0303-B)", "Lab. Mecánica Clásica", "Cálculo 1", "Mecánica Clásica", "Estadística Inferencial (0303-B)", "Diseño de Productos y Servicios (0703-D)"] },
      { time: "20:15 - 22:30", activities: ["", "Mecánica Clásica", "", "", "", ""] },
      { time: "24/7", activities: ["Herramientas Informáticas (Virtual)", "Herramientas Informáticas (Virtual)", "Herramientas Informáticas (Virtual)", "Herramientas Informáticas (Virtual)", "Herramientas Informáticas (Virtual)", "Herramientas Informáticas (Virtual)"] }
  ];

  const tbody = document.querySelector("#schedule tbody");

  schedule.forEach(entry => {
      const row = document.createElement("tr");
      const timeCell = document.createElement("td");
      timeCell.textContent = entry.time;
      row.appendChild(timeCell);

      if (entry.isBreak) {
          const breakCell = document.createElement("td");
          breakCell.setAttribute("colspan", "6");
          breakCell.classList.add("break");
          breakCell.textContent = "Receso";
          row.appendChild(breakCell);
      } else {
          entry.activities.forEach(activity => {
              const cell = document.createElement("td");
              cell.textContent = activity;
              row.appendChild(cell);
          });
      }

      tbody.appendChild(row);
  });
});
