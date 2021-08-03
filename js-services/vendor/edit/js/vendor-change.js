
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
    $("#dSave").on("click", () => {
        change();
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



const change = () => {
    let vendor = {};
    vendor.id = $("#dId").val();
    vendor.code = $("#dCode").val();
    vendor.name = $("#dName").val();
    vendor.address = $("#dAddress").val();
    vendor.city = $("#dCity").val();
    vendor.state = $("#dState").val();
    vendor.zip = $("#dZip").val();
    vendor.phone = $("#dPhone").val();
    vendor.email = $("#dEmail").val();

    vendor.id = +vendor.id;
    vendorChange(vendor)
        .done(res => {
            console.debug(res);
            console.log("Change successful!");
            $("#message").html("<b>Change Successful!</b>")
        })
        .fail(err => {
            console.error(err);
            $("#message").html("<b>Change Failed!</b>")
        });

};