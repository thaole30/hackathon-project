import React from "react";
import DemoEditor from "./DemoEditor";
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
import { NavLink } from "react-router-dom";

const HackathonSite = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="hackathon-site">
      <h2 className="text-24 mb-24 bold">Eligibility Requirements</h2>
      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{}}
      >
        <Form.Item
          name="main-description"
          label={<p className="text-14 bold">Main Description</p>}
        >
          <p className="text-12 text-gray mb-16">
            Describe your hackathon and what makes it special. Many hackathons
            include their event schedules here too.
          </p>
          <NavLink to="/help">
            <div className="f a-center mb-16">
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00008 17.3337C4.39758 17.3337 0.666748 13.6028 0.666748 9.00033C0.666748 4.39783 4.39758 0.666992 9.00008 0.666992C13.6026 0.666992 17.3334 4.39783 17.3334 9.00033C17.3334 13.6028 13.6026 17.3337 9.00008 17.3337ZM8.16675 11.5003V13.167H9.83342V11.5003H8.16675ZM9.83342 10.1295C10.5031 9.92764 11.0781 9.49195 11.4535 8.90178C11.829 8.3116 11.98 7.6062 11.879 6.91405C11.7781 6.22189 11.4318 5.58903 10.9034 5.13071C10.375 4.67239 9.69956 4.41911 9.00008 4.41699C8.32579 4.41694 7.6723 4.65045 7.15074 5.07782C6.62918 5.50519 6.27176 6.10002 6.13925 6.76116L7.77425 7.08866C7.82065 6.85652 7.93201 6.64233 8.09539 6.47101C8.25876 6.29969 8.46743 6.17828 8.6971 6.12091C8.92678 6.06355 9.16802 6.07258 9.39277 6.14697C9.61751 6.22135 9.81651 6.35802 9.96661 6.54109C10.1167 6.72415 10.2117 6.94607 10.2407 7.18103C10.2696 7.41599 10.2311 7.65433 10.1299 7.86831C10.0286 8.0823 9.8687 8.26313 9.66869 8.38977C9.46867 8.51641 9.23681 8.58364 9.00008 8.58366C8.77907 8.58366 8.56711 8.67146 8.41083 8.82774C8.25455 8.98402 8.16675 9.19598 8.16675 9.41699V10.667H9.83342V10.1295Z"
                    fill="#579CF8"
                  ></path>
                </svg>
              </div>
              <i>Tips for pasting from Microsoft Word</i>
            </div>
          </NavLink>
          <DemoEditor />
        </Form.Item>

        <Form.Item name="video" label={<p className="text-14 bold">Video</p>}>
          <p className="text-12 text-gray mb-16">
            Do you have a promotional or explainer video for your hackathon? If
            so, include a YouTube or Vimeo link here. Make sure embedding is
            enabled.
          </p>
          <Space>
            <Input size="large" style={{ width: "400px" }} />
            <Button type="primary" size="large">
              Preview
            </Button>
          </Space>
        </Form.Item>

        <Form.Item
          name="main-description"
          label={<p className="text-14 bold">Rules</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          <p className="text-12 text-gray mb-16">
            You should consult a lawyer before finalizing the rules for your
            hackathon. Here are some rules suggestions you may find useful. If
            you're running an in-person hackathon, you must include a code of
            conduct as well.
          </p>
          <NavLink to="/help">
            <div className="f a-center mb-16">
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00008 17.3337C4.39758 17.3337 0.666748 13.6028 0.666748 9.00033C0.666748 4.39783 4.39758 0.666992 9.00008 0.666992C13.6026 0.666992 17.3334 4.39783 17.3334 9.00033C17.3334 13.6028 13.6026 17.3337 9.00008 17.3337ZM8.16675 11.5003V13.167H9.83342V11.5003H8.16675ZM9.83342 10.1295C10.5031 9.92764 11.0781 9.49195 11.4535 8.90178C11.829 8.3116 11.98 7.6062 11.879 6.91405C11.7781 6.22189 11.4318 5.58903 10.9034 5.13071C10.375 4.67239 9.69956 4.41911 9.00008 4.41699C8.32579 4.41694 7.6723 4.65045 7.15074 5.07782C6.62918 5.50519 6.27176 6.10002 6.13925 6.76116L7.77425 7.08866C7.82065 6.85652 7.93201 6.64233 8.09539 6.47101C8.25876 6.29969 8.46743 6.17828 8.6971 6.12091C8.92678 6.06355 9.16802 6.07258 9.39277 6.14697C9.61751 6.22135 9.81651 6.35802 9.96661 6.54109C10.1167 6.72415 10.2117 6.94607 10.2407 7.18103C10.2696 7.41599 10.2311 7.65433 10.1299 7.86831C10.0286 8.0823 9.8687 8.26313 9.66869 8.38977C9.46867 8.51641 9.23681 8.58364 9.00008 8.58366C8.77907 8.58366 8.56711 8.67146 8.41083 8.82774C8.25455 8.98402 8.16675 9.19598 8.16675 9.41699V10.667H9.83342V10.1295Z"
                    fill="#579CF8"
                  ></path>
                </svg>
              </div>
              <i>Tips for pasting from Microsoft Word</i>
            </div>
          </NavLink>
          <DemoEditor />
        </Form.Item>

        <div className="f-column">
          <p className="semi-bold secondary">Sponsors / Promotional partners</p>
          <i className="text-12 my-8">
            Sponsors will appear on your hackathon's homepage in the right
            sidebar.
          </i>
          <div className="mt-16">
           <Space>
              <Button type="primary" size="large">Add sponsor logo</Button>
              <Button style={{border: "none", boxShadow: "none"}} className="info add-section-btn" size="large">Add section divider/label</Button>
           </Space>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default HackathonSite;
