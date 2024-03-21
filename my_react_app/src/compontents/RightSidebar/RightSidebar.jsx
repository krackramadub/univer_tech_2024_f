import React from 'react'
import { Layout, Menu, Button, Calendar, Typography, Space, Avatar, Badge } from 'antd'
import { IoPerson } from 'react-icons/io5';

const { Title, Text } = Typography;

const RightSidebar = () => {


  const usersOnline = [
    { id: Math.ceil(Math.random() * 10000), name: 'Maren Maureen', avatar: '' },
    { id: Math.ceil(Math.random() * 10000), name: 'Test user 2', avatar: '' },
    { id: Math.ceil(Math.random() * 10000), name: 'Test user 3', avatar: '' },
    { id: Math.ceil(Math.random() * 10000), name: 'Test user 4', avatar: '' },
  ]

  return (
    <div style={{
      padding: '40px',
      width: '360px',
      margin: '5px 5px 5px 0px',
      borderRadius: '0px 20px 20px 0px',
      background: 'var(--rightside-background-color)'
    }}>
      <div>
        <Title level={3} style={{ color: 'var(--primary-color)', fontWeight: '800' }}>{`${new Date().getDate()}, ${new Date().getFullYear()} `}</Title>
        <Calendar
          fullscreen={false}
          cellRender={(value) => {
            if ([10, 25, 1, 28, 29].includes(value.date())) {
              return (
                <Badge status={'success'} text={''} />
              )
            }
          }}
        ></Calendar>
      </div>

      <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3} style={{ color: 'var(--primary-color)', fontWeight: '800' }}> Users online</Title>
          <Button type='link' style={{ color: 'var(--primary-color)', fontWeight: '400', fontSize: '18px' }}> See all</Button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {usersOnline.map((user, index) => {
            return <div style={{ display: 'flex', gap: '6px' }}>
              <Avatar size={50} icon={<IoPerson />} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{ fontSize: '18px' }}>{user.name}</Text>
                <Text>{user.id}</Text>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default RightSidebar