import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { connectAppContext } from '../../contexts/appContext/appContext';
import { closeDrawer, openDrawer } from '../../contexts/appContext/appActions';

const AntdDrawer = ({children, title, isOpenDrawer, onClose}) => {
//   const [visible, setVisible] = useState(false);



  return (
      <Drawer title={title} placement="right" onClose={onClose} visible={isOpenDrawer}>
        {children}
      </Drawer>
  );
};

export default (AntdDrawer);














