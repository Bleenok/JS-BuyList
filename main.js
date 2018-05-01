$(document).ready(function(){
    var $list = $(".column-left");
    var SEGMENT = $(".item-form").html();
    var $list_not_bought = $(".stats-segment");
    var $list_bought = $(".bought-row");
    var LABEL = $(".stats-row").html();
    var $input = $(".input-item");

    function addItem(title){
        var  bought = false;
        $(".input-item").val( title );
        if ($(".input-item").val().replace(/\s/g, '').length > 0){
            var $node = $(SEGMENT);
            var $lab_node = $(LABEL);
            var num = 1;

            $node.find(".name").text(title);
            $lab_node.find(".stats-label").text(title);


            var  $label_count = $node.find(".count-label");
            var $circle_count = $lab_node.find(".circle");


            $label_count.text(num);
            $circle_count.text(num);
            $("#input-item").value = null;

            $node.find(".plus-button").click(function(){
                num += 1;
                $node.find(".count-label").text(num);
                $lab_node.find(".circle").text(num);
                if(num>1) {
                   $node.find(".minus-button").css('background-color', 'red');
                }


            });

            $node.find(".minus-button").click(function(){
                if(num > 1){
                    num -= 1;
                    $node.find(".count-label").text(num);
                    $lab_node.find(".circle").text(num);
                }
                if(num<2) {
                   $node.find(".minus-button").css('background-color', 'lightcoral');
                }
            });

            $node.find(".delete-button").click(function(){
                $node.hide("slow");
                $lab_node.hide();
            });

            $node.find(".buy-button").click(function(){
                if (!bought) {
                    $node.find('.minus-button').hide("slow");
                    $node.find('.plus-button').hide("slow");
                    $node.find('.buy-button').text('Не куплено');
                    $node.find('.delete-button').hide("slow");
                    $node.find('.name').css('text-decoration', 'line-through');
                    $node.find('.buy-button').attr('data-tooltip', 'Або ні');
                    $list_bought.append($lab_node);
                    bought = true;
                } else {
                    $node.find('.minus-button').show("slow");
                    $node.find('.plus-button').show("slow");
                    $node.find('.buy-button').text('Купити');
                    $node.find('.delete-button').show("slow");
                    $node.find('.name').css('text-decoration', 'none');
                    $node.find('.buy-button').attr('data-tooltip', 'Купити');
                    $list_not_bought.append($lab_node);
                    bought = false;
                }
            });

            $node.find(".name").click(function () {
                $node.find(".name").hide();
                $node.find(".edit").show();
                $node.find(".edit").val(title);
            });

            $node.find(".edit").focusout(function () {
                $node.find(".name").show();
                $node.find(".edit").hide();

                title = $node.find(".edit").val();
                $node.find(".name").text(title);
                $lab_node.find(".stats-label").text(title);
            });

            $('.input-item').focus();
            $(".input-item").val(null);
            $list_not_bought.append($lab_node);
            $list.append($node);
        }
    }

    $(".append").click(function(){
        var item_name = $input.val();
        addItem(item_name);


    });
    $('html').keydown(function(eventObject){
        if (eventObject.keyCode == 13) {
            var item_name = $input.val();
            addItem(item_name);
        }
    });


    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");
});