const url = "https://jsonplaceholder.typicode.com/photos";

const getAlbum = async() => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        // const dataMinificado = data.slice(0, 20);
        data.forEach(element => {
            if(element.id <= 20){
                console.log(element.title);
            }
        });
    } catch (error) {
        console.error(error)
    }
}
getAlbum();

const enviaMensaje = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve("Información Enviada")
        }, 3000);
    });
}

const  muestraEnConsola = async() => {
    try {
        const mensaje = await enviaMensaje();
        console.log(mensaje);
    } catch (error) {
        console.error(error)
    }
}

muestraEnConsola();

