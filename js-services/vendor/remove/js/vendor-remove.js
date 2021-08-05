
$(() => {
    $("#zGet").on("click", () => {
        let id = $("#zId").val();
        vendorGetByPk(id)
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => {
            $("#message").html("<b>Vendor not found!</b>")
            console.error(err);
    });
});
    $("#dRemove").on("click", () => {
        remove();
    });
});

const display = (vendor) => {
    $("#dId").val(vendor.id);
    $("#dCode").val(vendor.code);
    $("#dName").val(vendor.name);
    $("#dAddress").val(vendor.address);
    $("#dCity").val(vendor.city);
    $("#dState").val(vendor.state);
    $("#dZip").val(vendor.zip);
    $("#dPhone").val(vendor.phone);
    $("#dEmail").val(vendor.email);
}



const remove = () => {
    let id = $("")
    vendor.id = +vendor.id;
    vendorRemove(id)
        .done(res => {
            console.debug(res);
            console.log("Change successful!");
            $("#message").html("<b>Remove Successful!</b>")
        })
        .fail(err => {
            console.error(err);
            $("#message").html("<b>Remove Failed!</b>")
        });

};