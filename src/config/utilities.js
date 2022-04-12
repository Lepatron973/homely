import { Link } from "react-router-dom";
export function getPage(){
    let currentPage = window.location.pathname.split('/')[1]
    return currentPage;
}
export function getInputDateFormat(date){
    let formatedDate = date.split("/");
    formatedDate = `${formatedDate[2]}-${formatedDate[1]}-${formatedDate[0]}`;
    return formatedDate;
}
export function setPrevButton(){

    const path = window.location.pathname.split('/').length > 2 ? window.location.origin + "/" +getPage() : "/";
    setTimeout(()=>{
        let prevButton = document.getElementById('prevButton');
        prevButton.innerHTML = getPage() != "" &&  getPage() != "stock" ? `<a href="${path}"><i class="bi bi-arrow-left-circle"></i></a>` : ""
    },100)

}
const startStream = async (constraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleStream(stream);
};
  const handleStream = (stream) => {
    video.srcObject = stream;
};
const video = document.querySelector('video');
function getVideoPermission(){
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    
        const constraint = {
            video: {
              width: {
                min: 100,
                ideal: 200,
                max: 2560,
              },
              height: {
                min: 100,
                ideal: 200,
                max: 1440
              },
              facingMode: 'user'
            }
          }
          video.play();
          startStream(constraint)
    }
}
function onScanSuccess(decodedText, decodedResult) {
  console.log(`Code scanned = ${decodedText}`, decodedResult);
}
// var html5QrcodeScanner = new Html5QrcodeScanner(
// "qr-reader", { fps: 10, qrbox: 250 });
// html5QrcodeScanner.render(onScanSuccess);

export function getDataByEan(ean){
const data = fetch(`https://world.openfoodfacts.org/api/v0/product/${ean}.json`)
    .then(res=>res.json())
    .then(res=>res)
return data;
}
 