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
const photo = document.getElementById('photo')
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
    let streaming;
    video.addEventListener('canplay',()=>{
      if(!streaming){
        canvas.width = video.width
        canvas.height = video.height
        streaming = true;
      }
    },false)
    setInterval(()=>{takepicture()},2000)
    // const response = await barcodeDetector.detect(image)
    // .then(barcodes => {
    //   let data = barcodes.length > 0 ? barcodes : false;
    //   return data
    // })
    // if(!response){
    //   handleStream(stream)
    // }
  
};
async function takepicture() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  var data = canvas.toDataURL('image/png');
  
  //photo.setAttribute('src', data);
  
  const response = await barcodeDetector.detect(canvas)
  .then(barcodes => {
      let data = barcodes.length > 0 ? alert(barcodes.rawValue) : false;
    })
 
}
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
 