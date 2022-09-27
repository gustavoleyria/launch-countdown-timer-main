function runnerTime(){
    let day = new Date()
    let cumple = new Date('10-03-2022')
    let diference = cumple.getTime()- day.getTime()
    let dia = Math.floor((diference/60/60/24/1000))
    let horas = Math.floor(((diference/60/60/24/1000) - dia)*24)
    let minutos = Math.floor(((((diference/60/60/24/1000) - dia)*24)-horas)*60)
    let segundos = Math.floor(((((((diference/60/60/24/1000) - dia)*24)-horas)*60) - minutos)*60)
    // console.log(day)
    // console.log(cumple)
    // console.log(diference)
    // console.log(dia)
    // console.log(horas)
    // console.log(minutos)
    // console.log(segundos)
    let textday = document.getElementById('dia')
    let texthoras = document.getElementById('hora')
    let textminutos = document.getElementById('minuto')
    let textsegundos = document.getElementById('segundo')
    textday.innerText  = ((dia.toString()).length < 2) ? `0${dia}` : dia.toString()
    texthoras.innerText  = ((horas.toString()).length < 2) ? `0${horas}` : horas.toString()
    textminutos.innerText  = ((minutos.toString()).length < 2) ? `0${minutos}` : minutos.toString()
    textsegundos.innerText  = ((segundos.toString()).length < 2) ? `0${segundos}` : segundos.toString()
    // console.log(textday)

    if(diference > 0){
        setTimeout(runnerTime, 1000)
    }
    
}


runnerTime()

