import React, { useState } from "react";
import CustomButton from "../../../../../components/CustomButton/CustomButton";
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
import { startHours } from "../Submissions/data";
import moment from "moment";
import HktHeaderLogo from "../Design/HktHeaderLogo/HktHeaderLogo";

const { Option } = Select;
const { TextArea } = Input;


const Judging = () => {
  const [form] = Form.useForm();

  const [isAddingJudge, setIsAddingJudge] = useState(false);
  const [isAddingCriteria, setIsAddingCriteria] = useState(false);

  const [judgingType, sestJudgingType] = useState("online");

  const onChangeTypeJudging = (e) => {
    console.log("radio checked", e.target.value);
    sestJudgingType(e.target.value);
  };

  function handleChangeStartHour(value) {
    console.log(`selected ${value}`);
  }

  const onChangeCriteriaDes = (e) => {
    console.log(e.target.value);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="judging">
      <h2 className="text-24 mb-24 bold">Judging</h2>

      <p className="text-12 mb-24">
        Crowdhack encourages you to have a diverse judging panel in order to
        select the best outcomes as well as to increase inclusion in tech.
        Please let us know if we can help.
      </p>
      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          ["judgingType"]: judgingType,
        }}
      >
        <Form.Item
          name="judgingType"
          label={<p className="text-20 bold">Company Requirements</p>}
        >
          <Radio.Group onChange={onChangeTypeJudging}>
            <Space direction="vertical">
              <Radio value={"online"}>
                ONLINE – Judges will log onto Hackathon to score each project.
                (This is the preferred method for online hackathons.)
              </Radio>
              <Radio value={"offline"}>
                OFFLINE – Judges will review projects via expo / demos /
                presentations. (This method is frequently used at hackathons)
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="start-end-day"
          label={<p className="text-16 bold">Judging Period (mm/dd/yyyy)</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          <p className="text-14 text-gray mb-16">
            MM/DD/YYYY format. All times are in (GMT-05:00) Central Time
          </p>
          <Form.Item>
            <Form.Item
              name="start-day"
              label={<p className="text-16 bold">Starts</p>}
            >
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
              label={<p className="text-16 bold">Ends</p>}
            >
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
          </Form.Item>
        </Form.Item>

        <div className="f-column">
          <p className="text-16 semi-bold secondary">
            <span className="error">* </span>Judges
          </p>
          <div className="text-14 my-8">
            Add your judges here and their name, title, and photo will be
            displayed on the hackathon site. (We won't display emails.)
          </div>
          <i className="text-14 error">must have at least one judge</i>

          {isAddingJudge && (
            <div className="judge-form-wrapper">
              <Form
                layout="vertical"
                form={form}
                // initialValues={{ remember: true }}
                id="judge-list-form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{}}
              >
                <Row gutter={[20, 20]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="fullName"
                      label={<p className="text-20 bold">Full Name</p>}
                      rules={[
                        {
                          required: true,
                          message: "Can't be blank!",
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="email-or-user"
                      label={
                        <p className="text-20 bold">
                          Email or Hackathon username
                        </p>
                      }
                      rules={[
                        {
                          required: true,
                          message: "Can't be blank!",
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="title-company"
                      label={<p className="text-20 bold">Title / Company</p>}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      name="photo"
                      label={<p className="text-20 bold">Photo</p>}
                    >
                      <HktHeaderLogo addedClass="judge-photo" />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item>
                      <div className="f-end">
                        <Space>
                          <Button type="primary">Save</Button>
                          <p>or</p>
                          <Button onClick={() => setIsAddingJudge(false)}>
                            Cancel
                          </Button>
                        </Space>
                      </div>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          )}

          <div className="mt-24">
            <Button
              type="primary"
              size="large"
              onClick={() => setIsAddingJudge(true)}
            >
              Add Another &nbsp; Judge
            </Button>
          </div>
        </div>

        <div className="f-column">
          <p className="text-16 semi-bold secondary">
            <span className="error">* </span>Criteria
          </p>
          <div className="text-14 my-8">
            Add criteria to help participants understand how they'll be judged.
          </div>
          <i className="text-14 error">must have at least one criteria</i>
          {
            isAddingCriteria && (
              <div className="criteria-form-wrapper">
                   <Form
                layout="vertical"
                form={form}
                // initialValues={{ remember: true }}
                id="criteria-list-form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{}}
              >
                <Row gutter={[20, 20]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="criteria-title"
                      label={<p className="text-20 bold">Criteria Title</p>}
                      rules={[
                        {
                          required: true,
                          message: "Can't be blank!",
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      name="criteria-description"
                    >
                      <TextArea rows={8} onChange={onChangeCriteriaDes}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item>
                      <div className="f-end">
                        <Space>
                          <Button type="primary">Save</Button>
                          <p>or</p>
                          <Button onClick={() => setIsAddingCriteria(false)}>
                            Cancel
                          </Button>
                        </Space>
                      </div>
                    </Form.Item>
                  </Col>
         
                </Row>
              </Form>
              </div>
            )
          }

          <div className="mt-24">
            <Button
                type="primary"
                size="large"
                onClick={() => setIsAddingCriteria(true)}
              >Add Another &nbsp;Criteria
            </Button>
          </div>
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

export default Judging;
