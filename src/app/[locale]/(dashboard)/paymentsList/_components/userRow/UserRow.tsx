import s from './userRow.module.scss'

import { Avatar } from '../avatar'

type Props = {
  src: string
  userName: string
}

export const UserRow = ({ src, userName }: Props) => {
  const classNames = {
    container: s.container,
  }

  return (
    <div className={classNames.container}>
      <Avatar src={src} />
      <span>{userName}</span>
    </div>
  )
}
