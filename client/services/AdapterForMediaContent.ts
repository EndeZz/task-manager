const serviceAdapter = (obj: {
  id: number | string;
  name: string;
}) => {
  let str: string = '';
  if (obj.name === 'video') {
    str = 'Видео';
  } else if (obj.name === 'audio') {
    str = 'Аудио';
  } else if (obj.name === 'photo') {
    str = 'Фото';
  }
  return {
    id: obj.id,
    name: obj.name,
    text: str,
  };
};

export default serviceAdapter;
