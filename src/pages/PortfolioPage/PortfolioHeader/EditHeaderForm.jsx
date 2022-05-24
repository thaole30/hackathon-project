import React from "react";
import { Form, Row, Col, Upload, Space, Button } from "antd";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { bgColors } from "./data";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/FirebaseConfig";


const storageImgRef = ref(storage, '/imgs');
// const storageImgRef = ref(storage, '/imgs/headerBgImg.png');


const EditHeaderForm = ({ colorActive, handleSetActiveColor, handleCloseForm, headerBgCancel, headerBgColorSave, bgImgInfo, setBgImgInfo }) => {
  
    const uploadToStorage = (imgBlob) => {
      localStorage.setItem('headerBgImgName', imgBlob.name);
      // uploadBytes(ref(storage, imgBlob.name), imgBlob).then((snapshot) => {
        uploadBytes(ref(storageImgRef, imgBlob.name), imgBlob).then((snapshot) => {
        // uploadBytes(storageImgRef, imgBlob).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
      });
    } 


  const onFinish = (values) => {
    console.log("submit form", values);
    console.log("Success:", values);
    saveHeaderDesign();
    uploadToStorage(values.upload.file);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const props = {
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
        if(fileList.length === 0) {
          setBgImgInfo({
            imgUrl: "",
            detail: "",
            imgName: "",
          })
        }
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: bgImgInfo.imgName,
        status: 'done',
        url: bgImgInfo.imgUrl,
      },
    ],
  };

  const normFile = (file) => {
    console.log("file", file)
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBgImgInfo({
        imgUrl: URL.createObjectURL(file),
        detail: file,
        imgName: file.name,
      })
    }

    return false;

  };

  const handleSelectColor = (e) => {
    console.log("color", e.target.value);
    handleSetActiveColor(e.target.value);
  };


  const saveHeaderDesign = () => {
    //do sth
    headerBgColorSave();
    handleCloseForm();
  }


  return (
    <Form
      className="edit-header-wrapper container"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={10}>
          <div className="edit-header-left">
            <h3 className="text-30">Header photo</h3>
            <p className="text-16 mb-16">
              Photo will scale to fit, but we recommend at least 1280px×200px,
              JPG, PNG or GIF format, 5 MB max file size
            </p>
            <Form.Item
              name="upload"
              // valuePropName="fileList"
              // getValueFromEvent={normFile}
            >
              <Upload
                className="upload-item"
                name="logo"
                maxCount={1}
                listType="picture"
                beforeUpload={normFile}
                {...props}
              >
                <CustomButton
                  type="button"
                  addedClass="header-edit-form-btn text-16"
                >
                  Choose photo
                </CustomButton>
              </Upload>
            </Form.Item>
          </div>
        </Col>
        <Col xs={24} lg={10}>
          <div className="edit-header-right">
            <h3 className="text-30">Header background color</h3>
            <p className="text-16 mb-16">
              Select a custom color or use one of our suggested options
            </p>
            <Space className="colors-section">
              <input
                name="header-bg-color-input"
                type="color"
                className="f-center"
                value="#67C771"
                onChange={handleSelectColor}
              />
              <h2 className="my-0 mx-8 secondary semi-bold">OR</h2>
              <Space>
                {bgColors.map((color, index) => {
                  return (
                    <div
                      className={`color-box ${
                        color === colorActive ? "active" : ""
                      }`}
                      onClick={() => handleSetActiveColor(color)}
                      style={{ background: `${color}` }}
                      key={index}
                    ></div>
                  );
                })}
              </Space>
            </Space>
          </div>
        </Col>
        <Col xs={24} lg={4}>
            <Space direction="vertical" size="middle" className="a-end" style={{ display: 'inline-flex' }}>
              <Form.Item>
                <CustomButton
                    type="submit"
                    addedClass="header-edit-form-btn text-16"
                    // onClick={saveHeaderDesign}
                    >
                    Save header design
                </CustomButton>
            </Form.Item>
                <CustomButton
                    type="button"
                    addedClass="header-edit-form-btn cancel text-16"
                    onClick={() => {
                      headerBgCancel();
                      handleCloseForm();
                    }}
                    >
                    Cancel
                </CustomButton>
            </Space>
        </Col>
      </Row>
    </Form>
  );
};

export default EditHeaderForm;
