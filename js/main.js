$(document).ready(function () {
    $.getJSON("https://jsonplaceholder.typicode.com/users",
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].username+ "</td>");
            tr.append("<td>" + json[i].name + "</td>");
            tr.append("<td> <a href='#'>" + json[i].email + "</a></td>"); 
            tr.append("<td> <a href='#'>" + json[i].address['city'] + "</a></td>"); 
            $('table').append(tr);
        }
    });
});
 