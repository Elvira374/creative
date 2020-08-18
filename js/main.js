$(function() {
  $.scrollify({
		section:".panel",
    scrollbars:false,
    before: function(i,panels) {
      var ref = panels[i].attr("data-section-name");

      $(".pagination a.active").removeClass("active");

      $(".pagination a[href=#" + ref + "]").addClass("active");

      /*
      if(ref==="features") {
        $(".features .box0,.features .box1,.features .box2").addClass("moved");

      }*/

      panels[i].find(".box0,.box1,.box2").addClass("moved");


      if(ref==="section-about") {
        $(".section-services").find(".box0,.box1,.box2").removeClass("moved");
        $(".section-footer .box0").css("top",0);
      }
      if(ref==="section-services") {
        $(".section-footer .content").removeClass("moved");
        initialPosition();
      }
      if(ref==="section-footer") {
        $(".section-footer .content").addClass("moved");

        $(".section-footer .box0").css("top",0);
      }
    },
    after:function(i,panels) {
      var ref = panels[i].attr("data-section-name");

      if(ref==="section-main") {
        $(".section-about").find(".box0,.box1,.box2").removeClass("moved");
      }
      for(var j = 0;j < panels.length;j++) {
        if(j>i) {

          //panels[j].find(".moved").removeClass("moved");
        }
      }
    },
    afterResize:initialPosition,
    afterRender:initialPosition
	});

  $(".pagination a").on("click",function() {
    $.scrollify.move($(this).attr("href"));
  });

  function initialPosition() {

    var current = $.scrollify.current();

    if(current.hasClass("section-footer")===false) {
      var height = parseInt($(".section-footer").height());
      var f = parseInt($(".section-services .box1").height()) - 50;

      var top = 0 - (height*0.4) - (height-f);
      $(".section-footer .box0").css("top",top);
    } else {
      $(".section-services").find(".box0,.box1,.box2").addClass("moved");
    }

  }
});
