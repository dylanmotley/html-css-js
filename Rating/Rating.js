class Bootcamp {
    constructor(subject, rating) {
    this.subject = subject;
    this.rating = rating;
}
}
let bootcamps = [
];

const remove = () => {
    let subject = document.getElementById("subject").value;
    let idx = -1;
    for(let i in bootcamps) {
        if(subject === bootcamps[i].subject) {
        idx = i;
        break;  
        }
    }
    if(idx != -1) {
    bootcamps.splice(idx, 1);
    }
    displayBootcamps();
}

const add = () => {
    let subjectCtrl = document.getElementById("subject");
    let ratingCtrl = document.getElementById("rating");
    let bootcamp = new Bootcamp(subjectCtrl.value, ratingCtrl.value);
    bootcamps.push(bootcamp);
    displayBootcamps();

};

const displayBootcamps = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";    
    for (let bootcamp of bootcamps) {
        let tr = "<tr>";
        tr += `<td>${bootcamp.subject}<td>`;
        tr += `<td>${bootcamp.rating}<td>`;
        tr += "</tr>"
        tbody.innerHTML += tr;
    }

};


