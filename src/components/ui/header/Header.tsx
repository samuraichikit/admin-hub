import { Typography } from '@samuraichikit/inc-ui-kit'

import s from './header.module.scss'

import { LangSelect } from '../langSelect'

export const Header = () => {
  const classNames = {
    container: s.container,
    header: s.header,
    title: s.title,
  }

  return (
    <header className={classNames.header}>
      <div className={classNames.container}>
        <div className={classNames.title}>
          <Typography variant={'large'}>Inctagram</Typography>
          <Typography variant={'small_text'}>Super</Typography>
          <Typography variant={'semi-bold_small_text'}>Admin</Typography>
        </div>
        <LangSelect />
      </div>
    </header>
  )
}
