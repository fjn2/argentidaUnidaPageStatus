const axios = require('axios')
const beep = require('beepbeep')

const PAGE = 'https://formulario-ddjj.argentina.gob.ar/certificado/caba/categoria/6'
const INTERVAL = 60000 // 1 min


const isDown = (pageContent) => {
  return pageContent.indexOf('Estamos trabajando para que en las') > -1;
}

const check = async () => {
  const pageContent = await axios.get(PAGE)
  if (isDown(pageContent.data)) {
    console.log(new Date(), "Page is down")
  } else {
    console.log(new Date(), "Page UP!!")
    beep(10)
  }
  setTimeout(check, INTERVAL)
}

check();