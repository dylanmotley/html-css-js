

$(() => {

    $("#save").on("click", () => {
        add();
    });
    
});

const add = () => {
    let newUser = {
        id: 0,
        username: $("#xUsername").val(),
        password: $("#xPassword").val(),
        firstname: $("#xFirstname").val(),
        lastname: $("#xLastname").val(),
        phone: $("#xPhone").val(),
        email: $("#xEmail").val(),
        reviewer: $("#xReviewer").prop("checked"),
        admin: $("#xAdmin").prop("checked")
        
    }

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/api/users",
        data: JSON.stringify(newUser),
        contentType: "application/json"
    })
        .done(res => {
            console.debug(res, " - Added!");
        })
        .fail(err => {
            console.error(err);
        });
};