import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import fetchUsers from '../../store/actions/ActionCreatorsUsers';
import { Input } from '../../components/Input/InputDefault';
import Header from '../../components/Header/Header';
import { Select } from '../../components/Select/Select';
import { Button } from '../../components/Button/Button';
import { ButtonLink } from '../../components/Button/ButtonLink';
import { InputFile } from '../../components/Input/InputFile';
import { InputIcon } from '../../components/Input/InputWithIcon';
import './newTask.scss';

function NewTask() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.usersReducer);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // const initialItems = { type: '', author: '', executor: '' };

  // const [selected, setSelected] = useState({ type: '', author: '', executor: '' });

  // const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setSelected((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // useEffect(() => {
  //   setSelected(selected);
  // }, []);

  const history = useHistory();
  const {
    handleSubmit, handleChange, values, touched, errors,
  } = useFormik({
    initialValues: {
      type: '',
      name: '',
      description: '',
      author: '',
      executor: '',
      dateExpired: '',
    },
    validationSchema: Yup.object({
      type: Yup.string().min(6, 'Password should be longer than 6 characters').required(),
      name: Yup.string().min(6, 'Password should be longer than 6 characters').required(),
      description: Yup.string().min(6, 'Password should be longer than 6 characters').required(),
      author: Yup.string().min(6, 'Password should be longer than 6 characters').required(),
      executor: Yup.string().min(6, 'Password should be longer than 6 characters').required(),
      dateExpired: Yup.string().min(6, 'Password should be longer than 6 characters').required(),
    }),
    onSubmit: ({
      type, name, description, author, executor, dateExpired,
    }) => {
      console.log(`Type: ${type}, name: ${name}, author: ${author}, descr: ${description}, executor: ${executor}, date: ${dateExpired}`);
      history.push('/tasks');
    },
  });
  return (
    <>
      <Header />
      <div className='main'>
        <div className='container'>
          <div className='new-task'>
            <div className='btn-wrapper'>
              <ButtonLink
                path='tasks'
                context='К списку задач'
                icon={{ id: 'back', width: 23, height: 9 }}
                color='transparent'
              />
            </div>
            <form className='new-task__form' onSubmit={handleSubmit}>
              <div className='new-task__wrapper'>
                <Select
                  field={{
                    id: 'type', placeholder: 'Выберите тип контента', content: 'Тип контента', value: `${values.type}`, icon: { id: 'arrow-down', width: 6, height: 4 },
                  }}
                  options={...['Видео', 'Аудио', 'Фото']}
                  selected={values.type}
                  setSelected={handleChange}
                />
                <Input
                  id='name'
                  content='Заголовок'
                  placeholder='Введите заголовок задачи'
                  value={values.name}
                  onChange={handleChange}
                />
                <Input
                  id='description'
                  content='Описание'
                  placeholder='Опишите требования'
                  type='textarea'
                  value={values.description}
                  onChange={handleChange}
                />
                <InputFile
                  icon={{ id: 'clip' }}
                  onClick={() => {}}
                  context='Прикрепить файл'
                />
              </div>
              <div className='new-task__sidebar'>
                <div className='new-task__sidebar-wrapper'>
                  <InputIcon
                    id='calendar'
                    content='Дата публикации'
                    placeholder='Укажите дату публикации'
                    icon={{ id: 'calendar' }}
                    type='date'
                    value={values.dateExpired}
                    onChange={handleChange}
                  />
                  <Select
                    field={{
                      id: 'author', placeholder: 'Выберите инициатора', content: 'Инициатор', value: `${values.author}`, icon: { id: 'arrow-down', width: 6, height: 4 },
                    }}
                    options={users}
                    selected={values.author}
                    setSelected={handleChange}
                  />
                  <Select
                    field={{
                      id: 'executor', placeholder: 'Выберите ответственного', content: 'Ответственный', value: `${values.executor}`, icon: { id: 'arrow-down', width: 6, height: 4 },
                    }}
                    options={users}
                    selected={values.executor}
                    setSelected={handleChange}
                  />
                  {touched.type && errors.name && errors.author && errors.description
                && errors.dateExpired ? (
                  <div>{errors}</div>
                    ) : null}
                </div>
              </div>
              <div className='btn-wrapper'>
                <Button
                  context='Сохранить'
                  color='blue'
                  type='submit'
                  icon={{ id: 'done' }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewTask;
