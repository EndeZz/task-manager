const serviceAdapter = (obj: { name: 'inWork' | 'approved' | 'feedback', id: number }) => {
  let str: string = '';
  if (obj.name === 'inWork') {
    str = 'В работе';
  } else if (obj.name === 'approved') {
    str = 'Выполнено';
  } else if (obj.name === 'feedback') {
    str = 'Ожидает согласования';
  }
  return {
    id: obj.id,
    name: obj.name,
    text: str,
  };
};

export default serviceAdapter;
