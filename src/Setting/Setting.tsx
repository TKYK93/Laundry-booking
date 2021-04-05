import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import SettingList, { SettingListProps } from './SettingList'

const Setting: React.FC = () => {
  const settingList: SettingListProps[] = [
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
    {
      title: 'Logout',
      admin: false,
      handler: () => {
        console.log('ログアウト')
      },
    },
  ]

  return (
    <div className="Setting">
      <p>Setting</p>
      <List component="ul">
        {settingList.map((item, index) => (
          <SettingList {...item} key={`settingListItem${index}`} />
        ))}
      </List>
    </div>
  )
}

export default Setting
