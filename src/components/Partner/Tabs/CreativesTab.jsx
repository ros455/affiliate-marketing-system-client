import React, {useEffect, useState} from 'react';
import ReferenceTemplate from '../../template/ReferenceTemplate';
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { apiInstance } from '../../../http/Api';
const CreativesTab = () => {
    const [imageText, setImageText] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [videoText, setVideoText] = useState('');
    const [videoLink, setVideoLink,] = useState('');
    useEffect(() => {
        apiInstance.get('/get-all-media-content')
        .then((res) => {
          console.log('res',res.data)
          setImageText(res.data.imageText);
          setImageLink(res.data.imageLink);
          setVideoText(res.data.videoText);
          setVideoLink(res.data.videoLink);
        })
        },[])
    return (
        <div>
         <h2 className="referral_program_title">Creatives</h2>
            <ReferenceTemplate
                      img={<FaImage/>}
                      link={imageLink}
                      text={imageText}
                      title="Links to banners"
                      />
            <ReferenceTemplate
                      img={<FaVideo/>}
                      link={videoLink}
                      text={videoText}
                      title="Links to videos"
                      />
        </div>
    );
};

export default CreativesTab;