var titles = [
  "@",
  "@D",
  "@DA",
  "@DARK",
  "@DARKN",
  "@DARKNE",
  "@DARKNES",
  "@DARKNES",
  "@DARKNESS",
  "@DARKNESSG",
  "@DARKNESSGO",
  "@DARKNESSGOD"
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
