export const ru = {
  signIn: {
    email: 'Адрес электронной почты',
    error: 'Адрес электронной почты или пароль неверны',
    password: 'Пароль',
    signIn: 'Войти',
  },
  schemaErrorMsg: {
    emailFormat: 'Адрес эл.почты должен быть в формате',
  },
  userPage: {
    backToUsersList: 'Вернуться к списку пользователей',
    userAvatar: 'Аватар пользователя',
    userId: 'ID пользователя',
    profileCreationDate: 'Дата создания профиля',
    dateOfPayment: 'Дата платежа',
    endDateOfSubscription: 'Дата окончания подписки',
    amount: 'Сумма',
    subscriptionType: 'Тип подписки',
    paymentType: 'Тип оплаты',
    userName: 'Имя пользователя',
    profileLink: 'Ссылка на профиль',
    subscriptionDate: 'Дата подписки',
    uploadedPhotos: 'Загруженные фотографии',
    payments: 'Платежи',
    followers: 'Подписчики',
    following: 'Отслеживаемые',
  },
  commonTableWithPagination: {
    noData: 'Данных нет',
    afterSelectContent: 'на странице',
    beforeSelectContent: 'показать',
  },
  usersListAdmin: {
    dateAdded: 'Дата добавления',
    notSpecified: 'Не указано',
    profileLink: 'Ссылка на профиль',
    selectBlocked: 'Заблокировано',
    selectNoSelected: 'Не выбрано',
    userId: 'ID пользователя',
    userName: 'Имя пользователя',
  },
  actionMenuAdmin: {
    banInSystem: 'Бан в системе',
    deleteUser: 'Удалить аккаунт',
    moreInformation: 'Подробнее',
    unBan: 'Вы уверены, что хотите разбанить ',
    titleUnBan: 'Разблокировка пользователя',
  },
  pagination: {
    show: 'Показать',
    onPage: 'на странице',
  },
  removeUserAdmin: {
    questionModal: 'Вы уверены, что хотите удалить',
    titleModal: 'Удалить пользователся',
  },
  sideBar: {
    confirmButton: 'Да',
    rejectButton: 'Нет',
  },
}

export type Locale = typeof ru
