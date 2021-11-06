export type TaskType = {
  'executor': {
    'name': string,
    'id': number
  },
  'id': number,
  'name': string,
  'type': {
    'name': string,
    'id': number
  },
  'status': {
    'name': 'inWork' | 'approved' | 'feedback',
    'id': number
  },
  'dateExpired': string,
};

export type IndexTaskType = {
  'author': {
    'name': string,
    'id': number
  },
  'dateCreated': string,
  'format': string,
  'id': number,
  'name': string,
  'preview': string,
  'type': {
    'name': string,
    'id': number
  },
  'url': string
};
