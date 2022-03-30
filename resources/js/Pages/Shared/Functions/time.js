export function parseDateTime(d) {

    let zaman = new Date(d)
    return zaman.toLocaleString('tr-TR', { timeZone: 'UTC' })
    //return zaman.getDay()+' '+zaman.getMonth()+' '+zaman.getFullYear()
}


export function checkSettingTime(d) {

    let zaman = new Date(d)


    return zaman.getTime()
    //return zaman.toLocaleString('tr-TR', { timeZone: 'UTC' })
}


