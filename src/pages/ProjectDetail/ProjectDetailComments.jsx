import React from "react";
import { Comment, Avatar, Space } from "antd";
import { NavLink } from "react-router-dom";
import { Form, Button, List, Input } from 'antd';
import moment from 'moment';
import {
    EditOutlined,
    DeleteOutlined
  } from '@ant-design/icons';
import IconButton from "../../components/IconButton/IconButton";

const { TextArea } = Input;

const MainComment = ({ children }) => (
  <Comment
    //   actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={
        <>
          <NavLink to="/">John</NavLink>
          <p>
            <i>Leave feedback in the comments!</i>
          </p>
        </>
      }
    avatar={
      <Avatar
        src="https://icdn.dantri.com.vn/thumb_w/640/2020/12/25/12-hot-boy-duoc-cu-dan-mang-yeu-men-nam-2020-docx-1608913577981.jpeg"
        alt="Han Solo"
      />
    }
    // content={<p>Main comment</p>}
  >
    {children}
  </Comment>
);

const SubComment1 = ({ children }) => (
  <Comment
    //   actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={
      <>
        <NavLink to="/">John</NavLink>
      </>
    }
    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
    content={<p>Sub comment 1</p>}
  >
    {children}
  </Comment>
);
const SubComment2 = () => (
  <Comment
    //   actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Maria</a>}
    avatar={
      <Avatar
        src="data:image/jpeg;base64,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"
        alt="Han Solo"
      />
    }
    content={<p>Sub comment 2</p>}
  ></Comment>
);

const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Post Comment
        </Button>
      </Form.Item>
    </>
  );
  

const ProjectDetailComments = () => {

    const [state, setState] = React.useState({
        comments: [],
        submitting: false,
        value: '',
      });
    
      const handleSubmit = () => {
        if (!state.value) {
          return;
        }
    
        setState({
          ...state,
          submitting: true,
        });
    
        setTimeout(() => {
          setState({
            submitting: false,
            value: '',
            comments: [
              ...state.comments,
              {
                author: 'Han Solo',
                avatar: 'https://joeschmoe.io/api/v1/random',
                content: <div className="f-between">
                    <Space>
                        <p>{state.value}</p>
                        <IconButton addedClass="edit-comment-btn">
                            <EditOutlined />
                        </IconButton>
                    </Space>
                    <Button icon={<DeleteOutlined />} size="large" />
                </div>,
                datetime: moment().fromNow(),
              },
            ],
          });
        }, 1000);
      };
    
      const handleChange = e => {
        setState({
          ...state,
          value: e.target.value,
        });
      };
    
  return (
    <div className="project-detail-comments-section">
      <MainComment>
        <SubComment1>
          <SubComment2 />
        </SubComment1>
        <SubComment1>
        </SubComment1>

        <>
      {state.comments.length > 0 && <CommentList comments={state.comments} />}
      <Comment
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={state.submitting}
            value={state.value}
          />
        }
      />
    </>
       
      </MainComment>
    </div>
  );
};

export default ProjectDetailComments;
