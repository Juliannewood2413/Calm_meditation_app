// shout out to devEd for the awesome walk through//

const app = () => {
    //Elements
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline=  document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //Sounds
    const sounds = document.querySelectorAll('.sound-picker button');

    //Time Display
    const timeDisplay = document.querySelector('.time-display');
    //Get the length of the outline
    const outlineLength = outline.getTotalLength();
    console.log(outlineLength);

    //Duration
    let fakeDuration = 600;

    //get stroke dash array and offset
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //play sounds
    play.addEventListener('click', () => {
        checkPlay(song);
    });

    //create function specific to stop and play
    const checkPlay = song => {
        if(song.paused){
            song.play();
            video.play();
            play.src= './svg/pause.svg';
        } else {
            song.pause();
            video.pause();
            play.src= "./svg/play.svg";
        }

    }

    //animate the circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        //animate progress bar
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

    }




}


app();