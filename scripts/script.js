function SubForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/x4VD1JNTtOwRUPgL/",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      console.log("Step 1");
      document.getElementById("Message-Sent").style.display = "block";
      console.log("step 2");
      setTimeout(() => {
        document.getElementById("Message-Sent").style.display = "none";
      }, 7000);
      console.log("Step 3");
    },
    error: function () {
      console.log("ooops");
      alert("There was an error :(");
    },
  });
}
