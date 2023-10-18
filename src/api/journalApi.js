
import axios from 'axios'

// ruta recogida de mi base de datos creada en firebase.
const journalApi = axios.create({
    baseURL: 'https://vue-demos-9736d-default-rtdb.europe-west1.firebasedatabase.app'
})


export default journalApi


