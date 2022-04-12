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
// check compatibility
if (!('BarcodeDetector' in window)) {
  alert('Barcode Detector is not supported by this browser.');
} else {
  alert('Barcode Detector supported!');

  // create new detector
  var barcodeDetector = new window.BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
}
// check supported types
barcodeDetector.getSupportedFormats()
  .then(supportedFormats => {
    supportedFormats.forEach(format => alert(format));
  });
  // barcodeDetector.detect(imageEl)
  // .then(barcodes => {
  //   barcodes.forEach(barcode => alert(barcode.rawData));
  // })
  // .catch(err => {
  //   console.log(err);
  // })



  export function getDataByEan(ean){
const data = fetch(`https://world.openfoodfacts.org/api/v0/product/${ean}.json`)
    .then(res=>res.json())
    .then(res=>res)
return data;
}
 