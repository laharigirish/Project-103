Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    image_qualiy: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function Capture() {

    Webcam.snap(function (data_uri) {
        result = document.getElementById("result");
        result.innerHTML = '<img id="image" src="' + data_uri + '">';
    });
}

console.log("ml5version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HjNK3PiTL/", modelloaded);

function modelloaded() {
    console.log("Model has loaded");
}