interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details: Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:"pepe",
        year: 2015
    }
}
const song = "New song";
//Renombrar cuando desestructuramos

const { song:anotherSong } = audioPlayer;

const { details:anotherDetails } = audioPlayer;
const { author:anotherAutor } =  anotherDetails;

// console.log('Author destructuring:' , anotherAutor);
// console.log('Song:' , song);
// console.log('Song destructuring:' , anotherSong);
// console.log('Author:' , audioPlayer.details.author);


//Desestructuración de Arreglos

const [ , ,trunks='not found']:string[] = ['Goku', 'Vegeta'];


console.error("PJ 3:",trunks);



export {};