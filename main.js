var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();


}

recognition.onresult = function(event)
{
    console.log(event);
    
    var Content = event.results[0][0].transcript;
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie"){
        console.log("taking selfie ---")
        speak();
    }

}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = "Taking The First Selfie in 5 Seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot1();
        save();
    },5000);

    var synth = window.speechSynthesis;

    speak_data = "Taking The Second Selfie in 10 Seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot2();
        save();
    },10000);

    var synth = window.speechSynthesis;

    speak_data = "Taking The Third Selfie in 15 Seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot3();
        save();
    },15000);

}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot1()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result1").innerHTML = '<img id="selfie_img" src="'+data_uri+'">';
    });

}

function take_snapshot2()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result2").innerHTML = '<img id="selfie_img" src="'+data_uri+'">';
    });

}

function take_snapshot3()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result3").innerHTML = '<img id="selfie_img" src="'+data_uri+'">';
    });

}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();

}