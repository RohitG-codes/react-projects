
import PlayButton from "./playbutton";
import Video from "./video";

function VideoList({videos,deleteVideo,editVideo}){
    return(
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              color={video.color}
              title={video.title}
              name={video.name}
              isCompleted={video.isCompleted}
              id={video.id}
              deleteVideo={deleteVideo}
              editVideo={editVideo}            >
              <PlayButton
                onPlay={() => console.log("Played", video.title)}
                onPause={() => console.log("Paused", video.title)}
              >
                {video.title}
              </PlayButton>
            </Video>
          ))}
        </>
    );
}

export default VideoList;