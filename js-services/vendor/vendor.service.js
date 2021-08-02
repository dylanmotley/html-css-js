const baseurl = "http://localhost:8080/api/vendors";

const vendorGetAll = () => {
    return $.getJSON(`${baseurl}`);
    
}

const vendorGetByPk = (id) => {
    return $.getJSON(`${baseurl}/${id}`);
}