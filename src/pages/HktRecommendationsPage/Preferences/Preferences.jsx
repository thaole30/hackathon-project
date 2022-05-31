import React, { useState } from "react";
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
import { jobs, locations, months, schoolNames, studentLevels } from "../../SettingPage/data";
import { languages } from "../../EditProject/data";
import { tags } from "../../HackathonPage/data/data";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { showMessage } from "../../../utils/showMessage";
import moment from 'moment';
import { updateUserThunk } from "../../../redux/userSlice";
import { useDispatch } from "react-redux";

const { Option } = Select;

const Preferences = () => {
  const [occupation, setOccupation] = useState(1);

  
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    if(e.target.value == 0) {
      form.setFieldsValue("workInTechYear", "");
      form.setFieldsValue("workInTechMonth", "");
    } else {
      form.setFieldsValue("currentStudentLevel", "");
      form.setFieldsValue("schoolName", "");
      form.setFieldsValue("graduationMonth", "");
      form.setFieldsValue("graduationYear", "");
    }
    setOccupation(Number(e.target.value));
  };

  function handleSelecWorkInTech(value) {
    console.log("value work in Tech select month", value);
  }

  function onChangeWorkInTechYear(date, dateString) {
    console.log(date, dateString);
  }

  function handleSelecBirthtMonth(value) {
    console.log("value select month", value);
  }

  function onChangeStudentCurrentLevel(e) {
    console.log(`radio checked:${e.target.value}`);
  }

  function handleSelectGraduationMonth(value) {
    console.log("value select month", value);
  }

  function onChangGraduationeYear(date, dateString) {
    console.log("gradyear",moment(date).format("MM/DD/YYYY"));
    console.log(date, dateString);
  }
  function onChangeBirthYear(date, dateString) {
    console.log(date, dateString);
  }

  const onFinish = (values) => {
    // console.log("Success values", values);
    const convertedValues = {
      ...values,
      birthYear: moment(values.birthYear).format("MM/DD/YYYY").split("/")[2],
      graduationYear:values.graduationYear ? moment(values.graduationYear).format("MM/DD/YYYY").split("/")[2] : "",
      workInTechYear: values.workInTechYear ? moment(values.workInTechYear).format("MM/DD/YYYY").split("/")[2] : ""
    }

    console.log("convertedValues", convertedValues);
    dispatch(updateUserThunk(convertedValues));
    navigate('/');

  };

  const onFinishFailed = () => {};

  return (
    <div className="preferences">
      <div className="preferences">
        <Form
          layout="vertical"
          form={form}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={{
            ["occupation"]: 1,
            ["employedInTech"]: true,
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
            label={<p className="text-20 bold">Occupation?</p>}
          >
            <Radio.Group onChange={onChangeOccupation}>
              <Radio value={0}>Student</Radio>
              <Radio value={1}>Professional / Post Grad</Radio>
            </Radio.Group>
          </Form.Item>

          {occupation === 1 ? (
            <>
              <Form.Item
                name="employedInTech"
                label={
                  <p className="text-20 bold">
                    Are you currently employed in tech?
                  </p>
                }
              >
                <Radio.Group onChange={onChangeOccupation}>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              </Form.Item>

            <Space>
              <Form.Item
                name="workInTechMonth"
                label={
                  <p className="text-20 bold">I’ve worked in tech since</p>
                }
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
                    style={{ width: "300px" }}
                    // className="w-100"
                    placeholder="Search to Select"
                    onSelect={handleSelecWorkInTech}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
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
              <Form.Item
                    name="workInTechYear"
                    label={
                      <p className="text-20 bold">Worked Year</p>
                    }
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "Can't be blank!",
                    //   },
                    // ]}
                  >
                     
                    <DatePicker
                      onChange={onChangeWorkInTechYear}
                      picker="year"
                      size="large"
                      //  defaultValue={moment('2015/01/01', 'YYYY')}
                    />
                </Form.Item>
              </Space>
             
            </>
          ) : (
            <>
              <Form.Item
                name="currentStudentLevel"
                label={<p className="text-20 bold">Current student level</p>}
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

              <Form.Item
                name="schoolName"
                label={<p className="text-20 bold">School Name</p>}
                rules={[
                  {
                    required: true,
                    message: "Can't be blank!",
                  },
                ]}
              >
                {/* <Select
                  allowClear
                  style={{ width: "100%" }}
                  onSelect={handleSelectLocation}
                  size="large"
                >
                  {locations.map((item, index) => {
                    return <Option key={item}>{item}</Option>;
                  })}
                </Select> */}

                <Select
                    showSearch
                    size="large"
                    style={{ width: "100%" }}
                    placeholder="Search to Select"
                    onSelect={handleSelectGraduationMonth}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                  >
                    {schoolNames.map((school) => (
                      <Option key={school} value={school}>
                        {school}
                      </Option>
                    ))}
                  </Select>
              </Form.Item>

              <Space>
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
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
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
              </Space>
            </>
          )}

          <Form.Item
          >
          <Space>
            <Form.Item
                name="birthMonth"
                label={<p className="text-20 bold">Birth month</p>}
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
              <Select
                showSearch
                size="large"
                style={{ width: "300px" }}
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
          </Form.Item>
              
              <Form.Item
                name="birthYear"
                label={<p className="text-20 bold">Birth year</p>}
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <DatePicker
                  onChange={onChangeBirthYear}
                  picker="year"
                  size="large"
                  //  defaultValue={moment('2015/01/01', 'YYYY')}
                />
              </Form.Item>
            </Space>
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
    </div>
  );
};

export default Preferences;
