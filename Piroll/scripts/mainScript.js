
$(".nav-link").click(function () {
  var div_id = $(this).attr("id"); // gives you the ID of the clicked div
  if (div_id === "id1") {
    $("html, body").animate(
      {
        scrollTop: $(".main-title").offset().top, // класс объекта к которому приезжаем
      },
      1000
    );
  } else if (div_id === "id2") {
    $("html, body").animate(
      {
        scrollTop: $(".about-us-block").offset().top, // класс объекта к которому приезжаем
      },
      1000
    );
  } else if (div_id === "id3") {
    $("html, body").animate(
      {
        scrollTop: $(".numbers-block").offset().top, // класс объекта к которому приезжаем
      },
      1000
    );
  } else if (div_id === "id4") {
    $("html, body").animate(
      {
        scrollTop: $(".work-proc-block").offset().top, // класс объекта к которому приезжаем
      },
      1000
    );
  } else if (div_id === "id5") {
    $("html, body").animate(
      {
        scrollTop: $(".clients-block").offset().top, // класс объекта к которому приезжаем
      },
      1000
    );
  } else if (div_id === "id6") {
    $("html, body").animate(
      {
        scrollTop: $(".mail-block").offset().top, // класс объекта к которому приезжаем
      },
      1000
    );
  }
});
