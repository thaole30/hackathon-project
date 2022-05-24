import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const MyModal = ({children, isOpenModal, titleModal, onCloseModal, addedClass}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      // setIsModalVisible(false);
      isOpenModal = false;
    };

  return (
      <>
    
      <Modal 
        title={titleModal} 
        visible={isOpenModal}
        // onOk={handleOk} 
        onCancel={onCloseModal}
        footer={null}
        className={addedClass}
       >
        {children}
      </Modal>
    </>
  )
}

export default MyModal