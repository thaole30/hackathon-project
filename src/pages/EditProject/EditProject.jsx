import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Row, Col, Form, Input, Select, Space, Avatar, Button } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import "./EditProject.scss";
import { showMessage } from "../../utils/showMessage";
import { languages } from "./data";
import { useSelector } from "react-redux";
import { categories } from "../ProjectPage/data/data";
import Thumbnail from "./Thumbnail";
import { getProjectApi, updateProjectApi } from "../../api/project";
import CustomButton from "../../components/CustomButton/CustomButton";
import { uploadFile } from "../../api/upload";
import { useMutation, useQuery, useQueryClient } from "react-query";


const { TextArea } = Input;
const { Option } = Select;

const EditProject = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [projectInfo, setProjectInfo] = useState(false);
  // console.log("projectInfo", projectInfo);

  const [thumbUploadFile, setThumbUploadFile] = useState({});
  // console.log("thumbUploadFile", thumbUploadFile);


  const [form] = Form.useForm();

  const { projectId } = useParams();
  console.log("projectId", projectId);
  const { state } = useLocation();
  // const { projectName } = state;
  // console.log("projectName", projectName);

  const onChangeTextArea = (e) => {
    console.log("Change:", e.target.value);
  };

  const handleChangeSelect = (value) => {
    console.log(`selected ${value}`);
  };

  const getInfoProject = async (projectId) => {
    // console.log("go to getInfooooooooooo", projectId);
    return getProjectApi(projectId)
      .then((res) => {
        const project  = res.data;
        console.log("go to getInfooooooooooo data", project);
        setProjectInfo(project);
        form.setFieldsValue({
          ["name"]: project.name,
          ["desc"]: project.desc,
          ["about"]: project.about,
          ["action"]: project.action,
          ["demoLink"]: project.demoLink,
          ["tags"]: project.tags,
      });
        // form.setFieldsValue("lastName", data.lastName);

        return project;
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  useEffect(() => {
    getInfoProject(projectId);
  }, [projectId])

  const updateProjectInfo = async (dataForm) => {
    try {
      const {data: uploadImgLink} = await uploadFile(thumbUploadFile);
      console.log("uploadImgLink", uploadImgLink);
      dataForm.img = uploadImgLink;
      console.log("dataForm", dataForm);
      
      const updatedProject = await updateProjectApi(projectId,dataForm)
      getInfoProject();
      showMessage("success", "Update project success!");
      
      return updatedProject;
      
    } catch (error) {
      showMessage("error", "Update project failed!");
      console.log("project updated error", error);
    }
  }


  const mutationUpdateProject = useMutation(updateProjectInfo, {
    // onSuccess: () => {
    //   queryClient.invalidateQueries("get-profile");
    // },
  });

  const onFinish = (values) => {
    // console.log("Success:", values);
    // showMessage("success", "Submit success!");
    mutationUpdateProject.mutate(values);

  };

  const onFinishFailed = () => {
    showMessage("error", "Submit failed!");
  };


  return (
    <div className="edit-project">
      <div className="container">
        <div className="edit-project-content">
          <h1 className="text-36 bold">Edit your project</h1>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{
              ["name"]: projectInfo?.name,
          }}
          >
            <Row gutter={[20, 20]}>
              <Col xs={24} lg={16}>
                <Form.Item
                  name="name"
                  label={
                    <p className="text-20 bold">What's your project called?</p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your project name",
                    },
                  ]}
                >
                  <TextArea
                    showCount
                    maxLength={60}
                    style={{ height: 40 }}
                    onChange={onChangeTextArea}
                  />
                </Form.Item>

                <Form.Item
                  name="desc"
                  label={
                    <p className="text-20 bold">Here's the elevator pitch</p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Can't be blank!",
                    },
                  ]}
                >
                  {/* <p className="secondary text-16 mb-16">
                    What's your idea? This will be a short tagline for the
                    project
                  </p> */}
                  <TextArea
                    showCount
                    maxLength={200}
                    style={{ height: 160 }}
                    onChange={onChangeTextArea}
                  />
                </Form.Item>

                <Form.Item
                  name="tags"
                  label={<p className="text-20 bold">Built with</p>}
                  rules={[
                    {
                      required: true,
                      message: "Can't be blank!",
                    },
                  ]}
                >
                  {/* <p className="secondary text-16 mb-16">
                    What languages, frameworks, platforms, cloud services,
                    databases, APIs, or other technologies did you use?
                  </p> */}
                  <Select
                    mode="multiple"
                    size="large"
                    placeholder="Please select a language"
                    onChange={handleChangeSelect}
                  >
                    {languages.map((language) => (
                      <Option value={language.toLowerCase()} key={language}>
                        {language}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <div className="creator mb-32">
                  <h2>Created by</h2>
                  <Space>
                    <Avatar src={userInfo.img} />
                    <NavLink
                      className="ml-16 text-20"
                      to={`/portfolio/${userInfo.name}`}
                    >
                      {userInfo.name}
                    </NavLink>
                  </Space>
                </div>

                <Form.Item
                  name="about"
                  label={<p className="text-20 bold">About the project</p>}
                  rules={[
                    {
                      required: true,
                      message: "Can't be blank!",
                    },
                  ]}
                >
                  {/* <p className="secondary text-16 mb-16">
                    Be sure to write what inspired you, what you learned, how
                    you built your project, and the challenges you faced. Format
                    your story in Markdown
                  </p> */}
                  <TextArea
                    style={{ height: "auto", minHeight: "250px" }}
                    defaultValue="
                    ## Inspiration

                    ## What it does
                    
                    ## How I built it
                    
                    ## Challenges I ran into
                    
                    ## Accomplishments that I'm proud of
                    
                    ## What I learned
                    
                    ## What's next
                    
                    "
                    onChange={onChangeTextArea}
                  />
                </Form.Item>

                {/* <Form.Item
                  name="url"
                  label={<p className="text-20 bold">"Try it out" links</p>}
                  rules={[
                    {
                      required: true,
                      message: "Can't be blank!",
                    },
                    {
                        type: 'url',
                        warningOnly: true,
                    },
                  ]}
                >
                  <p className="secondary text-16 mb-16">
                    Add links where people can try your project or see your code.
                  </p>
                  <Input placeholder="URL for demo site, app store listing, GitHub repo, etc." />
                  <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: '60%' }}
                    >
                        Add field
                </Button>
                </Form.Item> */}

                <Form.List name="urls">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Space
                          className="url-space"
                          key={key}
                          style={{ display: "flex", marginBottom: 8 }}
                          align="baseline"
                        >
                          <Form.Item
                            {...restField}
                            name={[name, "first"]}
                            rules={[
                              { required: true, message: "Can't be blank!" },
                              {
                                type: "url",
                                warningOnly: true,
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              placeholder="URL for demo site, app store listing, GitHub repo, etc."
                            />
                          </Form.Item>

                          <Button
                            size="large"
                            icon={<DeleteFilled />}
                            onClick={() => remove(name)}
                          />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button
                          type="link"
                          onClick={() => add()}
                          icon={<PlusOutlined />}
                        >
                          ADD ANOTHER LINK
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

                {/* <Form.Item
                  name="demoLink"
                  label={<p className="text-20 bold">Video demo link</p>}
                  rules={[
                    {
                        required: true,
                      },
                    {
                      type: "url",
                    },
                  ]}
                >
                  <p className="secondary text-16 mb-16">
                  This video will be embedded at the top of your project page. Read more about uploading videos.
                  </p>
                   <Input
                    size="large"
                    placeholder="YouTube or Vimeo URL"
                    />
                </Form.Item> */}

                <Form.Item
                  name="demoLink"
                  label={<p className="text-20 bold">Video demo link</p>}
                  rules={[
                    {
                      required: true,
                    },
                    {
                      type: "url",
                      message: "must be a valid YouTube, Vimeo URL",
                    },
                  ]}
                >
                  {/* <p className="secondary text-16 mb-16">
                    This video will be embedded at the top of your project page.
                    Read more about uploading videos.
                  </p> */}
                  <Input size="large" placeholder="YouTube or Vimeo URL" />
                </Form.Item>

                <Form.Item
                  name="action"
                  label={<p className="text-20 bold">Go-To Actions</p>}
                  rules={[
                    {
                      required: true,
                      message: "Can't be blank!",
                    },
                  ]}
                >
                  {/* <p className="secondary text-16 mb-16">
                  Please select those Go-To Actions that are applicable for your project, and we will help you connect with interested parties.
                  </p> */}
                  <Select
                    size="large"
                    placeholder="Please select"
                    onChange={handleChangeSelect}
                  >
                    {categories.map((category) => (
                      <Option value={category.desc.toLowerCase()} key={category.desc}>
                        {category.desc}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} lg={8}>
                <Thumbnail projectInfo={projectInfo} setUploadFile={setThumbUploadFile}/>
              </Col>
            </Row>
            <div className="mt-16">
              <CustomButton
                type="submit"
                name="orange"
                size="small"
                addedClass="white"
                // onClick={saveHeaderDesign}
              >
                Save changes
              </CustomButton>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
