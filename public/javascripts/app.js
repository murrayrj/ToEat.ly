$(function () {
  $.get("/foods").
    done(function (data) {
      console.log("RECEIVING RESPONSE");
      console.log("DATA", data);
      $(data).each(function (index, food) {
        var $food = $("<div>" + food.name + "<button id='delete'>Delete</button>" + "</div>").addClass("foodsList");
        $("div.foodsCon").append($food);
      });
    });
  $("#newFood").on("submit", function () {
    var $this = $(this);
    var formData = $this.serialize();
    console.log(formData);
    $.post("/foods", formData).
        done(function (data) {
        console.log(data);
        var $food = $("<div>" + food.name + "<button id='delete' data-id=" + food.id + ">Delete</button>" + "</div>").addClass("foodsList");
        $("div.foodsCon").append($food);
      });
  });
  $('.foodsCon').on("click", "#delete", function () {
    console.log($(this));
  });
});
