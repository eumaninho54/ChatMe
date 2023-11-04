import React from 'react';
import { useAppSelector } from '../../store/hooks';
import Icon from '../icon';
import { IProps } from './types';
import { reactotron } from '../../config/reactotron';


const Check: React.FC<IProps> = (props) => {
  const { message, users } = props
  const user = useAppSelector((store) => store.user)

  const check = () => {
    const isSender = message.sender.id == user.id
    const hasReceived = users.every((item) => message.isReceivedBy.includes(item.id))

    const hasRead = users.every((item) => message.isReadBy.includes(item.id))

    if (isSender) {
      if (hasReceived && hasRead)
        return (
          <Icon
            family='Ionicons'
            color='focused'
            name='checkmark-done'
            size='normal_20' />
        )

      else if (hasReceived)
        return (
          <Icon
            family='Ionicons'
            color='secundaryFont'
            name='checkmark-done'
            size='normal_20' />
        )

      else return (
        <Icon
          family='Ionicons'
          color='secundaryFont'
          name='checkmark'
          size='normal_20' />
      )
    }

    return <></>
  }

  return (
    <>
      {check()}
    </>
  )
}

export default Check;
