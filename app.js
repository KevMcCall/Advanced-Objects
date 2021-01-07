var porsche = {
    make: "Porsche",
    model: "Panarama",
    year: 2020,
    available: true,
    description: "The Porsche Panamera is an excellent super luxury car."
}

function display1() {
    var place = document.getElementById("submit1");

    for (value in porsche) {
        place.innerHTML = "Make: " + porsche.make + "<br>" +
            "Model: " + porsche.model + "<br>" +
            "Year: " + porsche.year + "<br>" +
            "Available: " + porsche.available + "<br>" +
            "About: " + porsche.description;
    }
};

var ferrari = {
    make: "Ferrari",
    model: "Panarama",
    year: 2020,
    available: true,
    description: "The Ferrari is an excellent super luxury car."
}

function display2() {
    var place = document.getElementById("submit2");

    for (value in ferrari) {
        place.innerHTML = "Make: " + ferrari.make + "<br>" +
            "Model: " + ferrari.model + "<br>" +
            "Year: " + ferrari.year + "<br>" +
            "Available: " + ferrari.available + "<br>" +
            "About: " + ferrari.description;
    }
};

var lambo = {
    make: "Lamborghini",
    model: "Panarama",
    year: 2020,
    available: true,
    description: "The Ferrari is an excellent super luxury car."
}

function display3() {
    var place = document.getElementById("submit3");

    for (value in lambo) {
        place.innerHTML = "Make: " + lambo.make + "<br>" +
            "Model: " + lambo.model + "<br>" +
            "Year: " + lambo.year + "<br>" +
            "Available: " + lambo.available + "<br>" +
            "About: " + lambo.description;
    }
};