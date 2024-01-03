// import VideoList from "./components/videolist";
// import videoDB from "./data/data";
// import Counter from "./components/conter";
// import "./App.css";
// import { useReducer, useState } from "react";
// import AddVideo from "./components/addvideo";
// function App() {
//   // <Video color="red" title=" 1st component" name="Python" isCompleted = {false}></Video>
//   // <Video color={c2} title=" 2nd component" isCompleted = "true"></Video>
//   // <Video {...prop3}></Video>
//   // <PlayButton message="World" onCllick={()=>alert("Messi")}>Play World</PlayButton>
//   // let c2 = "green";

//   function videoReducer(videos, action) {
//     switch (action.type) {
//       case "ADD":
//         return [...videos, { ...action.payload, id: videos.length + 2 }];

//       case "DELETE":
//         return videos.filter((video) => video.id !== action.payload);

//       case "UPDATE":
//         const index = videos.findIndex((v) => v.id === action.payload.id);
//         const newarrvid = [...videos];
//         newarrvid.splice(index, 1, action.payload);
//         return newarrvid;

//       default:
//         return videos;
//     }
//   }

//   const [videos, dispatch] = useReducer(videoReducer, videoDB);

//   // const [videos, setVideos] = useState(videoDB);

//   const [editableVideo, setEditableVideo] = useState(null);

//   function addNewVideofunc(video) {
//     dispatch({ type: "ADD", payload: video });
//     //action : {type:"ADD",payload:video}
//     // setVideos([...videos, { ...video, id: videos.length + 1 }]);
//   }

//   function deleteVideo(id) {
//     console.log(id);
//     dispatch({ type: "DELETE", payload: id });

//     //setVideos(videos.filter((video) => video.id !== id));
//   }

//   function editVideo(id) {
//     setEditableVideo(videos.find((video) => video.id === id));
//   }

//   function updateVideo(video) {
//     dispatch({ type: "UPDATE", payload: video });

//     // const index=videos.findIndex((v) => v.id === video.id)
//     // const newarrvid=[...videos]
//     // newarrvid.splice(index,1,video)
//     //setVideos(newarrvid);
//   }

//   return (
//     <>
//       <div onClick={() => console.log("App")}>
//         <Counter></Counter>
//         <hr />
//         <AddVideo
//           addNewVideo={addNewVideofunc}
//           updateVideo={updateVideo}
//           editableVideo={editableVideo}
//         ></AddVideo>
//         <VideoList
//           deleteVideo={deleteVideo}
//           editVideo={editVideo}
//           videos={videos}
//         ></VideoList>
//       </div>
//     </>
//   );
// }
// export default App;

import Calendar from "./components/calendar"


import './App.css';
function App() {
  return (
 <Calendar></Calendar>
  );
}

export default App;