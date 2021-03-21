
$(".nav-link").click(function () {
  var div_id = $(this).attr("id"); // gives you the ID of the clicked div
  if (div_id === "id1") {
    $("html, body").animate(
      {
        scrollTop: $(".about-block").offset().top, // класс объекта к которому приезжаем
      },
      1000
    );
  } else if (div_id === "id2") {
    $("html, body").animate(
      {
        scrollTop: $(".our-articles-block").offset().top, // класс объекта к которому приезжаем
      },
      1000
    );
  } else if (div_id === "id3") {
    $("html, body").animate(
      {
        scrollTop: $(".partners-block").offset().top, // класс объекта к которому приезжаем
      },
      1000
    );
  } else if (div_id === "id4") {
    $("html, body").animate(
      {
        scrollTop: $(".mail-block").offset().top, // класс объекта к которому приезжаем
      },
      1000
    );
  }
});
