import React, { useContext } from 'react'
import { MyStore } from '../../store/Context'

export const Header = () => {

  const store = useContext(MyStore)

  console.log('store', store)

  return (
    <div style={{ border: '1px solid #333', height: '40px', position: 'fixed', width: '100%', background: '#fff' }}>Header</div>
  )
}
