import { useEffect, useState } from "react";
import "./addvideo.css";

const initialSate = {
  color: "magenta",
  name: "Redux",
  isCompleted: true,
  title: "",
};

function AddVideo({ addNewVideo,updateVideo,editableVideo }) {
  const [video, setVideos] = useState(initialSate);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      updateVideo(video);
    }else{
      addNewVideo(video);
    }
    //console.log(video);
    setVideos(initialSate);
  }

  function handleChange(e) {
    // console.log(e.target.name);
    // console.log(e.target.name + " : " + e.target.value);
    setVideos({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(()=>{
    if(editableVideo){
      setVideos(editableVideo);
    }
  },[editableVideo]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      ></input>
      <br />
      <button onClick={handleSubmit}>{editableVideo ? 'Edit' : 'Add'} Video</button>
    </div>
  );
}
export default AddVideo;
