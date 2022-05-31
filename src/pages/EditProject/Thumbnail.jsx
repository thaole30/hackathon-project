import React,  { useEffect, useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import CustomButton from '../../components/CustomButton/CustomButton';

const Thumbnail = ({projectInfo, setUploadFile}) => {
    // console.log("projectInfo thumbnail", projectInfo)

    // const [thumbnailFile, setThumbnailFile] = use
    const [thumbnailImg, setThumbnailImg] = useState({
        imgUrl: "",
    });

    useEffect(() => {
        setThumbnailImg({
            imgUrl: projectInfo?.img,
        })
    }, [projectInfo])

    console.log("thumbnailImg", thumbnailImg);

    const props = {
        beforeUpload: file => {
          return false;
        },
        onChange: info => {
            console.log("file", info.file);
        //   console.log(info.fileList);
            const file = info.file;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setThumbnailImg({
                    imgUrl: URL.createObjectURL(file),
                    detail: file,
                    imgName: file.name,
                })
                setUploadFile(file);
            }
        },
      };

  return (
    <>
        <h2 className="bold text-24">Thumbnail image</h2>
        <div className="thumbnail-card">
            <img className="w-100" src={thumbnailImg.imgUrl} alt="thumbnail-img" />
            <div className="thumbnail-body">
                <h4 className="h3 bold text-16">
                    {projectInfo?.name}
                </h4>
            </div>
        </div>
        <div className="choose-thumbnail-section mt-32">
            <Upload {...props}
                maxCount={1}

            >
                <CustomButton
                    type="button"
                    addedClass="choose-photo-btn"
                >
                    Choose photo
                </CustomButton>
                <p className="text-16 mt-16 mb-16">
                    JPG, PNG or GIF format, 5 MB max file size. For best results, use a 3:2 ratio.
                </p>
            </Upload>
        </div>
    </>
  )
}

export default Thumbnail