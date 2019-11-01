import React from 'react';

const theme = {
    dark: {
        background: '#282c34'
    },
    light: {
        background: 'darkolivegreen'
    }
};

// 默认使用黑色风格主题
const Theme = React.createContext(theme.dark);

export default Theme;