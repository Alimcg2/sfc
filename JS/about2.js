
(function() {
    window.onload = function(){

        var ajax = new XMLHttpRequest();
        ajax.open("Get", "https://coop-67b9f.firebaseio.com/.json?auth=GHRtS7qTMMwBkh76LZhuSzDh0B4GRafqTZxqViuX");
        ajax.onload = handleData;
        ajax.send();

        function handleData(){
            var data = JSON.parse(this.responseText);
            var divs = $(".grid-item");
            divs.splice(1, 1);
            divs.splice(4, 1);
            divs.splice(8, 1);
            divs.splice(13, 1);
            divs.splice(16, 1);
            var imgLocations = data["About"];
            console.log(imgLocations);
            for (var i = 0; i < divs.length; i ++) {
                console.log(imgLocations[i]);
                divs[i].childNodes[1].src = imgLocations[i][0]["ImageURL"];
            }
        }
        
        // initialize Packery
        var $grid = $('.grid').packery({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            gutter: 10,
            // columnWidth helps with drop positioning
            columnWidth: 0
        });

    };

    
})();
