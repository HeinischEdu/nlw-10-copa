function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/flags/icon=${player1}.svg" alt="${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/flags/icon=${player2}.svg" alt="${player2}" />
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay += 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "07:00", "serbia") +
      createGame("portugal", "18:00", "uruguay") +
      createGame("brazil", "18:00", "uruguay")
  ) +
  createCard("28/11", "segunda", createGame("switzerland", "13:00", "brazil")) +
  createCard("02/12", "sexta", createGame("brazil", "07:00", "cameroon"))
