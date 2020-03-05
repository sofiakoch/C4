var fragor; // Här sparar vi frågorna vi hämtar så att vi kan använda det för att räkna resultat.

$.getJSON(
  "http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz&limit=10",
  function(data) {
    //  Här hämtat jag de 10 frågorna
    fragor = data;
    $.each(data, function(i, fraga) {
      // För varje, skriv ut frågan
      $("<div>")
        .attr({
          id: "fraga" + i
        })
        .append($("<div>").text(fraga.question))
        .appendTo("#fragor");

      // Här lägger jag  till det rätta svaret
      $("<label>")
        .append(
          $("<input>").attr({
            type: "radio",
            name: i,
            value: fraga.correct_answer
          }),
          fraga.correct_answer
        )
        .appendTo("#fraga" + i);

      // Här lägger jag till de felaktiga svaren
      $.each(fraga.incorrect_answers, function(j, svar) {
        $("<label>")
          .append(
            $("<input>").attr({
              type: "radio",
              name: i,
              value: svar
            }),
            svar
          )
          .appendTo("#fraga" + i);
      });
    });
  }
);

function kollaResultat() {
  // Här hämtade jag ibockade knappar och svar för att se om det är rätt svar
  var antalRatt = 0;

  $("#fragor input[type=radio]:checked").each((i, input) => {
    if (input.value == fragor[input.name].correct_answer) {
      $("<div>")
        .text(
          fragor[input.name].question +
            " - " +
            fragor[input.name].correct_answer
        )
        .appendTo("#rattaSvar");
    }
  });

  document.getElementById("resultat").innerHTML =
    antalRatt + "/" + fragor.length;
}
