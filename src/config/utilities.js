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
const video = document.querySelector('video');
const canvas = document.querySelector('canvas')
var barcodeDetector = new window.BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});

const startStream = async (constraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleStream(stream);
};
  const handleStream = async (stream) => {
    video.srcObject = stream;
    const trac = stream.getVideoTracks()
    const code = document.getElementById('img')
    canvas.height = 200
    canvas.width = 300
    const ctx = canvas.getContext("2d")
    ctx.drawImage(video,0,0)
    let image = ctx.getImageData(0,0,canvas.width,canvas.height)
    console.log(image)
    const response = await barcodeDetector.detect(image)
    .then(barcodes => {
      alert(JSON.stringify(typeof(barcodes)))
    })
  
};
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
              facingMode: 'environment'
            }
          }
          //video.play();
          startStream(constraint)
    }
}
getVideoPermission()
// check compatibility

// check supported types
// barcodeDetector.getSupportedFormats()
//   .then(supportedFormats => {
//     supportedFormats.forEach(format => alert(format));
//   });
  
  // .catch(err => {
  //   console.log(err);
  // })



  export function getDataByEan(ean){
const data = fetch(`https://world.openfoodfacts.org/api/v0/product/${ean}.json`)
    .then(res=>res.json())
    .then(res=>res)
return data;
}
 