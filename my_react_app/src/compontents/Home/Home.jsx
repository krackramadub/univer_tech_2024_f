import React, { useEffect, useMemo, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { PostCard } from '../PostCard/PostCard'
import { useLazyGetAllPostsQuery } from '../../services/postService/postService'
import { Typography, Result, Select } from 'antd'
import { FaRegFaceSmileWink } from 'react-icons/fa6'
import { getFilterStructure } from '../../services/service'

const { Title } = Typography;

export const Home = () => {


  const [getPosts, { data: posts, isError, isSuccess, isLoading, error }] = useLazyGetAllPostsQuery()
  // console.log("🚀 ~ Home ~ posts:", posts.result)

  useEffect(() => {
    getPosts()
  }, [getPosts])


  const filterData = useMemo(() => {
    let filterStructure = getFilterStructure(posts?.result || [])
    return filterStructure
  }, [posts])


  const [weekFilter, setWeekFilter] = useState(null)
  console.log("🚀 ~ Home ~ weekFilter:", weekFilter)
  const [timeFilter, setTimeFilter] = useState(null)
  const [teacherFilter, setTeacherFilter] = useState(null)


  const filterSelectWeekNumber = (value) => setWeekFilter(value)
  const filterSelectTime = (value) => setTimeFilter(value)
  const filterSelectTeacher = (value) => setTeacherFilter(value)

  const filters = [
    { label: 'Номер недели', data: filterData.weekNumbers, onChange: filterSelectWeekNumber },
    { label: 'Время занятий', data: filterData.time, onChange: filterSelectTime },
    { label: 'Преподаватель', data: filterData.teachers, onChange: filterSelectTeacher },
  ]


  const getFilteredData = (posts) => {
    let _filteredData = posts || []

    _filteredData = _filteredData.filter((data) => {

      let _data = data
      let _dataKeys = Object.keys(_data).map((k) => k.replaceAll(' ', ''))

      if (weekFilter && _dataKeys.length > 0) {
        if (_dataKeys.includes(weekFilter)) {
          return true
        } else {
          return false
        }
      }

      return true


    })

    return _filteredData
  }
  return (
    <>
      <div style={{
        padding: '24px 50px',
        position: 'sticky',
        top: '0px',
        background: '#fff',
        height: '215px',
        zIndex: 1,
        borderBottom: '0.5px solid gray',
        boxShadow: '1px -4px 14px 0px'
      }}>
        <Title level={1}>Расписание занятий</Title>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}>
          <Title level={5}>Фильтры</Title>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '4px'
          }}>
            {filters.map((filter) => <Select allowClear placeholder={filter.label} options={filter.data} onChange={filter.onChange} />)}
          </div>

        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px 50px'
      }}>
        <>

          {isSuccess && posts?.ok && getFilteredData(posts?.result || []).map((post, index) => (
            <>
              {Object.keys(post).map((weekNumber) => {
                return (
                  <>
                    <Title level={2}>Неделя - {weekNumber}</Title>

                    {Object.keys(post[weekNumber]).map((day) => {
                      let currentWeekData = post[weekNumber]

                      let currentWeekDataByDay = currentWeekData[day]

                      if (timeFilter) {
                        currentWeekDataByDay = currentWeekDataByDay.filter(j => j.time == timeFilter)
                      }

                      if (currentWeekDataByDay.every(dt => !dt.lecture.name || !dt.lecture?.classroom || !dt?.lecture?.teacher)) return

                      console.log("🚀 ~ {Object.keys ~ currentWeekDataByDay:", currentWeekDataByDay, currentWeekDataByDay.length)
                      if (currentWeekDataByDay.length === 0) return

                      return (
                        <>
                          <Title level={5}>{day}</Title>

                          {currentWeekDataByDay.length > 0 && currentWeekDataByDay.map((currentDayPost) => <PostCard postData={currentDayPost} />)}

                          {/* {currentWeekData[day].length > 0
                            ? currentWeekData[day].map((currentDayPost) => <PostCard postData={currentDayPost} />)
                            : <Result icon={<FaRegFaceSmileWink size={42} />} subTitle="В данное время пар нету!" />} */}
                        </>
                      )
                    })}
                  </>)

              })}
            </>
          ))}
        </>
      </div>
    </>
  )
}
