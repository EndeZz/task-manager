export interface RouteInterface {
  [key: string]: {
    url: string;
    title: string;
    exact: boolean;
  };
}

export enum PAGES {
  INDEX = '/',
  AUTH = '/auth',
  TASKS = '/tasks',
  TASK = '/task',
  PROFILE = '/profile',
  USERS = '/users',
  USER = '/user',
  NOT_FOUND_PAGE = '/404',
}

const ROUTES: RouteInterface = {
  INDEX: {
    url: PAGES.INDEX,
    title: 'Главная',
    exact: true,
  },
  TASKS: {
    url: PAGES.TASKS,
    title: 'Задачи',
    exact: false,
  },
  TASK: {
    url: PAGES.TASK,
    title: 'Задача',
    exact: false,
  },
  PROFILE: {
    url: PAGES.PROFILE,
    title: 'Профиль',
    exact: false,
  },
  AUTH: {
    url: PAGES.AUTH,
    title: 'Авторизация',
    exact: false,
  },
  USERS: {
    url: PAGES.USERS,
    title: 'Пользователи',
    exact: true,
  },
  USER: {
    url: PAGES.USER,
    title: 'Пользователь',
    exact: true,
  },
  NOT_FOUND_PAGE: {
    url: PAGES.NOT_FOUND_PAGE,
    title: '404',
    exact: false,
  },
};

export default ROUTES;
