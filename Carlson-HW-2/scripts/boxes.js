
(function(boxes) {
    'use scrict';

    // boxes controller
    boxes.control = {
        generateBoxes: generateBoxes,
        removeBox: removeBox
    };

    // populates #box_section with 30 colored boxes
    function generateBoxes() {
        var boxString = '';

        // main loop for adding boxes
        for (let i = 0; i < 30; i++) {
            
            if (i % 5 == 0) {
                boxString += '<div class="color_box" style="background-color: #DB2E2B;" onclick="boxes.control.removeBox(this)"></div>';    
            } else if (i % 5 == 1) {
                boxString += '<div class="color_box" style="background-color: #C4C135;" onclick="boxes.control.removeBox(this)"></div>';    
            } else if (i % 5 == 2) {
                boxString += '<div class="color_box" style="background-color: #7DBA21;" onclick="boxes.control.removeBox(this)"></div>';    
            } else if (i % 5 == 3) {
                boxString += '<div class="color_box" style="background-color: #079949;" onclick="boxes.control.removeBox(this)"></div>';    
            } else if (i % 5 == 4) {
                boxString += '<div class="color_box" style="background-color: #06447F;" onclick="boxes.control.removeBox(this)"></div>';    
            }
        }

        // adds boxes to #box_section
        $('#box_section').html(boxString);
        
        // set box width and height
        $('#box_section > .color_box').width(100);
        $('#box_section > .color_box').height(100);

        // add white boarders to boxes
        $('#box_section > .color_box').css('border-color', '#FFFFFF');
        $('#box_section > .color_box').css('border-style', 'solid');
        $('#box_section > .color_box').css('border-width', '2px');
    }

    // callback function to remove box by reference
    function removeBox(boxRef) {
        $(boxRef).fadeOut(200, function() {
            $(boxRef).remove();
        });
    }

})(boxes || (boxes = {}));