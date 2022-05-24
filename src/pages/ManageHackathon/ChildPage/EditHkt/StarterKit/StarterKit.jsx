import React from 'react';
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
  Switch,
} from "antd";
import DemoEditor from '../HackathonSite/DemoEditor';
import CustomButton from '../../../../../components/CustomButton/CustomButton';

const StarterKit = () => {

  const [form] = Form.useForm();

  function onChangeSwitch(checked) {
    console.log(`switch to ${checked}`);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div className="starter-kit">
      <h2 className="text-24 mb-24 bold">Starter Kit</h2>
      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{

        }}
      >
        <Form.Item
            name="subject"
            label={<p className="text-14 bold">Subject</p>}
            rules={[
              {
                required: true,
                message: "Can't be blank!",
              },
            ]}
          >
            <p className="text-14 text-gray mb-16">This is the subject line of an email that will go to all registrants upon registration, if enabled. It will automatically include the name of the hackathon, so there's no need to add that here.</p>
            <Input size="large" />
        </Form.Item>


      <Form.Item
            name="manager-contact "
            label={<p className="text-14 bold">Reply-to: example@gmail.com</p>}
            rules={[
              {
                required: true,
                message: "Can't be blank!",
              },
            ]}
          >
            <p className="text-14 text-gray mb-16">
            Change this by updating the 'Manager contact email' on the Essentials tab</p>
      </Form.Item>

      <Form.Item
          name="content"
          label={<p className="text-14 bold">Content</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
        
          <DemoEditor />
        </Form.Item>

        <Form.Item
          name="will-receive-email"
        
        >
        <Space>
          <Switch onChange={onChangeSwitch} />
          <i class="mx-8 info">Participants will not receive this email on registration</i>
        </Space>
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

export default StarterKit