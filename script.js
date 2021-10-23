console.log("Welcome to Spotify Clone");

let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let progressBar=document.getElementById('progressBar');

progressBar.value=0;
let songs=[
    
        {songname:"Make You Mine",filepath:"songs/makeYouMine.mp3",coverPath:"covers/makeYouMine.jpg",artist:"Public"},
        {songname:"Believer",filepath:"songs/believer.mp3",coverPath:"covers/beleiver.jpg",artist:"Imagine Dragons"},
        {songname:"Paraide",filepath:"songs/paradise.mp3",coverPath:"covers/paradise.jpg",artist:"Coldplay"},
        {songname:"Double Take",filepath:"songs/doubleTake.mp3",coverPath:"covers/dhruv.jfif",artist:"Dhruv"}
    
];
let audioElement=new Audio(songs[0].filepath);
masterPlay.addEventListener('click',()=>
{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.src="pause.jpg";
    }
    else
    {
        audioElement.pause();
        masterPlay.src="play.png"
    }
});

// audioElement.play();
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    progressBar.value=progress;
    // console.log(audioElement.duration);

});

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100;
}
);

let forward=document.getElementById('forward');
forward.addEventListener('click',()=>
{
    
    songIndex=songIndex+1;
    if(songIndex>3)
    {
        songIndex=0;
    }
    let str=songs[songIndex].filepath;
    audioElement.src=str;
    audioElement.play();
    // masterPlay.src="pause"
    let songIcon=document.getElementById('currentSongIcon');
    let songName=document.getElementById('currentSongName');
    let artist=document.getElementById('currentArtist');
    songName.innerHTML=songs[songIndex].songname;
    artist.innerHTML=songs[songIndex].artist;
    songIcon.src=songs[songIndex].coverPath;
});

let playButtons=document.getElementsByClassName('play');
let equalizers=document.getElementsByClassName('equalizer');
Array.from(playButtons).forEach((element,i) => {
    element.addEventListener('click',()=>
    {
        songIndex=i;
        let eq=element.previousElementSibling;
        eq.style.opacity=1;
        masterPlay.src="pause.jpg";
        element.src="pause.jpg";
        let str=songs[songIndex].filepath;
        audioElement.src=str;
        audioElement.play();
        Array.from(playButtons).forEach((e,j) => {
            if(j!=songIndex)
            {
                e.src="play.png";
                let eqa=e.previousElementSibling;
                eqa.style.opacity=0;
            }
    
        
        });
    let songIcon=document.getElementById('currentSongIcon');
    let songName=document.getElementById('currentSongName');
    let artist=document.getElementById('currentArtist');
    songName.innerHTML=songs[songIndex].songname;
    artist.innerHTML=songs[songIndex].artist;
    songIcon.src=songs[songIndex].coverPath;
    });

    
});

// Array.from(equalizers).forEach((element,i) => {
//     element.style.opacity=1;

//     Array.from(equalizers).forEach((e,j) => {
//         if(j!=songIndex)
//         {
//             e.style.opacity=0;
            
//         }
    
        
//     });
   
    

    

let back=document.getElementById('back');
back.addEventListener('click',()=>
{
    
    songIndex=songIndex-1;
    if(songIndex<0)
    {
        songIndex=3;
    }
    let str=songs[songIndex].filepath;
    audioElement.src=str;
    audioElement.play();
    let songIcon=document.getElementById('currentSongIcon');
    let songName=document.getElementById('currentSongName');
    let artist=document.getElementById('currentArtist');
    songName.innerHTML=songs[songIndex].songname;
    artist.innerHTML=songs[songIndex].artist;
    songIcon.src=songs[songIndex].coverPath;
});