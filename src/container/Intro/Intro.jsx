import React , {useState , useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';


const Intro = () => {

  const refVideo = useRef()
  const [playVideo, setplayVideo] = useState(false);

  const handelVideo = () => {
    setplayVideo(!playVideo);

    if (playVideo){
      refVideo.current.pause();
    } else {
      refVideo.current.play();
    }
  }

  return (
    <div className="video">
      <video src={meal} ref={refVideo} type="Video/mp4" loop muted controls={false} />
      <div className="video_overlay flex_center ">
        <div className="video_overlay_circle flex_center " onClick={handelVideo} >
          {playVideo ? (<BsPauseFill color='#fff' fontSize={30} />) : (<BsFillPlayFill color='#fff' fontSize={30} />) }
        </div>
      </div>
    </div>
  );
};


export default Intro;