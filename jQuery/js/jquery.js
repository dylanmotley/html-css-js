let topics = [
    { name: "Git/GitHub", rating: 4},
    { name: "SQL", rating: 5},
    { name: "Java/C#", rating: 3},
];

$(() => {
    console.log("The HTML is loaded");
    display();
    $("button#toggle").on("click", () => {
        toggle();
    });
    $("#hide").on("click", () => {
        $("table").toggle();
    });
    toggle();
});

let red = true;
const toggle = () => {
    if(red) {
        $("th").css("color", "red").css("fontSize", "1em").css("fontStyle", "italic");
    } else {
        $("th").css("color", "green").css("fontSize", "2em").css("fontStyle", "normal");
    }
    red = !red;
}

const display = () => {
    let tbody = $("#tbody");
    for(let topic of topics) {
        let tr = $("<tr></tr>");
        let tdName = $(`<td>${topic.name}</td>`);
        tr.append(tdName);
        let tdRating = $(`<td>${topic.rating}</td>`);
        tr.append(tdRating);
        tbody.append(tr);
    }
}