function login() {
  var username = document.getElementById("login-form").username.value;
  var password = document.getElementById("login-form").password.value;

  $.getJSON(
    //Hämtar objektet med stundents(en array)
    "http://webbred2.utb.hb.se/~fewe/api/api.php?data=students",
    function(data) {
      var student = data.find(function(student) {
        //
        return student.login.username === username;
      });

      if (student && student.login.password === password) {
        location.href = "kursinfo.html";
      } else {
        alert("Felaktig inloggning"); // skicka meddelande vid felaktigt lösenord
      }
    }
  );

  return false;
}
