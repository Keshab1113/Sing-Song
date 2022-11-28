let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('Play');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('round');
let masterSongName = document.getElementById('songname');
let coverimage=document.getElementById('coverimage');
let zero = document.getElementById('0');
let menubar = document.getElementById('menubar');
let sidebar = document.getElementById('sidebar');
let crossbar = document.getElementById('crossbar');


let songs = [
    {songName: "Dhera Dhera Dhera", filePath: "songs/1.mp3", coverPath: "images/1.jpeg"},
    {songName: "Hangover", filePath: "songs/2.mp3", coverPath: "images/2.jpeg"},
    {songName: "Saara India", filePath: "songs/3.mp3", coverPath: "images/3.jpeg"},
    {songName: "Akhiyaan Milavanga", filePath: "songs/4.mp3", coverPath: "images/4.jpeg"},
    {songName: " ButtaBomma", filePath: "songs/5.mp3", coverPath: "images/5.jpeg"},
    {songName: " Ramuloo Ramulaa", filePath: "songs/6.mp3", coverPath: "images/6.jpeg"},
    {songName: "Apsara Aali", filePath: "songs/7.mp3", coverPath: "images/7.jpeg"},
    {songName: "O Desh Mere", filePath: "songs/8.mp3", coverPath: "images/8.jpeg"},
    {songName: "Paani Paani", filePath: "songs/9.mp3", coverPath: "images/9.jpeg"},
    {songName: "Bam Bhole", filePath: "songs/10.mp3", coverPath: "images/10.jpeg"},
    {songName: "Bandeya", filePath: "songs/11.mp3", coverPath: "images/11.jpeg"},
    {songName: "Barsaat Ki Dhun", filePath: "songs/12.mp3", coverPath: "images/12.jpeg"},
    {songName: "Bedardi Se Pyaar Ka", filePath: "songs/13.mp3", coverPath: "images/13.jpeg"},
    {songName: "Bella Ciao", filePath: "songs/14.mp3", coverPath: "images/14.jpeg"},
    {songName: "Bheege Bheege", filePath: "songs/15.mp3", coverPath: "images/15.jpeg"}
    
]

 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        makeAllPlays();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        masterSongName.style.opacity = 1;
        zero.classList.add('fa-pause-circle');
        coverimage.style.opacity=1;
    }
    else{
        makeAllPlays();
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        masterSongName.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        coverimage.src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    })
})


document.getElementById('Next').addEventListener('click', ()=>{
    if(songIndex>=14){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    makeAllPlays();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    coverimage.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('Previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 14;
    }
    else{
        songIndex -=1;
    }
    makeAllPlays();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    coverimage.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
    
})


menubar.addEventListener('click', ()=>{
    sidebar.style.height= `100%`;
    sidebar.style.width= `100%`;
    menubar.style.zIndex =-1;
})


crossbar.addEventListener('click',()=>{
    sidebar.style.height= 0;
    sidebar.style.width= 0;
    menubar.style.zIndex =1;
})