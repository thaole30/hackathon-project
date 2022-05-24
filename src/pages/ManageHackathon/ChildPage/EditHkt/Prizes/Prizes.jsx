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
  InputNumber,
} from "antd";
import { startHours } from "../Submissions/data";
import moment from "moment";
import HktHeaderLogo from "../Design/HktHeaderLogo/HktHeaderLogo";
import { prizeCurrencies } from "./data";
import { HighlightOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const Prizes = () => {
  const [isAddingPrize, setIsAddingPrize] = useState(false);

  const [form] = Form.useForm();

  function handleChangeWinnerAnnounceTime(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="prizes">
      <h2 className="text-24 mb-24 bold">Prizes</h2>
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
              onChange={handleChangeWinnerAnnounceTime}
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

        <div className="f-column mb-32">
          <p class="semi-bold text-16 secondary mb-8">
            Prizes <span class="error">* </span>
          </p>
          <div class="text-12 text-gray">
            Add each of your prizes here. At the end of the hackathon, you will
            assign each prize to a submission. Prizes can be monetary or
            non-monetary. If your prize includes cash, please include the cash
            amount in the “Description” field as well as in the “Cash value”
            field.
          </div>
          <i class="text-12 error">must have at least one prize</i>

          {isAddingPrize && (
            <div className="prize-form-wrapper">
              <Form
                layout="vertical"
                form={form}
                // initialValues={{ remember: true }}
                id="prize-list-form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{}}
              >
                <Row gutter={[20, 20]}>
                  <Col xs={24}>
                    <Form.Item
                      name="prizeName"
                      label={<p className="text-14 bold">Prize name</p>}
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
                      name="cash"
                      label={<p className="text-14 bold">Cash value</p>}
                      rules={[
                        {
                          required: true,
                          message: "Can't be blank!",
                        },
                      ]}
                    >
                      <InputNumber
                        size="large"
                        min={0}
                        defaultValue={0}
                        className="w-100"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      className="w-100"
                      name="prize-currency"
                      label={
                        <Space>
                          <Button type="primary" shape="circle" icon={<HighlightOutlined />} />
                          <p className="text-14 bold">Prize currency</p>
                        </Space>
                      }
                      rules={[
                        {
                          required: true,
                          message: "Can't be blank!",
                        },
                      ]}
                    >
                      <Select
                        className="prize-currency-select w-100"
                        size="large"
                        placeholder="Select"
                      >
                        {
                          prizeCurrencies.map((item) => {
                            return (
                              <Option value={item}>{item}</Option>
                            )
                          })
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      label={<p className="text-14 bold">Description</p>}
                      name="prize-description"
                    >
                      <p className="text-12 text-gray mb-8">Describe the details of your prize. If your prize is a cash prize, please also enter the cash value amount here.</p>
                      <TextArea rows={6}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                      <div>
                        <Space>
                          <Button type="primary">Save</Button>
                          <p>or</p>
                          <Button 
                          onClick={() => setIsAddingPrize(false)}
                          >
                            Cancel
                          </Button>
                        </Space>
                      </div>
                  </Col>
                </Row>
              </Form>
            </div>
          )}

        <div className="mt-24">
            <Button
              type="primary"
              size="large"
              onClick={() => setIsAddingPrize(true)}
            >
              Add prize
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Prizes;
