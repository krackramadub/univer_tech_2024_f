import React, { useEffect, useRef, useState } from 'react'


import { Outlet, useNavigate } from 'react-router-dom'

import { Layout } from 'antd'

import classes from './Layout.module.scss'

import { IoGrid, IoPerson, IoReader, IoSettings } from 'react-icons/io5';
import { GrTask } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import RightSidebar from '../RightSidebar/RightSidebar';
import NavigationSidebar from '../NavigationSidebar/NavigationSidebar';

export const PageLayout = ({ children }) => {


  const { Header, Content, Footer, Sider } = Layout;

  


  return (

    <Layout>
      {/* <Content> */}
      <Layout className={classes.layout_container} style={{ height: '100vh' }} >
        {/* <Sider theme='light' style={{ background: 'var(--primary-color)' }}> */}
        <NavigationSidebar />
        {/* </Sider> */}
        <Content className={classes.container} style={{ background: '#fff', borderRadius: '20px 0px 0px 20px', overflowY: 'auto', margin: '5px 0px' }}>
          <Outlet />
        </Content>

        <RightSidebar />
      </Layout>

    </Layout>
  )
}
