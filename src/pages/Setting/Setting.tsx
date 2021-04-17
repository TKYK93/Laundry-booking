import React from 'react'
import { List } from '@material-ui/core'
import SettingListItem, { SettingListItemProps } from './SettingListItem'
import Header from '../../components/Header'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService'
import AddBoxIcon from '@material-ui/icons/AddBox'
import PeopleIcon from '@material-ui/icons/People'
import FolderSharedIcon from '@material-ui/icons/FolderShared'

const Setting: React.FC = () => {
  const settingList: SettingListItemProps[] = [
    {
      title: 'Available Machines',
      path: '/setting/allMachines',
      icon: LocalLaundryServiceIcon,
      admin: false,
    },
    {
      title: 'Add Machines',
      path: '/setting/addMachines',
      icon: AddBoxIcon,
      admin: true,
    },
    {
      title: 'People in Your Account',
      path: '/setting/users',
      icon: FolderSharedIcon,
      admin: true,
    },
    {
      title: 'Check Your Group ID',
      path: '/setting/groupId',
      icon: PeopleIcon,
      admin: true,
    },
  ]

  return (
    <div className="setting">
      <Header title={'Setting'} />
      <List component="ul">
        {settingList.map((item, index) => (
          <SettingListItem {...item} key={`settingListItem${index}`} />
        ))}
      </List>
    </div>
  )
}

export default Setting
