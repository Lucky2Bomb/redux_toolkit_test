import React, { useEffect, useState } from 'react';

function Loader() {

    // const [dots, setDots] = useState("");

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (dots.length < 3) {
    //             setDots(dots + ".");
    //         } else {
    //             setDots("");
    //         }
    //     }, 300);
    // }, [dots]);


    return (
        <div>
            loading...
            {/* loading{dots} */}
        </div>
    );
}

export default Loader;