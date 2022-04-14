const express = require('express')

const app = express()
const port = 3030
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/*+json' }))
//app.use(bodyParser.json())

app.post('/test', (req, res) => {
  console.log(req)

  javascriptBarcodeReader({
    /* Image file Path || {data: Uint8ClampedArray, width, height} || HTML5 Canvas ImageData */
    image: source,
    barcode: 'code-2of5',
    // barcodeType: 'industrial',
    options: {    
      // useAdaptiveThreshold: true // for images with sahded portions
      // singlePass: true
    }
  })
    .then(code => {
      console.log(code)
    })
    .catch(err => {
      console.log(err)
    })
})



// parse application/x-www-form-urlencoded

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

