import { useEffect, useState } from "react";


function useMediaQuery(minWidth) {
    const [isMatch, setIsMatch] = useState(true);

      useEffect(() => {
        const handleResize = () => {
            console.log("width", window.innerWidth)
            if(window.innerWidth > minWidth) {
                setIsMatch(false);
            } else {
                setIsMatch(true);
            }

        }
          window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return isMatch;
}

export default useMediaQuery;