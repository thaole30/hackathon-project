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
} from "antd";
import { NavLink } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import AdditionalActionsList from './AdditionalActionsList';
import CustomButton from '../../../../../components/CustomButton/CustomButton';

const Todos = () => {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="todos">
      <h2 className="text-24 mb-24 bold">To-Dos</h2>
      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{}}
      >

        <Form.Item name="video" label={<p className="text-14 bold">Community chat</p>}>
            <p className="text-12 text-gray mb-16">
              f the hackathon has a Slack, Discord chat or Facebook group add the the join link, this will be made available to registered participants.
            </p>
            <Input size="large" placeholder="Slack or Discord invitation link or Facebook group URL"/>
        </Form.Item>

        <AdditionalActionsList/>
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

export default Todos