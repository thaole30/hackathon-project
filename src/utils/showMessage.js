import { message  } from 'antd';

export const showMessage = (type, text) => {
    message[type](text);
}