const baseurl = "http://localhost:8080/api/users"

$(() => {
    $("#getid").on("click", ()=> {
        var id = $("#zId").val();
        console.log("Id is ", id);
        getByPk(id);
    });

    $("#delete").on("click", () => {
        let user = {}
        getFromPage(user);
        deleteUser(user);
    });
    
    });

const deleteUser = (user) => {
    user.id = Number(user.id);
    $.ajax9({
        method: "DELETE",
        url: `${baseurl}/${user.id}`,
    })
        .done(res => {
            console.log("Update Successful!")
        })
        .fail(err => {
            console.error(err);
        });
};

const getFromPage = (user) => {
    user.id = $("#xId").val();
    user.username = $("#xUsername").val();
    user.password = $("#xPassword").val();
    user.firstname = $("#xFirstname").val();
    user.lastname = $("#xLastname").val();
    user.phone = $("#xPhone").val();
    user.email = $("#xEmail").val();
    user.reviewer = $("#xReviewer").prop("checked");
    user.adming = $("#xAdmin").prop("checked");
}

const display = (user) => {
    $("#xId").val(user.id);
    $("#xUsername").val(user.username);
    $("#xPassword").val(user.password);
    $("#xFirstname").val(user.firstname);
    $("#xLastname").val(user.lastname);
    $("#xPhone").val(user.phone);
    $("#xEmail").val(user.email);
    $("#xReviewer").prop("checked", user.reviewer);
    $("#xAdmin").prop("checked", user.admin);
};

const getByPk = (id) => {
    $.getJSON(`${baseurl}/${id}`)
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => { console.error(err);
        });
}