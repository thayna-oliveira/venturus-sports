$(document).ready(function () {

    searchFilter($("#search-bar"), $(".users"));

    $.getJSON("https://jsonplaceholder.typicode.com/users",
        function (json) {
            var tr;
            for (var i = 0; i < json.length; i++) {
                tr = $('<tr/>');
                tr.append("<td class='filter'>" + json[i].username + "</td>");
                tr.append("<td class='filter'>" + json[i].name + "</td>");
                tr.append("<td> <a href='#'>" + json[i].email + "</a></td>");
                tr.append("<td> <a href='#'>" + json[i].address['city'] + "</a></td>");
                tr.append("<td>" + getRideInGroup() + "</td>");
                tr.append("<td>" + getDaysOfWeek() + "</td>");
                tr.append("<td>" +6 + "</td>");
                tr.append("<td>" + 3 + "</td>");
                tr.append("<td>" + 3 + "</td>"); 
                $('table').append(tr);
            }
        });

    function getRideInGroup() {
        var ride = new Array("Always", "Sometimes", "Never"),
            random = ride[Math.floor(Math.random() * ride.length)];
        return random;
    }

    function getDaysOfWeek() {
        var frequency = new Array("Every day", "Week days", "Mon, Wed, Fri", "Mon, Tue, Wed", "Weekends", "Fri, Sun"),
            random = frequency[Math.floor(Math.random() * frequency.length)];
        return random;
    }

    jQuery.expr[':'].Contains = function (a, i, m) {
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    function searchFilter(search, table) {

        var form = $("<form>").attr({
                "class": "filterform",
                "action": "#"
            }),
            input = $("<input>").attr({
                "class": "search-bar",
                "placeholder": "Filter table content",
                "type": "text"
            });

        $(form).append(input).appendTo(search);

        $(input)
            .change(function () {

                var filter = $(this).val();

                if (filter) {
                    $(table).find(".filter:not(:Contains(" + filter + "))").parent().slideUp();
                    $(table).find(".filter:Contains(" + filter + ")").parent().slideDown();
                } else if (filter == null){
                    $(table).parent().slideUp();
                } else {
                    $(table).find(".users").slideDown();
                }
                return false;
            })
            .keyup(function () {
                $(this).change();
            });
    }


});