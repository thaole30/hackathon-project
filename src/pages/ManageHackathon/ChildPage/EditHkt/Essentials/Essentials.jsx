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
import { hosts, tags } from './../../../../HackathonPage/data/data';
import { locations } from "../../../../SettingPage/data";
import CustomButton from "../../../../../components/CustomButton/CustomButton";
import MyDivider from "../../../../../components/MyDivider/MyDivider";
import { NavLink } from "react-router-dom";
import MyModal from "../../../../../components/MyModal/MyModal";


const { Option } = Select;


const Essentials = ({hackathonId, hackathonDetail}) => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [form] = Form.useForm();

  function handleSelectHost(value) {
    console.log("value select month", value);
  }

  function handleSelectLocationAdress(value) {
    console.log("value select month", value);
  }

  function onChangeThemeTags(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  const onChangeHktType = (e) => {
    console.log("radio checked", e.target.value);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinishRequestOrganizationForm = (values) => {
    console.log("Success:", values);
  };

  const onFailedRequestOrganizationForm = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="essentials">
      <h2 className="text-24 mb-24 bold">Essentials</h2>
      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          ["name"]: hackathonDetail ? hackathonDetail.title : "",
          ["url"]: hackathonDetail ? hackathonDetail.title?.split(' ').join('') : "",
        }}
      >
        <Form.Item
          name="name"
          label={<p className="text-20 bold">Name</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          {/* <p className="text-14 text-gray">Enter the name of your hackathon. Make it distinctive and memorable! Less is more.</p> */}
          <Input size="large" />
        </Form.Item>
          <Form.Item
            name="url"
            label={<p className="text-20 bold">URL</p>}
            rules={[
              {
                required: true,
                message: "Can't be blank!",
              },
            ]}
          >
            <p className="text-14 text-gray">Enter the name of your hackathon. Make it distinctive and memorable! Less is more.</p> 
             <Space>
              <Input size="large" addonAfter=".crowdhack.io"/>
              <Button type="primary" size="large">Check availability</Button> 
             </Space> 
          </Form.Item>
          
          <Form.Item
          name="tagline"
          label={<p className="text-20 bold">Tagline</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          <p className="text-14 text-gray">Create a short tagline to describe your hackathon.</p>
          <Input size="large" placeholder="e.g. Create apps and games that enhance math teaching and learning for our middle schools."/>
        </Form.Item>

        <Form.Item
          name="manager-contact"
          label={<p className="text-20 bold">Manager contact email (displayed on site)</p>}
          rules={[
              {
                type: "url",
                message: "must be a valid URL",
              },
          ]}
        >            
          {/* <p className="text-14 text-gray">Who can participants contact if they have a question about your hackathon? This email address will be public and displayed on site like this.</p> */}
          <Input size="large" placeholder="manager@hackathon.com" />
          </Form.Item>

          <Form.Item
            name="host"
            label={<p className="text-20 bold">Host</p>}
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
                placeholder="Search to Select"
                onSelect={handleSelectHost}
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
                {hosts.map((host) => (
                  <Option key={host} value={host}>
                    {host}
                  </Option>
                ))}
              </Select>
           
          </Form.Item>

          <p className="info text-16 mb-16 cursor"
              onClick={() => {
                setIsOpenModal(true);
              }}
          >Request New Organization</p>

          <Form.Item
            name="theme-tags"
            label={
              <p className="text-20 bold">
                Theme Tags?
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
              onChange={onChangeThemeTags}
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

          <p className="info text-16 mb-16">Request New Theme Tag</p>

          <Form.Item
            name="hkt-type"
            label={<p className="text-20 bold">What type of hackathon is this?</p>}
          >
            <Radio.Group onChange={onChangeHktType}>
              <Radio value={"college-uni"}>College/ University</Radio>
              <Radio value={"high-school"}>High School</Radio>
              <Radio value={"civic"}>Civic</Radio>
              <Radio value={"private-sector"}>Private Sector</Radio>

            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="location-name"
            label={<p className="text-20 bold">Location name</p>}
            rules={[
              {
                required: true,
                message: "Can't be blank!",
              },
            ]}
          >
            {/* <p className="text-14 text-gray">Enter the name of your hackathon. Make it distinctive and memorable! Less is more.</p> */}
            <Input size="large" placeholder="e.g., University of Pennsylvania – Towne Building"/>
          </Form.Item>

          <Form.Item
            name="host"
            label={<p className="text-20 bold">Host</p>}
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
                placeholder="Search to Select"
                onSelect={handleSelectLocationAdress}
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
                {locations.map((host) => (
                  <Option key={host} value={host}>
                    {host}
                  </Option>
                ))}
              </Select>
           
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
      <MyModal
        addedClass="request-new-organization-modal"
        isOpenModal={isOpenModal}
        titleModal={
          <h2 className="text30 black text-center m-0">
            Request a new organization hosting
          </h2>
        }
        onCloseModal={() => setIsOpenModal(false)}
      >
       <Form
          layout="vertical"
          form={form}
          // initialValues={{ remember: true }}
          id="request-organization-form"
          onFinish={onFinishRequestOrganizationForm}
          onFinishFailed={onFailedRequestOrganizationForm}
          autoComplete="off"
          initialValues={{}}
        >
            <Form.Item
                name="prizeName"
                label={<p className="text-14 bold">New Organization</p>}
                rules={[
                  {
                    required: true,
                    message: "Can't be blank!",
                  },
                ]}
              >
                <Input size="large" />
            </Form.Item>
            <Form.Item>
                <div className="f-end">
                <CustomButton
                  type="submit"
                  name="orange"
                  size="small"
                >
                  Submit
                </CustomButton>
                </div>
            </Form.Item>
        </Form>
      </MyModal>
    </div>
  );
};

export default Essentials;
