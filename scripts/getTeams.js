$(document).ready(function () {
  const headers = {
    "X-RapidAPI-Key": "5e0d3e00famsh51526fb1bbc7f6ep199349jsne109ebc0df2a",
    "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  };

  const existData = localStorage.getItem("teams");

  if (!existData) {
    $.ajax({
      url: "https://api-football-beta.p.rapidapi.com/teams?country=Spain",
      type: "GET",
      headers: headers,
      success: function (data) {
        localStorage.setItem("teams", JSON.stringify(data.response));
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

  const teams = JSON.parse(localStorage.getItem("teams"));

  teams.forEach((team) => {
    if (team.team.national) {
      return;
    }

    addTeam(team);
  });
});

function addTeam(team) {
  console.log(team.team.logo, team.team.name);
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
