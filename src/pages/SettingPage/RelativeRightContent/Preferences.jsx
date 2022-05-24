import React from "react";
import MyDivider from "../../../components/MyDivider/MyDivider";
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
import { jobs, locations, months, personalInfo, studentLevels } from "../data";
import { languages } from "../../EditProject/data";
import { tags } from "../../HackathonPage/data/data";
import Demo from "./../../../demo/Demo";
import moment from "moment";
import CustomButton from "../../../components/CustomButton/CustomButton";

const { Option } = Select;
const plainOptions = ["Apple", "Pear", "Orange"];

const Preferences = () => {
  const [form] = Form.useForm();

  function onChangeSpecialty(e) {
    console.log(`radio checked:${e.target.value}`);
  }

  function handleChangeTag(value) {
    console.log(`selected arr`, value);
  }

  function handleSelectTag(value) {
    console.log("value select tag", value);
  }

  function onChangeInterests(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  function onChangeInterest(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  function handleSelectLocation(value) {
    console.log("value select location", value);
  }

  const onChangeOccupation = (e) => {
    console.log("radio checked", e.target.value);
  };

  function onChangeStudentCurrentLevel(e) {
    console.log(`radio checked:${e.target.value}`);
  }

  function handleSelectGraduationMonth(value) {
    console.log("value select month", value);
  }
  function handleSelecBirthtMonth(value) {
    console.log("value select month", value);
  }

  function onChangGraduationeYear(date, dateString) {
    console.log(date, dateString);
  }
  function onChangeBirthYear(date, dateString) {
    console.log(date, dateString);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = () => {};

  return (
    <div className="preferences">
      <h2 className="text-36 m-0">Preferences & eligibility</h2>
      <p className="text-16 secondary">
        This information helps us match you with hackathons and potential
        teammates.
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
          ["specialty"]: personalInfo.specialty,
          ["interests"]: personalInfo.interests,
          ["skills"]: personalInfo.skills,
          ["location"]: personalInfo.location,
          ["occupation"]: personalInfo.occupation,
          ["currentStudentLevel"]: personalInfo.currentStudentLevel,
          ["graduationMonth"]: personalInfo.graduationMonth,
          ["graduationYear"]: moment(personalInfo.graduationYear, "YYYY"),
          ["birthMonth"]: moment(personalInfo.birthDay, "MM"),
          ["birthYear"]: moment(personalInfo.birthDay, "YYYY"),
        }}
      >
        <h2 className="bold text-24">Preferences</h2>
        <Form.Item
          name="specialty"
          label={<p className="text-20 bold">What's your specialty?</p>}
        >
          <Radio.Group
            onChange={onChangeSpecialty}
            // defaultValue={personalInfo.specialty}
          >
            <Space className="f-wrap">
              {jobs.map((job) => (
                <Radio.Button className="job-radio-btn" key={job} value={job}>
                  {job}
                </Radio.Button>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="skills"
          label={<p className="text-20 bold">What are your skills?</p>}
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <Select
            mode="multiple"
            size="large"
            allowClear
            style={{ width: "100%" }}
            placeholder="Search by keyword to add tag"
            // defaultValue={personalInfo.skills}
            onChange={handleChangeTag}
            onSelect={handleSelectTag}
          >
            {languages.map((item, index) => {
              return <Option key={item}>{item}</Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="interests"
          label={
            <p className="text-20 bold">
              What types of hackathons are you interested in?
            </p>
          }
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <Checkbox.Group
            // defaultValue={['Web']}
            style={{ width: "100%" }}
            onChange={onChangeInterest}
          >
            <Row gutter={[8, 8]}>
              {tags.map((item) => (
                <Col key={item} span={8}>
                  <Checkbox value={item}>{item}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <h2>Eligibility</h2>
        <Form.Item
          name="location"
          label={<p className="text-20 bold">Location</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          <Select
            allowClear
            style={{ width: "100%" }}
            onSelect={handleSelectLocation}
            size="large"
          >
            {locations.map((item, index) => {
              return <Option key={item}>{item}</Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="occupation"
          label={<p className="text-20 bold">What's your specialty?</p>}
        >
          <Radio.Group onChange={onChangeOccupation}>
            <Radio value={"student"}>Student</Radio>
            <Radio value={"post-grad"}>Professional / Post Grad</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="currentStudentLevel"
          label={<p className="text-20 bold">What's your specialty?</p>}
        >
          <Radio.Group
            onChange={onChangeStudentCurrentLevel}
            // defaultValue={personalInfo.specialty}
          >
            <Space className="f-wrap">
              {studentLevels.map((level) => (
                <Radio.Button
                  className="level-radio-btn"
                  key={level}
                  value={level.toLowerCase()}
                >
                  {level}
                </Radio.Button>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>

        {/* <Form.Item
          name="schoolName"
          label={<p className="text-20 bold">School Name</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            }
          ]}
        >
           <Select
            allowClear
            style={{ width: '100%' }}
            onSelect={handleSelectLocation}
            size="large"
          >
            {
              locations.map((item, index) => {
                return <Option key={item}>{item}</Option>
              })
            }
          </Select>
        </Form.Item> */}

        {/* <Demo/> */}

        <Row gutter={[20, 20]}>
          <Col xs={24} lg={12}>
            <Form.Item
              name="graduationMonth"
              label={<p className="text-20 bold">Graduation month</p>}
              rules={[
                {
                  required: true,
                  message: "Can't be blank!",
                },
              ]}
            >
              <Select
                showSearch
                size="large"
                style={{ width: "100%" }}
                placeholder="Search to Select"
                onSelect={handleSelectGraduationMonth}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                {months.map((month) => (
                  <Option key={month} value={month}>
                    {month}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              name="graduationYear"
              label={<p className="text-20 bold">Graduation Year</p>}
              rules={[
                {
                  required: true,
                  message: "Can't be blank!",
                },
              ]}
            >
              <DatePicker
                onChange={onChangGraduationeYear}
                picker="year"
                size="large"
                style={{ width: "100%" }}
                //  defaultValue={moment('2015/01/01', 'YYYY')}
              />
            </Form.Item>
          </Col>
        </Row>


        <Form.Item
          name="birthDay"
          label={<p className="text-20 bold">Birth month</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          <Row gutter={[20, 20]}>
            <Col xs={24} lg={12}>
              <Select
                showSearch
                size="large"
                style={{ width: "100%" }}
                placeholder="Search to Select"
                onSelect={handleSelecBirthtMonth}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                {months.map((month) => (
                  <Option key={month} value={month}>
                    {month}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col xs={24} lg={12}>
              <DatePicker
                onChange={onChangeBirthYear}
                picker="year"
                size="large"
                style={{ width: "100%" }}
                //  defaultValue={moment('2015/01/01', 'YYYY')}
              />
            </Col>
          </Row>
        </Form.Item>

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

export default Preferences;
