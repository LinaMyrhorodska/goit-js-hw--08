import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const keyTime = 'videoplayer-current-time';
const currentTime = localStorage.getItem(keyTime) ? localStorage.getItem(keyTime) : 0;


player.on('timeupdate', throttle(getCurrentTime, 1000));
player.setCurrentTime(currentTime);

function getCurrentTime(e) {
    localStorage.setItem(keyTime, e.seconds);
    }

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
