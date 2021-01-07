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
    description: "Ranks near the top of super luxury cars, with a strong engine, well-balanced handling, and comfortable interior."
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
    model: "Huracan",
    year: 2021,
    available: true,
    description: "Exceptionally comfortable ride and stunning performance."
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

function clear1() {
    document.getElementById("submit1").innerText="See Details";
}

function clear2() {
    document.getElementById("submit2").innerText="See Details";
}

function clear3() {
    document.getElementById("submit3").innerText="See Details";
}

