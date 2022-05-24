import React from "react";
import { Form, Input, Button, Space, Select, Row, Col } from "antd";
import { MinusCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { actions } from "./data";

const { Option } = Select;

const AdditionalActionsList = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Form.Item>
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div className="relative" key={key}>
                <Row gutter={16}>
                  <Col span={6}>
                    <Form.Item
                      {...restField}
                      name="action"
                      label={<p className="text-14 bold">Action</p>}
                      rules={[
                        {
                          required: true,
                          message: "Can't be blank!",
                        },
                      ]}
                    >
                      <Select className="action-select" size="large"  onChange={handleChange} placeholder="Select an action">
                        {actions.map((action) => (
                          <Option key={action} value={action}>
                            {action}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      name="label"
                      label={<p className="text-14 bold">Label</p>}
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
                  <Col span={10}>
                    <Form.Item
                     {...restField}
                      name="url"
                      label={
                        <p className="text-14 bold">
                          URL
                        </p>
                      }
                      rules={[
                        {
                          required: true,
                          type: "url",
                          message: "must be a valid URL",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="manager@hackathon.com" />
                    </Form.Item>
                  </Col>
                </Row>

                <CloseCircleOutlined
                  style={{ color: "red", right: "0", top: "10px" }}
                  className="absolute"
                  onClick={() => remove(name)}
                />
              </div>
            ))}
            <Form.Item className="f">
              <Button
                style={{ border: "none", boxShadow: "none" }}
                className="info add-section-btn"
                size="large"
                onClick={() => add()}
              >
                Add task
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form.Item>
  );
};

export default AdditionalActionsList;
