export const toDoubleDigits = (num: string):string => {
    num += ''
    if (num.length === 1) {
      num = '0' + num
    }
    return num
  }

 export const formattedTime = (time: string | undefined): string => {
    if(!time){
      return "Time is not set"
    }
    const tempDate = new Date(time)
    const hours = tempDate.getHours()
    const minutes = tempDate.getMinutes()
    const minutesWithDoubleDigits = toDoubleDigits(`${minutes}`)
    return `${hours}:${minutesWithDoubleDigits}`
  }

export const formattedDate = (dateToBeFormatted: string | undefined): string => {
    if(!dateToBeFormatted){
      return "Date is not set"
    }
    const tempDate = new Date(dateToBeFormatted)
    const year = tempDate.getFullYear()
    const month = tempDate.getMonth() + 1
    const date = tempDate.getDate()
    return `${date}/${month}/${year}`

  }