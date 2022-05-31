import React, {useState} from "react";
import MyDivider from "../../../../components/MyDivider/MyDivider";
import { Form, Input, Button, Space, Upload, Row, Col } from "antd";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import Demo from "../Demo";
import { useSelector } from "react-redux";
import HktHeaderLogo from '../../../ManageHackathon/ChildPage/EditHkt/Design/HktHeaderLogo/HktHeaderLogo';
import UploadPhoto from './UploadPhoto';
import "./ProfileInfo.scss";
import { uploadFile } from "../../../../api/upload";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUserApi, updateUserApi } from "../../../../api/auth";

const uploadImgFile = async (imgFile) => {
  const imgRes = await uploadFile(imgFile);
  return imgRes;
}

const ProfileInfo = () => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();


  const { userInfo } = useSelector((state) => state.user);
  const [uploadFile, setUploadFile] = useState({});

  const [editInfo, setEditInfo] = useState({

  });
  console.log("editInfo", editInfo);


  const getInfo = async () => {
    return getUserApi()
      .then((res) => {
        const { password, ...data } = res.data;
        setEditInfo({ ...editInfo, ...data });
        form.setFieldsValue({
          ["firstName"]: data.firstName,
          ["lastName"]: data.lastName,
      });
        // form.setFieldsValue("lastName", data.lastName);

        return { ...editInfo, ...data };
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  const { data, isSuccess } = useQuery("get-profile", getInfo, {
    initialData: {},
  });



  const handleChangeAvatar = (file) => {
    console.log("uploaded file", file);
    form.setFieldsValue("img", file);
    setUploadFile(file);
  }

  const updateInfo = async (dataForm) => {
    const {data: uploadImgLink} = await uploadImgFile(uploadFile);
    console.log("uploadImgLink", uploadImgLink);
    dataForm.img = uploadImgLink;

    return updateUserApi(dataForm)
  }

  const mutationUpdateUser = useMutation(updateInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-profile");
    },
  });


  const onFinish = (values) => {
    console.log("Success:", values);

    mutationUpdateUser.mutate(values);
    
    // const convertedValues = {
    //   ...values,
    //   "img": uploadFile,
    // }

    // console.log("convertedValues", convertedValues);

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
            ["firstName"]: editInfo?.firstName,
            ["lastName"]: editInfo?.lastName,
        }}
      >
        <Form.Item
          name="img"
          label={<p className="text-20 bold">Photo</p>}
        >
           <UploadPhoto userInfo={editInfo} handleChangeAvatar={handleChangeAvatar}/>
        </Form.Item>

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
