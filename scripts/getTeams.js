$(document).ready(function () {
  $.getJSON("../../data/teams.json", function (data) {
    data.forEach((team) => {
      if (team.team.national) return;
      addTeam(team);
    });
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
