
$("#more-king-grass").bind("click", function(){
    // hide more...
    $(this).hide();
    //show text
    $("#less-king-grass").show(200);
});


$("#more-viaspace").bind("click", function(){
    // hide more...
    $(this).hide();
    //show text
    $("#less-viaspace").show(200);
});

$("#more-labs").bind("click", function(){
    // hide more...
    $(this).hide();
    //show text
    $("#less-labs").show(200);
});



$("#show-less-king-grass").bind("click", function(){
    // hide more...
    $("#less-king-grass").hide(200);
    //show text
    $("#more-king-grass").show(200);
});

$("#show-less-viaspace").bind("click", function(){
    // hide more...
    $("#less-viaspace").hide(200);
    //show text
    $("#more-viaspace").show(200);
});

$("#show-less-labs").bind("click", function(){
    // hide more...
    $("#less-labs").hide(200);
    //show text
    $("#more-labs").show(200);
});

