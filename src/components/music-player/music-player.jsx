import './music-player.css'

function MusicPlayer() {
    return (
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    );
  };
  
  export default MusicPlayer;
  