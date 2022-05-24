import React, { useState } from 'react';
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
import CustomButton from "../../../../../components/CustomButton/CustomButton";
import MyDivider from "../../../../../components/MyDivider/MyDivider";
import { NavLink } from "react-router-dom";
import { locations } from '../../../../SettingPage/data';

const { Option } = Select;



const Eligibility = ({hackathonId}) => {
  const [form] = Form.useForm();

  const [hktCommunity, setHktCommunity] = useState("public");
  const [participantOccupation, setParticipantOccupation] = useState("all-occupations");
  const [geographicRestrictions, setGeographicRestrictions] = useState("all-countries")
  const [teamRequirements, setTeamRequirements] = useState(false);
  console.log("teamRequirements", teamRequirements);

  const onChangeHktCommunity = (e) => {
    console.log("radio checked", e.target.value);
    setHktCommunity(e.target.value)
  };
  const onChangeParticipantOccupation = (e) => {
    console.log("radio checked", e.target.value);
    setParticipantOccupation(e.target.value);
  };

  const handleChangeCheckbox = (name) => {
    return (e) => {
      console.log(name, e.target.checked);
      switch (name) {
        case "teamRequirements": {
          setTeamRequirements(e.target.checked);
          break;
        }
          
      
        default:
          break;
      }
    };
  };

  const onChangeCompanyRequirements = (e) => {
    console.log("radio checked", e.target.value);
  };

  const onChangeGeographicRestrictions = (e) => {
    console.log("radio checked", e.target.value);
    setGeographicRestrictions(e.target.value);
  };

  function handleSelectGeoRestrictionsOnlySpecificCountries(value) {
    console.log("value select location", value);
  }

  const onChangeTeamSizes = (e) => {
    console.log("radio checked", e.target.value);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="eligibility">
      <h2 className="text-24 mb-24 bold">Eligibility Requirements</h2>
      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          ["hktCommunity"]: hktCommunity,
          ["participantOccupation"]: participantOccupation,
          ["studentType"]: "all-students",
          ["companyRequirements"]: "not-required",
          ["geographicRestrictions"]: "all-countries",
          ["studentType"]: "all-students",
          ["team-sizes"]: "all-sizes"

        }}
      >
      <Form.Item
          name="hktCommunity"
          label={<p className="text-20 bold">Hackathon Community</p>}
        >
          <Radio.Group onChange={onChangeHktCommunity}>
          <Space direction="vertical">
            <Radio value={"public"}>Public</Radio>
            <Radio value={"invite-only"}>Invite Only</Radio>
          </Space>

          </Radio.Group>
      </Form.Item>

      {
        hktCommunity === "invite-only" && (
          <Form.Item
            name="participant"
            label={<p className="text-20 bold">Who can participate</p>}
            rules={[
              {
                required: true,
                message: "Can't be blank!",
              }
            ]}
          >
            <Input style={{width: '300px'}} size="large"/>
          </Form.Item>
        )
      }

      <Form.Item
          name="participantOccupation"
          label={<p className="text-20 bold">Participant Occupation</p>}
        >
          <Radio.Group onChange={onChangeParticipantOccupation}>
          <Space direction="vertical">
            <Radio value={"all-occupations"}>All occupations</Radio>
            <Radio value={"students-only"}>Students only</Radio>
            {
              participantOccupation === "students-only" && (
              <Form.Item
                name="studentType"
                style={{marginLeft:"50px"}}
              >
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value={"all-students"}>All students</Radio>
                    <Radio value={"college-only"}>College only</Radio>
                    <Radio value={"highschool-only"}>High school only</Radio>
                    <Radio value={"middleschool-only"}>Middle school only</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
              )
            }
            <Radio value={"post-grads-only"}>Professionals/Post grads only</Radio>
          </Space>
          </Radio.Group>
      </Form.Item>

      <Form.Item 
        name="teamRequirements"
        label={<p className="text-20 bold">Team Requirements</p>}
        
      >
        <Checkbox
          onChange={handleChangeCheckbox("teamRequirements")}
        >
          Team required
        </Checkbox>

        {
          teamRequirements && (
            <Form.Item
              name="team-sizes"
              style={{marginLeft:"50px"}}
            >
              <Radio.Group onChange={onChangeTeamSizes}>
                <Space direction="vertical">
                  <Radio value={"all-sizes"} defaultChecked={true}	>All team sizes</Radio>
                  <Radio value={"company-required"}>Company required</Radio>
                </Space>
              </Radio.Group>
          </Form.Item>
          )
        }

      </Form.Item>

      <Form.Item
          name="companyRequirements"
          label={<p className="text-20 bold">Company Requirements</p>}
        >
          <Radio.Group onChange={onChangeCompanyRequirements}>
            <Space direction="vertical">
              <Radio value={"not-required"}>Company not required</Radio>
              <Radio value={"required"}>Company required</Radio>
              <Radio value={"excluded"}>Companies excluded from participation</Radio>
            </Space>
          </Radio.Group>
      </Form.Item>

      <Form.Item
          name="geographicRestrictions"
          label={<p className="text-20 bold">Geographic Restrictions</p>}
        >
          <Radio.Group onChange={onChangeGeographicRestrictions}>
            <Space direction="vertical">
              <Radio value={"all-countries"}>All countries/territories, excluding standard exceptions</Radio>
              <Radio value={"us-only"}>US only</Radio>
              <Radio value={"only-specific-countries"}>Only specific countries/territories included</Radio>
              {
                geographicRestrictions === "only-specific-countries" && (
                  <Form.Item
                    name="geoRestrictions-only-specific-countries"
                    rules={[
                      {
                        required: true,
                        message: "Can't be blank!",
                      },
                    ]}
                  >
                    <Select
                      allowClear
                      style={{ width: "400px" }}
                      onSelect={handleSelectGeoRestrictionsOnlySpecificCountries}
                      size="large"
                      placeholder="Please select specific countries/territories"
                    >
                      {locations.map((item, index) => {
                        return <Option key={item}>{item}</Option>;
                      })}
                    </Select>
                  </Form.Item>
                )
              }
              <Radio value={"specific-countries"}>Specific countries/territories exclude</Radio>
              {
                geographicRestrictions === "specific-countries" && (
                  <Form.Item
                    name="geoRestrictions-only-specific-countries"
                    rules={[
                      {
                        required: true,
                        message: "Can't be blank!",
                      },
                    ]}
                  >
                    <Select
                      allowClear
                      style={{ width: "400px" }}
                      onSelect={handleSelectGeoRestrictionsOnlySpecificCountries}
                      size="large"
                      placeholder="Please select specific countries/territories"
                    >
                      {locations.map((item, index) => {
                        return <Option key={item}>{item}</Option>;
                      })}
                    </Select>
                  </Form.Item>
                )
              }
            </Space>
          </Radio.Group>
      </Form.Item>


      <Form.Item
        label={<p className="text-20 bold">Additional Eligibility Requirements</p>}
      >
        <p className="text-gray text-14">Please describe any additional participant eligibility requirements in your hackathon <NavLink to={`/hackathon/manage/${hackathonId}/edit?form=hackathon-site`}>Rules</NavLink>.</p>
      </Form.Item>

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
  )
}

export default Eligibility