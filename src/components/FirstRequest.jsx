import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { fetchAuthMe, fetchIsAdmin } from '../store/auth';
const FirstRequest = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(window.localStorage.getItem('A-M-S-token')) {
            dispatch(fetchAuthMe());
        }
    },[])
};

export default FirstRequest;