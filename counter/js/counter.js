let nbr = 0;

$(() => {
    $("div, #inp").css("text-align", "center");

    $("#plus").on("click", () => {
        nbr++;
        display();
    });
    $("#minus").on("click", () => {
        nbr--;
        display();
    });

});
    const display = () => {
    $("#inp").val(nbr);
    }

