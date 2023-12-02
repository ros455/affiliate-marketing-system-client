import React, {useEffect, useState} from 'react';
import { apiInstance } from '../../../../http/Api';
import ReferenceTemplateAndEdit from '../../../template/ReferenceTemplateAndEdit';
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
const AdminCreativesTab = () => {
    const [imageText, setImageText] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [videoText, setVideoText] = useState('');
    const [videoLink, setVideoLink,] = useState('');
    const [reloadData, setReloadData] = useState('');
    useEffect(() => {
        apiInstance.get('/get-all-media-content')
        .then((res) => {
          console.log('res',res.data)
          setImageText(res.data.imageText);
          setImageLink(res.data.imageLink);
          setVideoText(res.data.videoText);
          setVideoLink(res.data.videoLink);
        })
        },[reloadData])

        console.log('imageText',imageText);
        console.log('imageLink',imageLink);
        console.log('videoText',videoText);
        console.log('videoLink',videoLink);
    
    return (
        <div>
         <h2 className="referral_program_title">Creatives</h2>
            <ReferenceTemplateAndEdit
                      img={<FaImage/>}
                      link={imageLink}
                      text={imageText}
                      title="Links to banners"
                      url={'/update-iamges-content'}
                      setReloadData={setReloadData}/>
            <ReferenceTemplateAndEdit
                      img={<FaVideo/>}
                      link={videoLink}
                      text={videoText}
                      title="Links to videos"
                      url={'/update-videos-content'}
                      setReloadData={setReloadData}/>
        </div>
    );
};

export default AdminCreativesTab;