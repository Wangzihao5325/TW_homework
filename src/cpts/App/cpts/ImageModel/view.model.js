import React, { useContext } from 'react';
import DispatchContext from '../../../Pages/context';

const useViewModel = (props) => {
    const { data } = props;
    const imageModalDispatch = useContext(DispatchContext);

    const handleTouchablePress = () => {
        imageModalDispatch({ type: 'unshow' })
    }

    return {
        handleTouchablePress,
        data,
    }
}

export default useViewModel;