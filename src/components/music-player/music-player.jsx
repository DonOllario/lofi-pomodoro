import './music-player.css'

function MusicPlayer() {
    return (
      <iframe
        className="music-player"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/5qap5aO4i9A?"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };
  
  export default MusicPlayer;
  