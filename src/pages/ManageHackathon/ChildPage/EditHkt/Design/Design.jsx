import React, { useState } from 'react'
import HktHeaderLogo from './HktHeaderLogo/HktHeaderLogo'
import ThumbnailImage from './ThumbnailImage/ThumbnailImage'
import {
  Form,
  Input,
  Button,
  Space,
  Upload,
  Row,
  Col,
  Radio,
  Select,
  Checkbox,
  DatePicker,
} from "antd";
import { bgColors } from '../../../../PortfolioPage/PortfolioHeader/data';
import CustomButton from '../../../../../components/CustomButton/CustomButton';
import MyDivider from './../../../../../components/MyDivider/MyDivider';

const Design = () => {
  const [form] = Form.useForm();

  const [colorActive, setColorActive] = useState("rgb(103, 199, 113)");

  const onChangeBgImgPosition = (e) => {
    console.log("radio checked", e.target.value);
  };

  const onChangeLogoAlignment = (e) => {
    console.log("radio checked", e.target.value);
  };

  const handleSelectColor = (e) => {
    console.log("color", e.target.value);
    setColorActive(e.target.value);
  };

  const handleSetActiveColor = (color) => {
    console.log("color", color);
    setColorActive(color);
  }

  
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div className="design">
      <h2 className="text-24 mb-24 bold">Design</h2>
      <p className="semi-bold secondary">Thumbnail image</p>
      <p className="text-12 mb-24">Upload one image to be used as a square thumbnail image for your hackathon. View example. This image will be used to represent your hackathon in places such as the Hackathon  hackathons page. The image must be a JPG, GIF or PNG file, up to 5 MB. For best results crop to 300x300 pixels.</p>

      <div className="thumbnail-upload">
        <ThumbnailImage/>
      </div>

      <div className="hackathon-header-logo">
        <p className="semi-bold secondary">Hackathon header title – logo image (include the name of your hackathon)</p>
        <p className="text-12 mb-24">Upload one image to be used in the header banner section of your hackathon. The image must be a JPG, GIF, or PNG file up to 5 MB, with a maximum size of 1170px × 156px. Upload a transparent PNG or GIF if you want the background color to show.</p>
        <HktHeaderLogo/>
      </div>

      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          ["bgImgPosition"]: "scale-entire",
          ["logo-alignment"]: "center-aligned",
        }}
      >
        <Form.Item
            name="logo-alignment"
            label={<p className="text-20 bold">Logo image alignment</p>}
          >
            <Radio.Group onChange={onChangeLogoAlignment}>
              <Space direction="vertical">
                <Radio value={"center-aligned"}>center aligned</Radio>
                <Radio value={"left-aligned"}>left aligned</Radio>
              </Space>
            </Radio.Group>
        </Form.Item>
        <Form.Item
            name="bgImgPosition"
            label={<p className="text-20 bold">Background image positioning</p>}
          >
            <Radio.Group onChange={onChangeBgImgPosition}>
            <Space direction="vertical">
              <Radio value={"centered-no-repeat"}>centered, no repeat</Radio>
              <Radio value={"repeat-all-directions"}>repeat in all directions</Radio>
              <Radio value={"repeat-horizontally"}>repeat horizontally</Radio>
              <Radio value={"scale-entire"}>scale to fill entire header area</Radio>
            </Space>

            </Radio.Group>
      </Form.Item>

      <h2 className="text-24 bold mb-8">OR</h2>

      <Form.Item
            name="header-text-color"
            label={<p className="text-12 mb-24">If a logo image is not used, the name of your hackathon will appear as text. Select a custom text color or use one of our suggested options.</p>}
          >

          <Space className="colors-section">
            <input
              name="header-bg-color-input"
              type="color"
              className="f-center"
              defaultValue="#67C771"
              onChange={handleSelectColor}
            />
            <h2 className="my-0 mx-8 secondary text-14 semi-bold">OR</h2>
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
      </Form.Item>

      <MyDivider addedClass="design-divider"/>


      <div className="hackathon-header-background-image">
        <p className="semi-bold secondary">Hackathon header - background image</p>
        <p className="text-12 mb-24">Upload one image (JPG, GIF, or PNG file up to 5 MB) to be used as the background image in the header section of your hackathon. For best results, use a height of 246px and a width of at least 2000px.</p>
        <HktHeaderLogo/>
      </div>



      <div className="mt-32">
        <CustomButton
          type="submit"
          name="orange"
          size="small"
          addedClass="hkt-edit-form-submit bold"
          // onClick={saveHeaderDesign}
        >
          Save Details & Next Step
        </CustomButton>
      </div>

      </Form>
    </div>
  )
}

export default Design