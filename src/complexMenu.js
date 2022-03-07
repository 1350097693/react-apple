import React from 'react';
import { SmileOutlined, CrownOutlined, TabletOutlined, AntDesignOutlined } from '@ant-design/icons';
import DiffToHtml from './demo/DiffToHtml'

export default {
    route: {
        path: '/',
        routes: [
            {
                path: '/welcome',
                name: '欢迎',
                icon: <SmileOutlined />,
                component: './Welcome',
            },
            {
                path: '/DiffToHtml',
                name: 'DiffToHtml',
                icon: <CrownOutlined />,
                component: <DiffToHtml/>,
            },
            {
                name: '列表页',
                icon: <TabletOutlined />,
                path: '/list',
                component: './ListTableList',
                routes: [
                    {
                        path: '/list/sub-page',
                        name: '一级列表页面',
                        icon: <CrownOutlined />,
                        routes: [
                            {
                                path: 'sub-sub-page1',
                                name: '一一级列表页面',
                                icon: <CrownOutlined />,
                                component: './Welcome',
                            },
                            {
                                path: 'sub-sub-page2',
                                name: '一二级列表页面',
                                icon: <CrownOutlined />,
                                component: './Welcome',
                            },
                            {
                                path: 'sub-sub-page3',
                                name: '一三级列表页面',
                                icon: <CrownOutlined />,
                                component: './Welcome',
                            },
                        ],
                    },
                    {
                        path: '/list/sub-page2',
                        name: '二级列表页面',
                        icon: <CrownOutlined />,
                        component: './Welcome',
                    },
                    {
                        path: '/list/sub-page3',
                        name: '三级列表页面',
                        icon: <CrownOutlined />,
                        component: './Welcome',
                    },
                ],
            },
            {
                path: 'https://ant.design',
                name: 'Ant Design 官网外链',
                icon: <AntDesignOutlined />,
            },
        ],
    },
    location: {
        pathname: '/',
    },
};