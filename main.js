/* https://teachablemachine.withgoogle.com/models/N0ngRAu7y/ */
function startcheking(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classfire=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/N0ngRAu7y/model.json",openfire);
}
function openfire(){
classfire.classify(gotruzlt);
}
function gotruzlt(error,results){
    console.log("gotruzlt");
}