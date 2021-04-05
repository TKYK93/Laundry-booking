import React from 'react'
import { List } from '@material-ui/core'
import SettingListItem, { SettingListItemProps } from './SettingListItem'

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
          <SettingListItem {...item} key={`settingListItem${index}`} />
        ))}
      </List>
    </div>
  )
}

export default Setting
