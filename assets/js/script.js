// Funcion IIFE
let video = (()=> {
    let direccion = (url, id) => {
        id.setAttribute('src', url);
    }
    return {
        cargarVideo: (url, id) => direccion(url, id)
    }
})();

// Clase Padre
class Multimedia{
    #url
    constructor(url){
        this.#url = url;
    }

    get url(){
        return this.#url;
    }

    setInicio(){
        return 'Este método es para realizar un cambio en la URL del video'
    }
}

// Clase hija de multimedia
class Reproductor extends Multimedia {
    constructor(url, id){
        super(url);
        this.id = id;
    }

    playMultimedia(){
        video.cargarVideo(this.url, this.id)
    };
    setInicio(tiempo){
        this.id.setAttribute('src', `${this.url}?start=${tiempo}`)
    }
}

let playMovie = new Reproductor('https://www.youtube.com/embed/mEdvWQaZAFw', peliculas);
playMovie.playMultimedia();
playMovie.setInicio(53);

let playSerie = new Reproductor('https://www.youtube.com/embed/s7L2PVdrb_8', series);
playSerie.playMultimedia();
playSerie.setInicio(10);

