import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const useScreenDimensions = () => {
    const [screenData, setScreenData] = useState(Dimensions.get('window'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenData(result.screen);
        };

        Dimensions.addEventListener('change', onChange);

        return () => Dimensions.removeEventListener('change');
    });

    return {
        ...screenData,
        isLandscape: screenData.width > screenData.height,
        isPortrait: screenData.width < screenData.height,
    };
};

export default useScreenDimensions;