import { useEffect, useState } from "react";


function useResize() {
    
    const [dimension, setDimension] = useState({
        windowWidth: 0,
        windowHeight: 0,
    })

    // const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(() => {
        const handleResize = () => {
            console.log("width", window.innerWidth)
            setDimension({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight
            });
            // setWindowWidth(window.innerWidth);
        }
          window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    // return dimension;
    return dimension;
}

export default useResize;