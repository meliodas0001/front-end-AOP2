$(document).ready(function () {
  $.getJSON("../../data/teams.json", function (data) {
    for (let i = 0; i < 100; i++) {
      const team = data[i];

      if (team.team.national) continue;
      if (team.team.logo === null) continue;
      if (team.team.name === "Real Madrid") continue;

      setTimeout(() => {
        addTeam(team);
      }, 1000);
    }
  });

  function addTeam(team) {
    const newAnchor = $("<a>", {
      href: "./descricaoTime/descricaoTime.html?time=" + team.team.name,
    });

    const newImage = $("<img>", {
      src: `${team.team.logo}`,
      alt: `imagem do time ${team.team.name}`,
    });

    newAnchor.append(newImage);

    $(".teamListGrid").append(newAnchor);
  }
});
