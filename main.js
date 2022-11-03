function convertRgbToHex() {
    const red = document.querySelector("#red");
    const green = document.querySelector("#green");
    const blue = document.querySelector("#blue");

    document.querySelector(".rgb .red").textContent = red.value;
    document.querySelector(".rgb .green").textContent = green.value;
    document.querySelector(".rgb .blue").textContent = blue.value;

    const redHex = parseInt(red.value).toString(16);
    const greenHex = parseInt(green.value).toString(16);
    const blueHex = parseInt(blue.value).toString(16);

    const readjustment = [redHex, greenHex, blueHex].map(v => {
        return v.length == 2 ? v : "0" + v;
    });

    const colorHex = ["#", ...readjustment].join("");
    document.querySelector(".hex").textContent = colorHex;
    document.querySelector(".hex-color").style.backgroundColor = colorHex;
}

document.querySelector("button").addEventListener("click", (ev) => {
    convertRgbToHex();
});
