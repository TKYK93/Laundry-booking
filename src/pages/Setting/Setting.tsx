import React from 'react'
import { List } from '@material-ui/core'
import SettingListItem, { SettingListItemProps } from './SettingListItem'
import Header from '../../components/Header'
import BottomNav from '../../components/BottomNav'

const Setting: React.FC = () => {
  const settingList: SettingListItemProps[] = [
    {
      title: 'Available Machines',
      path: '/setting/machines',
      admin: false,
    },
    {
      title: 'People in Your Account',
      path: '/setting/users',
      admin: false,
    },
  ]

  return (
    <div className="Setting">
      <Header title={'Setting'} />
      <p>Setting</p>
      <List component="ul">
        {settingList.map((item, index) => (
          <SettingListItem {...item} key={`settingListItem${index}`} />
        ))}
      </List>
      <BottomNav />
    </div>
  )
}

export default Setting
