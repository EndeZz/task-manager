const serviceAdapter = (obj: { name: 'admin' | 'contentMaker' | 'manager', id: number }) => {
  let str: string = '';
  if (obj.name === 'admin') {
    str = 'Администратор';
  } else if (obj.name === 'contentMaker') {
    str = 'Контент-мейкер';
  } else if (obj.name === 'manager') {
    str = 'Менеджер';
  }
  return {
    id: obj.id,
    name: obj.name,
    role: str,
  };
};

export default serviceAdapter;
