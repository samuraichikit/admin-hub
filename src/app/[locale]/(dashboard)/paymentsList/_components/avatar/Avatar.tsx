import { DefaultAvatar } from '@samuraichikit/inc-ui-kit'
import Image from 'next/image'

import s from './avatar.module.scss'

type Props = {
  src: string
}

export const Avatar = ({ src }: Props) => {
  const classNames = {
    container: s.container,
    avatar: s.avatar,
  }

  return (
    <div className={classNames.container}>
      {src ? (
        <Image src={src} fill alt={'avatar'} className={classNames.avatar} />
      ) : (
        <DefaultAvatar className={classNames.avatar} size={15} />
      )}
    </div>
  )
}
