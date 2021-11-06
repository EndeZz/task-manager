export type UserType = {
  'id': number,
  'name': string,
  'email': string,
  'avatar': string,
  'role': {
    'id': number,
    'name': 'admin' | 'manager' | 'contentMaker'
  }
};
