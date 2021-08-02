

$(() => {
console.log("Everything Is Ready");
getUserById(2);
}); 

const getUserById = (id) => {
    $.getJSON(`http://localhost:8080/api/users/${id}`)
        .done(res => {
            console.debug(res);
            displayUser(res);
        })
        .fail(err => {
            console.error(err);
        });
};
const getAllUsers = () => {
$.getJSON(`http://localhost:8080/api/users`)
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => {
            console.error(err);
        });
    }

    const displayUser = (user) => {
        $("#dId").html(`<b>${user.id}</b>`);
        $("#dUsername").text(`${user.username}`);
        $("#dFirstname").text(`${user.firstname}`);
        $("#dLastname").text(`${user.lastname}`);
        $("#dPhone").text(`${user.phone}`);
        $("#dEmail").text(`${user.email}`);
        $("#dReviewer").text(`${(user.reviewer ? "Yes" : "No")}`);
        $("#dAdmin").text(`${(user.admin ? "Yes" : "No")}`);
    }

const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users) {
        let tr = $("<tr></tr>");
        tr.append($(`<td>${user.id}</td>`) );
        tr.append($(`<td>${user.username}</td>`) );
        tr.append($(`<td>${user.firstname} ${user.lastname}</td>`) );
        tr.append($(`<td>${user.phone}</td>`) );
        tr.append($(`<td>${user.email}</td>`) );
        tr.append($(`<td>${(user.reviewer ? "Yes" : "No")}</td>`) );
        tr.append($(`<td>${(user.admin ? "Yes" : "No")}</td>`) );
        tbody.append(tr);
    }
};