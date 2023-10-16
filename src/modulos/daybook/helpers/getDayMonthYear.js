
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']


const getDayMonthYear = (dateString) => {

    const date = new Date(dateString)
    const p = date.getDay()
    console.log(p)
       
    return {
        day: date.getDate(),
        month: months[ date.getMonth() ],
        yearDay: `${date.getFullYear()}, ${days[date.getDay()]}`
    }

}

export default getDayMonthYear