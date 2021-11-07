import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../components/Input/InputDefault';
import { InputIcon } from '../../components/Input/InputWithIcon';
import { InputFile } from '../../components/Input/InputFile';
import { Select } from '../../components/Select/Select';
import { ButtonLink } from '../../components/Button/ButtonLink';
import { Button } from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import avatarSrc from '../../../public/img/avatars/default-avatar.svg';
import './new-user.scss';

const NewUser = () => {
  const history = useHistory();

  const {
    handleSubmit, handleChange, values, touched, errors, setFieldValue,
  } = useFormik({
    initialValues: {
      userName: '',
      email: '',
      role: '',
      password: '',
      avatar: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().min(2, 'Поле не может быть пустым').required(),
      userName: Yup.string().min(2, 'Поле не может быть пустым').required(),
      password: Yup.string().min(6, 'пароль не может быть меньше 6 символов').required(),
    }),
    onSubmit: ({
      email, password, userName, role, avatar,
    }) => {
      console.log(`E-mail: ${email}, password: ${password}, name: ${userName}, role: ${role}, img: ${avatar}`);
      history.push('/users');
    },
  });

  const selectChooseHandler = (role:string) => {
    setFieldValue('role', role);
  };

  return (
    <div className='main'>
      <Header />
      <div className='new-user__container container'>
        <section className='new-user'>
          <div className='new-user__back-link'>
            <ButtonLink
              path='users'
              icon={{ id: 'back', width: 23, height: 9 }}
              color='transparent'
            />
            <h1 className='new-user__title'>Пользователь</h1>
          </div>
          <form className='new-user__form' onSubmit={handleSubmit}>
            <div className='new-user__form-wrapper'>
              <div className='new-user__form-avatar'>
                <img className='new-user__form-avatar-img' src={avatarSrc} alt='изображение пользователя' />
                <InputFile
                  icon={{ id: 'upload' }}
                  onClick={() => {}}
                  context='Загрузить аватар'
                  value={values.avatar}
                  onChange={() => handleChange}
                />
              </div>
              <div className='new-user__form-fields'>
                <Input
                  id='userName'
                  content='Имя, фамилия'
                  placeholder='Введите имя, фамилию'
                  value={values.userName}
                  onChange={handleChange}
                  error={values.userName}
                />
                <Input
                  id='email'
                  content='E-mail'
                  placeholder='Введите e-mail'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                  error={values.email}
                />
                <Select
                  field={{
                    id: 'role',
                    placeholder: 'Выберите роль',
                    content: 'Роль',
                    icon: { id: 'arrow-down', width: 6, height: 4 },
                    error: errors.role,
                  }}
                  selected={values.role}
                  onChange={selectChooseHandler}
                  options={...['Администратор', 'Контент-мэйкер', 'Менеджер']}
                />
                <InputIcon
                  id='password'
                  content='Пароль'
                  placeholder='Введите пароль'
                  type='password'
                  value={values.password}
                  onChange={handleChange}
                  error={values.password}
                  icon={{ id: 'not-visible' }}
                />
                {touched.password && errors.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <div className='btn-wrapper'>
                  <Button
                    context='Сохранить'
                    color='blue'
                    type='submit'
                    icon={{ id: 'done' }}
                  />
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default NewUser;
