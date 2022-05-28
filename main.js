Handlebars.registerHelper("ifNoName", function (value) {
  return value === "";
});

Handlebars.registerHelper("ifCoin", function (value) {
  return value === "c";
});

Handlebars.registerHelper("ifPlayer1", function (value) {
  return value === 1;
});

Handlebars.registerHelper("ifPlayer2", function (value) {
  return value === 2;
});

let x = 5,
  y = 5;
const renderer = new Renderer();
const board = new GoldRush(x, y);
$(".dropdown").on("click", "a", function () {
  const aSelect = $(this).text();
  x = aSelect[0];
  y = aSelect[0];
});

$(".start").on("click", function () {
  const board = new GoldRush(x, y);
  const renderer = new Renderer();
  const player1 = $("#players1").val();
  const player2 = $("#players2").val();
  board.getNames(player1, player2);

  renderer.renderBoard(board);
  renderer.renderScores(board);

  $(document).keypress(function (e) {
    if (e.which == 119) {
      board.movePlayer(2, "up");
      renderer.renderBoard(board);
    } else if (e.which == 115) {
      board.movePlayer(2, "down");
      renderer.renderBoard(board);
    } else if (e.which === 97) {
      board.movePlayer(2, "left");
      renderer.renderBoard(board);
    } else if (e.which === 100) {
      board.movePlayer(2, "right");
      renderer.renderBoard(board);
    }
    renderer.renderScores(board);
  });

  $(document).keydown(function (e) {
    if (e.which == 38) {
      board.movePlayer(1, "up");
      renderer.renderBoard(board);
    } else if (e.which == 40) {
      board.movePlayer(1, "down");
      renderer.renderBoard(board);
    } else if (e.which == 37) {
      board.movePlayer(1, "left");
      renderer.renderBoard(board);
    } else if (e.which == 39) {
      board.movePlayer(1, "right");
      renderer.renderBoard(board);
    }
    renderer.renderScores(board);
  });
});
