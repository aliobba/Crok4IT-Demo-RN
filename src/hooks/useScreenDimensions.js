/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';


/* -------------------------------------------------------------------------- */
/*                                     APP                                    */
/* -------------------------------------------------------------------------- */
const useScreenDimensions = () => {
    // Initialisation
    const [screenData, setScreenData] = useState(Dimensions.get('window'));

    // Component Lifecycle
    useEffect(() => {
        const onChange = (result) => {
            setScreenData(result.screen);
        };

        const dimensions = Dimensions.addEventListener('change', onChange);

        return () => {
            dimensions.remove();
          };
          
    });

    /* -------------------------------- function return isLandscape or isPortrait  ------------------------------- */
    return {
        ...screenData,
        isLandscape: screenData.width > screenData.height,
        isPortrait: screenData.width < screenData.height,
    };
};

export default useScreenDimensions;