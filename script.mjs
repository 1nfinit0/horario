document.addEventListener("DOMContentLoaded", () => {
  const schedule = [
      { time: "08:00 - 09:30", activities: ["RM (2°Sec - P)", "Álg (2°Sec - P)", "Fís (6°P - P)", "Álg (6°P - P)", "Fís (4°Sec - N)", ""] },
      { time: "09:30 - 09:45", isBreak: true },
      { time: "09:45 - 11:15", activities: ["RM (1°Sec - P)", "Fís (2°Sec - P)", "Hist (2°Sec - P)", "Fís (3°Sec - P)", "Fís (1°Sec - N)", ""] },
      { time: "11:15 - 11:30", isBreak: true },
      { time: "11:30 - 13:00", activities: ["Álg (1°Sec - P)", "Quím (1°Sec - P)", "Hist (3°Sec - P)", "Cív (2°Sec - P)", "Fís (2°Sec - N)", ""] },
      { time: "13:00 - 14:30", activities: ["RM (3°Sec - P)", "Álg (3°Sec - P)", "Hist (1°Sec - P)", "Fís (1°Sec - P)", "Fís (3°Sec - N)", ""] },
      { time: "15:30 - 17:00", activities: ["Ensayo (P)", "", "", "", "Ensayo (N)", ""] },
      { time: "18:30 - 20:00", activities: ["EstInf (0303-B)", "Lab MecClás", "Cál 1", "MecClás", "EstInf (0303-B)", "Diseño P&S (0703-D)"] },
      { time: "20:15 - 22:30", activities: ["", "MecClás", "", "", "", ""] },
      { time: "24/7", activities: ["Herr Inf (V)", "Herr Inf (V)", "Herr Inf (V)", "Herr Inf (V)", "Herr Inf (V)", "Herr Inf (V)"] }
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
