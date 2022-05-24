import { Form, Input, Space } from "antd";
import React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import MyDivider from "../../../components/MyDivider/MyDivider";

const Password = () => {

  const [form] = Form.useForm();

  const handleChangeCheckbox = (name) => {
    return (e) => {
      console.log(name, e.target.checked);
    };
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = () => {};

  return (
    <div className="password-section">
     <h2 className="text-36 m-0">Profile info</h2>
      <p className="text-16 secondary">
        Passwords must be 8+ characters.
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
          // ["username"]: userInfo.name,
          // ["email"]: userInfo.email,
        }}
      >
        <Form.Item
              name="oldPassword"
              label={<p className="text-16 bold">Old Password</p>}
              rules={[
                {
                  required: true,
                  message: "Can't be blank!",
                },
                {
                  validator(_, value) {
                    if (value.length >= 8) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Must be 8+ characters.');
                  },
                },
              ]}
            >
              <Input size="large"/>
        </Form.Item>

        <Form.Item
              name="newPassword"
              label={<p className="text-16 bold">New Password</p>}
              rules={[
                {
                  required: true,
                  message: "Can't be blank!",
                },
                ({getFieldValue}) => ({
                  validator(_, value) {
                      if (getFieldValue('newPassword').length < 8) {
                          return Promise.reject("Must be 8+ characters.");
                      }
                      return Promise.resolve();
                  },
              }),
              ]}
            >
              <Input size="large"/>
        </Form.Item>

        <Form.Item
              name="confirmPassword"
              label={<p className="text-16 bold">Confirm</p>}
              dependencies={['newPassword']}
              rules={[
                {
                  required: true,
                  message: "Can't be blank!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The confirm passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input size="large"/>
        </Form.Item>

      </Form>

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
              style={{borderRadius: "4px"}}
              // onClick={saveHeaderDesign}
            >
              Cancel
            </CustomButton>
          </Space>
      </Form.Item>

    </div>
  );
};

export default Password;
