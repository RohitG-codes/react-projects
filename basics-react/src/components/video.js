import './video.css'
// function Video(props) -> for this // <div>{props.title}</div>
    function Video({title,color,name='JavaScript',isCompleted,children,id,deleteVideo,editVideo}){
    // console.log(title)
    // console.log(color)
    let cName="React"
    let bg="dark"
    // let completedOrNot;
    // if(isCompleted){
    //     completedOrNot = <div>Completed</div>
    // }else{
    //     completedOrNot = <div></div>
    // }

    return (
        <div className="container" style={{float : "left",padding:"100px 0px 0px 100px"}}>
        <button onClick={()=>deleteVideo(id)}>X</button>
        <button onClick={()=>editVideo(id)}>+</button>
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="Image"/>
        <div className={bg} style={{backgroundColor : color, width:"100px"}}>{cName}{title}</div>
        <div>{name}</div>
        {isCompleted ? <div>Completed</div>: <div>Not Completed</div>}
        <div>
            {children}
        </div>
        </div>
        
    )
}
export default Video