import { Form, Input, Checkbox, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../../components/CustomButton/CustomButton";
import IconButton from "../../../components/IconButton/IconButton";
import MyDivider from "../../../components/MyDivider/MyDivider";

const Account = () => {
  const { userInfo } = useSelector((state) => state.user);

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
    <div className="account-section">
      <h2 className="text-36 m-0">Account and privacy</h2>
      <MyDivider />

      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          ["username"]: userInfo.name,
          ["email"]: userInfo.email,
        }}
      >
        <h3 className="text-20">Account</h3>
        <Form.Item
          name="username"
          label={<p className="text-16 bold">Username</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          label={<p className="text-16 bold">Email</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <div className="mb-24">
          <h3 className="text-20 m-0">Social connect</h3>
          <div className="mb-24">
            Add your social network accounts to log in to Crowdhack easier
          </div>
          <IconButton
            addedClass="info"
            svgIcon={
              <svg
                width="16px"
                height="16px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="svg-inline--fa fa-github fa-w-16 mr-8"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            }
          >
            Disconect
          </IconButton>

          <h3 className="mt-16 mb-16 text-20">Privacy</h3>
          <Checkbox
            onChange={handleChangeCheckbox("privateAccount")}
            defaultChecked={true}
          >
            Private account
          </Checkbox>

          <h5 className="text-12 secondar light">
            By default, anyone can see your profile. You can make your account
            private so that you can approve who can follow you and only approved
            followers can:
          </h5>

          <ul className="mb-24 privacy-list">
            <li>see your full profile</li>
            <li>be notified about your activity on Hackathon </li>
            <li>see which hackathons you are attending</li>
            <li>see your name associated with your projects</li>
          </ul>

          <Checkbox
            onChange={handleChangeCheckbox("hideProfile")}
            className="text-gray"
          >
            Hide my profile from search engines.
          </Checkbox>
          <div className="secondary text-16 mt-16 mb-24">It could take some time to hide your portfolio from search results and it varies by search engine. Your portfolio will be hidden automatically if your account is private.</div>
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
      </Form>
    </div>
  );
};

export default Account;
