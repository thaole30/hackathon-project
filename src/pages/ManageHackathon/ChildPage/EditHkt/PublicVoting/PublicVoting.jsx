import React from 'react'
import CustomButton from '../../../../../components/CustomButton/CustomButton'
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

const { Option } = Select;


const PublicVoting = () => {

  const [form] = Form.useForm();

  function handleChangePublicVoting(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div class="public-voting">
      <h2 className="text-24 mb-24 bold">Public Voting</h2>

      <p className="text-12 mb-24">Public voting allows logged-in users to vote for their favorite projects. Voting is “+1” style where people can vote for as many projects as they like, but only once for each project. It’s a great way of encouraging hackers to share their projects. Consider using this with a Popular Choice prize.</p>
      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          ["enable-voting"]: "on",

        }}
      >
        <Form.Item
          name="enable-voting"
          label={<p className="text-14 bold">Enable Public Voting</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
            <Select
              className="public-voting-select text-center"
              size="large"
              style={{ width: "100px"}}
              onChange={handleChangePublicVoting}
              placeholder="Select an action"
            >
             <Option value="on">
                  ON
              </Option>
             <Option value="off">
                  OFF
              </Option>
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
    </div>
  )
}

export default PublicVoting