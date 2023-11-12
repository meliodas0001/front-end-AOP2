$(document).ready(function () {
  $.getJSON("../../data/teams.json", function (data) {
    for (let i = 0; i < data.length; i++) {
      const team = data[i];

      if (team.team.national) continue;
      if (team.team.logo === null) continue;
      if (team.team.name === "Real Madrid") continue;

      addTeam(team);
    }
  });

  function addTeam(team) {
    const newAnchor = $("<a>", {
      href: "./descricaoTime/descricaoTime.html?time=" + team.team.name,
    });

    loadImage(team.team.logo, team.team.name).then((img) => {
      newAnchor.append(img);
      $(".teamListGrid").append(newAnchor);
    });
  }

  function loadImage(src, alt) {
    return new Promise(function (resolve, reject) {
      const img = new Image();

      img.onload = function () {
        resolve(img);
      };

      img.onerror = function () {
        reject("erro ao carregar iamgem");
      };

      img.src = src;
      img.alt = `imagem do time ${alt}`;
    });
  }
});
