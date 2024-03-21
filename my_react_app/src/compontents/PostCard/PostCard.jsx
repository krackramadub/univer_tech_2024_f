import React, { useEffect, useState } from 'react'
import { Card, Flex, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa6'
import card_img from '../../assets/images/card_images/3974104.jpg'

const { Title, Text } = Typography;

export const PostCard = ({ postData }) => {

  const [isReadMoreText, setIsReadMoreText] = useState(false)
  useEffect(() => {
    if (postData && postData?.body && postData.body.length > 100) {
      setIsReadMoreText(true)
    }
  }, [postData])

  // #5856b3
  return (
    <Card hoverable style={{ borderRadius: '24px' }} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
      <Flex justify='space-between' style={{ padding: '0px 20px' }} gap={'25px'}>
        <div>
          <img
            alt="avatar"

            src={card_img}
            style={{
              width: '180px',
              height: '100%',
              objectFit: 'fill',
            }}
          />

        </div>
        <div style={{ width: '250px', padding: '12px 5px' }}>
          <Title level={3}>{postData.title.slice(0, 20)}</Title>
          <Text>{postData.body.slice(0, 100)}...</Text>
          {isReadMoreText && <Link>Читать далее</Link>}
        </div>
        <Flex align="end" style={{ padding: '20px' }}>
          <div style={{
            background: 'var(--primary-color)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Link style={{ color: '#fff',}}><FaChevronRight size={20} /></Link>
          </div>
        </Flex>
      </Flex>
    </Card>
  )
}
