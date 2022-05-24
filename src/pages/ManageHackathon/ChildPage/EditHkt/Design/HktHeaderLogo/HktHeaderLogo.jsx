import React, { useState } from 'react';
import { Upload, message, Button, Form } from 'antd';
import { CloudUploadOutlined, AccountBookOutlined } from '@ant-design/icons';
import "./HktHeaderLogo.scss";


const { Dragger } = Upload;

const HktHeaderLogo = ({addedClass}) => {
    const [form] = Form.useForm();

    const [showUploadComponent, setShowUploadComponent] = useState(true);
    console.log("showUploadComponent", showUploadComponent);
  
    const [fileList, setFileList] = useState([
     
    ]);
    console.log("fileList", fileList);
  
  
  const props = {
    name: 'file',
    multiple: false,
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      setShowUploadComponent(false);
      if (status !== 'uploading') {
        console.log("file", info.file);
        console.log("fileList", info.fileList);
        setFileList(info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    beforeUpload(file) {
      return false;
    },
    maxCount: 1,
  };
  
    const onChange = ({ fileList: newFileList }) => {
      console.log("on changeeeeee");
      setFileList(newFileList);
      setShowUploadComponent(true);
    };
  
    const onPreview = async file => {
      let src = file.url;
      console.log("src lan 1", src);
      if (!src) {
        src = await new Promise(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => {
            resolve(reader.result)
          };
        });
      console.log("src lan 2", src);
  
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow.document.write(image.outerHTML);
    };
  
  
  
    return (
      <div className={`f hkt-header-section ${addedClass}`}>    
        <div className={`upload-hktHeaderlogo ${fileList.length === 0 ? "w-100" : "d-none"}`}>  
        {
          showUploadComponent && (
            <Dragger {...props} className="my-dragger">
            <p className="text-12 text-gray center">5 MB — JPG, PNG, GIF</p>
            <p className="text-12 text-gray center mb-16">16:9 aspect ratio</p>
  
            <Button type="primary" icon={<CloudUploadOutlined />} size={"large"}>
                Upload
              </Button>
            <p className="ant-upload-text mt-16">or drag and drop</p>
            
            </Dragger>
          )
        }  
        </div>
  
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          className={fileList.length === 0 ? "d-none" : "w-100"}
        >
        </Upload>
      </div>
    )
}

export default HktHeaderLogo