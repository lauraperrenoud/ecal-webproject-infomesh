/*NEW ONE*/
$(document).ready(function(){

  $("#container-timeline").scroll(function(event) {

      let scroll = $("#container-timeline").scrollLeft();
      let maxScroll = $("#timeline-scrollable").width();
      let normalized = map_range(scroll, 0,maxScroll, 0,1);

      //seulement ppour l'instant
      let contwidth = $("#container-timeline").width();

      let rightscroll = Math.round(maxScroll-contwidth);

      let startdate = moment("01/01/1989", "D/M/YYYY");
      var enddatetest = moment("01/01/2019", "D/M/YYYY");
      var diffSeconds = enddatetest.diff(startdate, "seconds");
      let secondsToFind = map_range(normalized, 0, 1, 0, diffSeconds);
      let searchdate = moment("01/01/1989", "D/M/YYYY");
      searchdate = moment(searchdate).add(secondsToFind, "seconds");

      var event = new CustomEvent("timeline-scroll", {
        detail: {
          normal: normalized,
          date: searchdate
        }
      });
      document.dispatchEvent(event);

  });


  function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  }

});
