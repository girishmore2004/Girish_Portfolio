import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter style={{color:"aqua"}}
            options={{
                strings: [
                    "Developer",
                    "Mern Stack Developer",
                    "Frontend Developer",
                    "Backend Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
