import React from 'react'
import { Layout, Menu, Button, Calendar, Typography, Space, Avatar, Badge, Select, Row, Col } from 'antd'
import { IoPerson } from 'react-icons/io5';
import localeRu from './calendareLocaleRu';

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
      width: '460px',
      margin: '5px 5px 5px 0px',
      borderRadius: '0px 20px 20px 0px',
      background: 'var(--rightside-background-color)',
      overflowY: 'auto',
    }}>
      <div>
        <Title level={3} style={{ color: 'var(--primary-color)', fontWeight: '800' }}>{`${new Date().getDate()}, ${new Date().getFullYear()} `}</Title>
        <Calendar
          fullscreen={false}
          mode='month'
          // locale={localeRu}
          cellRender={(value) => {
            if ([10, 25, 1, 28, 29].includes(value.date())) {
              return (
                <Badge status={'success'} text={''} />
              )
            }
          }}
          headerRender={({ value, type, onChange, onTypeChange }) => {

            const start = 0;
            const end = 12;
            const monthOptions = [];

            let current = value.clone();
            const localeData = value.localeData();
            const months = [];
            for (let i = 0; i < 12; i++) {
              current = current.month(i);
              months.push(localeData.monthsShort(current));
            }
            const month = value.month();

            for (let i = start; i < end; i++) {
              monthOptions.push(
                <Select.Option key={i} value={i} className="month-item">
                  {months[i]}
                </Select.Option>,
              );
            }

            return (
              <div style={{ padding: 8 }}>
                <Row gutter={8}>

                  <Col>
                    <Select
                      size="small"
                      dropdownMatchSelectWidth={false}
                      value={month}
                      onChange={(newMonth) => {
                        const now = value.clone().month(newMonth);
                        onChange(now);
                      }}
                    >
                      {monthOptions}
                    </Select>
                  </Col>
                </Row>
              </div>
            );
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