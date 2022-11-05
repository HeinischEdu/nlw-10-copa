function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/flags/icon=${player1}.svg" alt="${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/flags/icon=${player2}.svg" alt="${player2}" />
  </li>
  `
}

let delay = -.4;
function createCard(date, day, games) {
  delay += .4;
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
        createGame("Brazil", "07:00", "Serbia") +
        createGame("Portugal", "18:00", "uruguay")+
        createGame("Brazil", "18:00", "Uruguay")
    )+
    createCard(
      "28/11",
      "segunda",
      createGame("switzerland", "13:00", "Brazil")
    )+
    createCard(
      "02/12",
      "sexta",
      createGame("Brazil", "07:00", "Cameroon")
    )
