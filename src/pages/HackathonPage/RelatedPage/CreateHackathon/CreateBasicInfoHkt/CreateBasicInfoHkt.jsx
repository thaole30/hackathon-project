import React from "react";
import { Form, Input, Space, Radio, DatePicker } from "antd";
import { showMessage } from "../../../../../utils/showMessage";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../../components/CustomButton/CustomButton";
import moment from "moment";
import { useDispatch } from "react-redux";
import { createHktDraft } from "../../../../../redux/hackathonSlice";
import { nanoid } from "nanoid";
import { createHackathonApi } from "../../../../../api/hackathon";

const CreateBasicInfoHkt = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  function onChange(date, dateString) {
    console.log(date, dateString);
  //   form.setFieldsValue({
  //     ["startDate"]: dateString,
  // });
  }

  
  const createNewHackathon = async (data) => {
    const {data: newHackathon} = await createHackathonApi(data);
    console.log("newHackathon", newHackathon);
    // dispatch(createHktDraft(newHackathon));
    navigate(`/hackathon/manage/${newHackathon._id}/edit`);
    showMessage("success", "hkt draft created successfully");

  }


  const onFinish = (values) => {
    console.log("Success values", values);

    // console.log("string date", moment(values.startDate).format("MM/DD/YYYY"))
 
    // const hackathonId = nanoid();
    createNewHackathon({...values, startDate: moment(values.startDate).format("MM/DD/YYYY")});
   
  };

  const onFinishFailed = () => {};

  return (
    <div className="create-basic-info-hkt">
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
          name="name"
          label={<p className="text-20 bold">Hackathon Name</p>}
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          {/* <p className="text-gray text-16 mb-8">You can change this later:</p> */}
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="startDate"
          label={
            <p className="text-20 bold">
              When does your hackathon submission period begin?
            </p>
          }
          rules={[
            {
              required: true,
              message: "Can't be blank!",
            },
          ]}
        >
          {/* <p className="text-gray text-16 mb-8">
            (This is the expected day participants will start building.)
          </p> */}
          <DatePicker
            className="datepicker-hkt"
            // onChange={onChange}
            placeholder="mm/dd/yyyy"
            onChange={onChange}
            // defaultValue={moment("01/10/2015", "MM/DD/YYYY")}
            format={"MM/DD/YYYY"}
          />
        </Form.Item>

        <div className="mt-16">
          <CustomButton
            type="submit"
            name="orange"
            size="small"
            addedClass="secondary bold no-border"
            // onClick={saveHeaderDesign}
          >
            Create my draft Hackathon
          </CustomButton>
        </div>
      </Form>
    </div>
  );
};

export default CreateBasicInfoHkt;
