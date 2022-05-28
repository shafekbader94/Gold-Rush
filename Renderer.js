class Renderer {
  constructor(matrix) {
    this.matrix = matrix;
  }

  renderBoard(matrix) {
    $(".goldRush-container").empty();
    const goldRush = $("#goldRush-template").html();
    const goldRushTemplate = Handlebars.compile(goldRush);
    let goldRushNewHTML = goldRushTemplate(matrix);
    $(".goldRush-container").append(goldRushNewHTML);
  }

  renderScores(matrixes) {
    $(".goldRushScores-container").empty();
    const goldRushScores = $("#goldRushScores-template").html();
    const goldRushTemplateScores = Handlebars.compile(goldRushScores);
    let goldRushNewHTMLScores = goldRushTemplateScores(matrixes);
    $(".goldRushScores-container").append(goldRushNewHTMLScores);
  }
}
