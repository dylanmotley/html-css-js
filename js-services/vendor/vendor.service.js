const baseurl = "http://localhost:8080/api/vendors";

const vendorGetAll = () => {
    return $.getJSON(`${baseurl}`);
    
}

const vendorGetByPk = (id) => {
    return $.getJSON(`${baseurl}/${id}`);
}

const vendorCreate = (vendor) => {
    vendor.id = +vendor.id;
    console.log("B4:", vendor);
    return $.ajax({
        method: "POST",
        url: `${baseurl}`,
        data: JSON.stringify(vendor),
        contentType: `application/json`
    });
}

const vendorChange = (vendor) => {
    return $.ajax({
        method: "PUT",
        url: `${baseurl}/${vendor.id}`,
        data: JSON.stringify(vendor),
        contentType: `application/json`
    });
}
const vendorRemove = (vendor) => {
    return $.ajax({
        method: "DELETE",
        url: `${baseurl}/${id}`
    });
}