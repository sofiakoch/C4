$.getJSON(
  // //  Hämtar objektet med kurserna (en array)
  "http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses",
  function(data) {
    console.log(data);
    $.each(data, function(i, kurs) {
      // För varje kurs i arrayen så skapar jag en tabellrad(tr) och gör kolumner(th) för kursens innehåll
      $("<tr>")
        .append(
          $("<td>").text(kurs.courseId),
          $("<td>").text(kurs.courseName),
          $("<td>").text(kurs.credit),
          $("<td>").text(kurs.school),
          $("<td>").text(kurs.startWeek),
          $("<td>").text(kurs.endWeek)
        )
        .appendTo("#kurser");
    });
  }
);
