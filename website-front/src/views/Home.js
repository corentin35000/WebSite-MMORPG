import React from "react";
import ReactPlayer from "react-player";
import video from '../videos/splashscreen.mp4';
import video2 from '../videos/splashscreen.webm';
import '../css/Home.css';

export default function Home() {

    return (
        <>
            <div className="container">
                <ReactPlayer
                    className='react-player'
                    url={video2}
                    playing={true}
                    loop={true}
                    controls={false}
                    volume={0}
                    width="50%"
                    height="50%"
                />

                <div className="overlay">
                    <button>JOUEZ GRATUITEMENT</button>
                </div>
            </div>

            <div>
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />  dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />  dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />  dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
                dfsdfsfdfs <br />
            </div>
        </>
    );

}