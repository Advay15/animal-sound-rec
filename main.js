//https://teachablemachine.withgoogle.com/models/pX43WeRAN/
function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pX43WeRAN/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}