console.log("welcome justify");
//Initalize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3'); 
let masterPlay=document.getElementById("masterPlay");
let mmyProgressBar=document.getElementById("myProgressBar");
let mastersongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
{songName:'Pyar Aaya', filepath:"songs/1.mp3", coverPath:"cover1.jpg"},
{songName:'Teri pasha', filepath:"songs/2.mp3", coverPath:"cover1.jpg"}, 
{songName:'Meri Aashiqui', filepath:"songs/3.mp3", coverPath:"cover1.jpg"},
{songName:'Tum Hi Ho', filepath:"songs/4.mp3", coverPath:"cover1.jpg"},
{songName:'Darshan baji', filepath:"songs/5.mp3", coverPath:"cover1.jpg"},
{songName:'ltum mujhe ', filepath:"songs/6.mp3", coverPath:"cover1.jpg"}
]
songItems.forEach((element,i)=>{
console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
})





//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause(); 
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
     
})
//Listen to Evenets
audioElement.addEventListener('timeupdate',()=>{
    //update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
 myProgressBar.value=progress;

})
myProgressBar.addEventListener('change', ()=>{
audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongName.innerText =songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0
    }
    else{
        songIndex +=1;
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongName.innerText =songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})
document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongName.innerText =songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})