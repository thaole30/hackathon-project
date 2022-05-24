import React from "react";
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
import { startHours } from "./data";
import moment from "moment";
import DemoEditor from "../HackathonSite/DemoEditor";
import { NavLink } from "react-router-dom";
import CustomButton from "../../../../../components/CustomButton/CustomButton";

const { Option } = Select;
const mockHackathonDetail = {
  hktSubmissionDate: "11/15/2022",
  id: "ZZCD1HATPy45vgM_e87Mz",
  img: "https://crowdhack.io/static/media/bitcoin-banner.d314b6a6.png",
  title: "demo",
  type: "draft",
};

const Submissions = () => {
  const [form] = Form.useForm();

  function handleChangeStartHour(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="submissions">
      <h2 className="text-24 mb-24 bold">Submissions</h2>
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
          name="start-day"
          label={<p className="text-14 bold">Start of hacking period</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          <p className="text-14 text-gray mb-16">
            Event kickoff for in-person events.
          </p>
          <Space>
            <DatePicker
              size="large"
              className="datepicker-hkt"
              // onChange={onChange}
              placeholder="mm/dd/yyyy"
              defaultValue={moment("11/15/2022", "MM/DD/YYYY")}
              format={"MM/DD/YYYY"}
            />
            <Select
              className="action-select"
              defaultValue="12:30 PM"
              size="large"
              onChange={handleChangeStartHour}
              placeholder="Select an action"
            >
              {startHours.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Space>
        </Form.Item>

        <Form.Item
          name="start-day"
          label={<p className="text-14 bold">Deadline</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          <p className="text-14 text-gray mb-16">
            Hackers must submit their projects before this time
          </p>
          <Space>
            <DatePicker
              size="large"
              className="datepicker-hkt"
              // onChange={onChange}
              placeholder="mm/dd/yyyy"
              format={"MM/DD/YYYY"}
            />
            <Select
              className="action-select"
              defaultValue="10:00 AM"
              size="large"
              onChange={handleChangeStartHour}
              placeholder="Select an action"
            >
              {startHours.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Space>
        </Form.Item>

        <h2 className="text-24 mb-24">Customize submission form (optional)</h2>

        <Form.Item
          name="main-description"
          label={<p className="text-14 bold">Final Reminders</p>}
        >
          <p className="text-12 text-gray mb-16">
            Use this field to add any last-minute reminders about key submission
            requirements, etc. These reminders will be shown to submitters right
            before they submit.
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

        <div>
          <h4 class="text-16 bold">
            Custom registration questions
          </h4>
          <p className="text-14 text-gray mb-16">
            Add up to 2 custom registration questions that will appear on your
            Hackathon registration page. Answers to custom registration
            questions will appear on the Registrants Report.
          </p>
         
          <NavLink to="/help">
            <div className="f a-center mb-16">
              <div>
                <svg style={{display: 'block'}} width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1525 2.35467L8 0.833008L14.8475 2.35467C15.0326 2.39581 15.198 2.49881 15.3167 2.64668C15.4353 2.79454 15.5 2.97844 15.5 3.16801V11.4905C15.4999 12.3136 15.2967 13.124 14.9082 13.8497C14.5198 14.5754 13.9582 15.194 13.2733 15.6505L8 19.1663L2.72667 15.6505C2.04189 15.194 1.48038 14.5756 1.09196 13.85C0.70353 13.1245 0.500197 12.3143 0.5 11.4913V3.16801C0.500033 2.97844 0.564698 2.79454 0.683325 2.64668C0.801951 2.49881 0.967447 2.39581 1.1525 2.35467ZM2.16667 3.83634V11.4905C2.16668 12.0392 2.30215 12.5795 2.56105 13.0632C2.81996 13.547 3.19429 13.9594 3.65083 14.2638L8 17.1638L12.3492 14.2638C12.8056 13.9595 13.1799 13.5473 13.4388 13.0636C13.6977 12.58 13.8332 12.0399 13.8333 11.4913V3.83634L8 2.54134L2.16667 3.83634ZM8.83333 8.33301H11.3333L7.16667 14.1663V9.99967H4.66667L8.83333 4.16634V8.33301Z" fill="#579CF8"></path></svg>
              </div>
              <i>Tips for pasting from Microsoft Word</i>
            </div>
          </NavLink>
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
  );
};

export default Submissions;
