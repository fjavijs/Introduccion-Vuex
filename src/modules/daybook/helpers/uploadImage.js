import axios from 'axios'

const uploadImage = async (file) => {

    if (!file) return

    /*
    El FormData object le permite compilar un conjunto de pares clave/valor para enviar usando XMLHttpRequest.
    Está pensado principalmente para enviar datos de formularios, pero se puede utilizar independientemente de los 
    formularios para transmitir datos clave. Los datos transmitidos están en el mismo formato que el submit() método 
    del formulario usaría para enviar los datos si el tipo de codificación del formulario estuviera configurado 
    en multipart/form-data
    */
    try {

        const formData = new FormData()
        formData.append('upload_preset', 'curso-Vue')
        formData.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/dycv4oxif/image/upload'
        const { data } = await axios.post(url, formData)

        /*console.log(data)*/

        return data.secure_url

    } catch (error) {
        console.error('Error al cargar la imagen, revisar logs')
        console.log(error)
        return null
    }

}

export default uploadImage