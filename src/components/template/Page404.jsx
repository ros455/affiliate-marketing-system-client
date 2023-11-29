import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
const Page404 = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        },1500)
    },[])

    return (
        <>
            {isLoading
            ?
            <div className='page404_wrap'>
            <p className='page404_info'>Page not found</p>
            <p className='page404_text'>404</p>
            <Link className='page404_link' to='/'>Go to main page</Link>
            </div>
            :
            <Loader/>
            }
        </>
    );
};

export default Page404;