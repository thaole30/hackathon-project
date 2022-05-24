import { Checkbox, Form, Space } from "antd";
import React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import MyDivider from "./../../../components/MyDivider/MyDivider";

const Email = () => {
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
    <div className="email-section">
      <h2 className="text-36 m-0">Email notifications</h2>
      <MyDivider />

      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          ["newsletter"]: true,
        }}
      >
        <h3 className="text-20">Newsletter & Alerts</h3>
        <Form.Item name="newsletter">
          <Checkbox
            onChange={handleChangeCheckbox("newsletter")}
            defaultChecked={true}
          >
            email to notify me of new online hackathons based on my interests
          </Checkbox>
        </Form.Item>

        <h3 className="text-20">Hackathon updates</h3>
        <p className="text-16 bold">
          Email me updates from hackathons I'm registered for:
        </p>

        <h3 className="text-20">Global Hackathon updates</h3>
        <p className="text-14 secondary mb-24 light">
          email me about hackathons I’m registered for:
        </p>
        <Form.Item name="newsletter">
          <Checkbox
            onChange={handleChangeCheckbox("reminderSubmit")}
            defaultChecked={true}
          >
            reminders to submit
          </Checkbox>
        </Form.Item>

        <h3 className="text-20">Social notifications</h3>
        <Form.Item name="socialNoti">
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Checkbox
              onChange={handleChangeCheckbox("registerHkt")}
              defaultChecked={true}
            >
              someone I follow registers for a hackathon
            </Checkbox>
            <Checkbox
              onChange={handleChangeCheckbox("publishProject")}
              defaultChecked={true}
            >
              someone I follow publishes a software project
            </Checkbox>
            <Checkbox
              onChange={handleChangeCheckbox("updateProject")}
              defaultChecked={true}
            >
              someone posts an update on a project I liked
            </Checkbox>
            <Checkbox
              onChange={handleChangeCheckbox("followMe")}
              defaultChecked={true}
            >
              someone follows me
            </Checkbox>
            <Checkbox
              onChange={handleChangeCheckbox("acceptMyFollow")}
              defaultChecked={true}
            >
              someone accepts my follow request
            </Checkbox>
            <Checkbox
              onChange={handleChangeCheckbox("likeMyProject")}
              defaultChecked={true}
            >
              someone likes one of my projects
            </Checkbox>
            <Checkbox
              onChange={handleChangeCheckbox("forgetDescribe")}
              defaultChecked={true}
            >
              I forget to describe my contribution on a project
            </Checkbox>
          </Space>
        </Form.Item>

        <h3 className="text-20">Unsubscribe from all</h3>
        <Checkbox
          onChange={handleChangeCheckbox("unsubscribe")}
          defaultChecked={false}
        >
          Unsubscribe from all subscribed emails. You may be notified of updates
          if you register to a new hackathon.
        </Checkbox>

        <div className="mt-16">
          <CustomButton
                type="submit"
                name="orange"
                size="small"
                addedClass="white"
                // onClick={saveHeaderDesign}
              >
                Save 
          </CustomButton>
        </div>

      </Form>
    </div>
  );
};

export default Email;
