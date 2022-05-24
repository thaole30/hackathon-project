import React, {useState} from "react";
import MyDivider from "../../../components/MyDivider/MyDivider";
import { Form, Input, Button, Space, Upload, Row, Col } from "antd";
import CustomButton from "./../../../components/CustomButton/CustomButton";
import Demo from "./Demo";
import { useSelector } from "react-redux";

const ProfileInfo = () => {

  const { userInfo } = useSelector((state) => state.user);


  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };


  const normFile = (e) => {
    console.log('Upload event:', e);
    console.log("e.fileList", e.fileList);
  
    // if (Array.isArray(e)) {
    //   return e;
    // }
  
    // return e && e.fileList;
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="profile-info">
      <h2 className="text-36 m-0">Profile info</h2>
      <p className="text-16 secondary">
        This information will appear on your public Hackathon profile.
      </p>
      <MyDivider />
      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
            ["firstName"]: userInfo.firstName,
            ["lastName"]: userInfo.lastName,
        }}
      >
        {/* <Form.Item
          name="avatar"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          label={<p className="text-20 bold">Photo</p>}
        >
           <Upload
                fileList={fileList}
                onChange={onChange}
            >
                {fileList.length < 5 && '+ Upload'}
            </Upload>
        </Form.Item> */}

        <Row gutter={[20, 20]}>
            <Col xs={24} lg={12}>
                <Form.Item
                  name="firstName"
                  label={<p className="text-20 bold">First name</p>}
                  rules={[
                    {
                      required: true,
                      message: "Can't be blank!",
                    }
                  ]}
                >
                  <Input size="large"/>
                </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
                <Form.Item
                  name="lastName"
                  label={<p className="text-20 bold">Last name</p>}
                  rules={[
                    {
                      required: true,
                      message: "Can't be blank!",
                    },
                  ]}
                >
                  <Input size="large"/>
                </Form.Item>
            </Col>
        </Row>

        <Form.Item
            name="bio"
            label={<p className="text-20 bold">Bio</p>}
            
        >
            <Input size="large"/>
        </Form.Item>

        <h2 className="text-36 m-0">Social</h2>

        <Row gutter={[20, 20]}>
            <Col xs={24} lg={12}>
                <Form.Item
                    name="github"
                    label={<p className="text-20 bold">GitHub</p>}
                    
                >
                    <Input addonBefore="@" size="large" />
                </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
                <Form.Item
                name="linkedIn"
                label={<p className="text-20 bold">LinkedIn</p>}
                rules={[
                    {
                      type: "url",
                      message: "must be a valid URL",
                    },
                ]}
            >            
                <Input size="large" placeholder="e.g., https://www.linkedin.com/in/yourname" />
                </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
                <Form.Item
                    name="twitter"
                    label={<p className="text-20 bold">Twitter</p>}
                    
                >
                    <Input addonBefore="@" size="large" />
                </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
                <Form.Item
                name="website"
                label={<p className="text-20 bold">Website</p>}
                rules={[
                    {
                      type: "url",
                      message: "must be a valid URL",
                    },
                ]}
            >            
                <Input size="large" placeholder="e.g., https://www.example.com" />
                </Form.Item>
            </Col>
        </Row>

        
        
        <Form.Item>
          <Space>
            <CustomButton
              type="submit"
              name="orange"
              size="small"
              addedClass="white"
              // onClick={saveHeaderDesign}
            >
              Save changes
            </CustomButton>
            <CustomButton
              type="button"
              name="outlined"
              size="small"
              addedClass="info cancel-profile-btn"
              // onClick={saveHeaderDesign}
            >
              Cancel
            </CustomButton>
          </Space>
        </Form.Item>
      </Form>
      {/* <Demo/> */}

    </div>
  );
};

export default ProfileInfo;
