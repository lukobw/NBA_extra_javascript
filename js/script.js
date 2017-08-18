// dane gracza

console.log(headers);

// przyklad na wyciagniecie imion graczy

function getPlayerName(player) {
    return player.PLAYER;
}
console.log(data.map(getPlayerName));

// ZADANIA

// zadanie 1
// posortuj zawodnikow wg ilosci zbiorek ("REB"). Marcin Gortat powinien byc na 12 miejscu (index 11)!4

data.sort(function (player1, player2) {
    return player2.REB - player1.REB;
});

data.map(getPlayerName);

// pokaz tylko tych graczy ktorzy rozegrali wszystkie mecze w sezonie ("GP"). Wszystkich meczy bylo 82.

function allSeasonPlayers(player) {
    return player.GP === 82;
}

console.log(data.filter(allSeasonPlayers).map(getPlayerName));

// zadanie 3
// wyciagnij tylko najwazniejsze dane o kazdym koszykarzu. Wyjsciowa tablica powinna zwierac obiekty z imieniem i nazwiskiem gracza (jako "name") i jego druzyne (jako "team):
/*
  {
    "name": "Andrew Wiggins",
    "team": "MIN"
  },
  {
    "name": "Karl-Anthony Towns",
    "team": "MIN"
  },
...
]
*/

data.map(function (player) {
    return player.PLAYER + ' ' + player.TEAM;
});


// zadanie 4
// Posortuj graczy wg sumarycznej liczby minut ktore grali w calym sezonie.
// Uzyj do tego liczby meczy ktore grali ("GP") i sredniej ilosci minut w kazdym meczu ("MIN")
// pokaz ich imiona i nazwiska i sumaryczna ilosci minut: ["Andrew Wiggins, 3050.4", "Karl-Anthony Towns, 3034"...]

function gameSum(player) {
    return player.GP * player.MIN;
}

data.sort(function (player1, player2) {
    return (player2.GP * player2.MIN) - (player1.GP * player1.MIN);
});

data.map(gameSum);

// zadanie 5
// Pokaz imiona i nazwiska wszystkich koszykarzy z druzyn ("TEAM") ktore zaczynaja sie na "C". 



// zadanie 6
// pokaz wszystkich graczy z druzyny ("TEAM") Chicago BUlls (skrot "CHI"). Posortuj ich po ilosci asyst ("AST") ktore zdobyli.

function bullsPlayers(player) {
    return player.TEAM === "CHI";
}

data.sort(function (player1, player2) {
    return player2.AST - player1.AST;
});

data.filter(bullsPlayers).map(getPlayerName);