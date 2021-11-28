import './select.scss';

import React, {useState} from 'react';


const Select = ( props ) => {
  const [count, setCount] = useState()
  const [processWork, setProcessWork] = useState()
  
        return (
            props.list.map((item, ind) =>
                <li className={ `${item.className + "__user"} ${item.className + "__user"}--${item.color} `}  key> {item.listItem} </li>
              )
        )
    }


export default Select;











// import './select.scss';

// import React from 'react';


// const Select = ( props ) => {
//         return (
//             props.list.map((item, ind) =>
//                 <li className={ `${item.className + "__user"} ${item.className + "__user"}--${item.color} `}  key> {item.listItem} </li>
//               )
//         )
//     }


// export default Select;


// {/* <div class="respons-block">
//   <h3 class="respons-block__title">Ответственный</h3>
//   <div class="respons-block__content">
//       <input class="respons-block__input respons-block--hover" type="text" placeholder="Выберите ответственного">
//   </div>
//   <ul class="respons-block__users" data-simplebar>
//       <li class="respons-block__user">Альбина Ткаченко</li>
//       <li class="respons-block__user">София Мельник</li>
//       <li class="respons-block__user">Альбина Ткаченко</li>
//       <li class="respons-block__user">София Мельник</li>
//       <li class="respons-block__user">Альбина Ткаченко</li>
//       <li class="respons-block__user">София Мельник</li>
//       <li class="respons-block__user">Альбина Ткаченко</li>
//       <li class="respons-block__user">София Мельник</li>
//       <li class="respons-block__user">Альбина Ткаченко</li>
//       <li class="respons-block__user">София Мельник</li>
//       <li class="respons-block__user">Альбина Ткаченко</li>
//   </ul>
// </div> */}


// Список доступных ролей
// const typeRole = document.querySelector('.new-user__role-img');
// const RolePerson = document.querySelectorAll('.new-user__role-name');
// const RoleInput = document.querySelector('.new-user__role-input');
// // const RolePersons = document.querySelector('.new-user__role-persons');
// let count = 0
// if (typeRole) {
//   typeRole.addEventListener('click', () => {
//     document.querySelector('.new-user__role-persons').classList.toggle('hide');
//     typeRole.classList.toggle('transform')

//     RolePerson.forEach(elem => {
//       elem.addEventListener('click', () => {
//         if (RoleInput.value === '') {
//           RoleInput.value = elem.textContent;
//         } else {
//           RoleInput.value = '';
//           RoleInput.value = elem.textContent;
//         }
//       });
//     });
//   });
// }


//   const TypeContentBtn = document.querySelector('.new-task__type-icon')
//   const type = document.querySelectorAll('.new-task__type-list')
//   function typeContent () {
//     type.forEach(elem => {
//         elem.classList.toggle('typeHide')
//         elem.addEventListener('click', () => {
//           // (<HTMLInputElement>document.querySelector('.new-task__type-input')).value = elem.textContent;
//           document.querySelector('.new-task__type-input').setAttribute('value', elem.textContent)
//         });
//       });
//   }

// if (TypeContentBtn) {
//   TypeContentBtn.addEventListener('click', typeContent);
// }


  
  

// const InitiatorPersonBtn = document.querySelector('.new-task__icon');
// const initiator = document.querySelectorAll('.new-task__user');

// function personTask () {

//     initiator.forEach(elem => {
//       elem.classList.toggle('typeHide')
//       elem.addEventListener('click', () => {
//         document.querySelector('.new-task__input').setAttribute('value', elem.textContent)
//       });
//     });

// }

// if (InitiatorPersonBtn) {
//   InitiatorPersonBtn.addEventListener('click', personTask)
// }


  
  
  
// const responsPersonBtn = document.querySelector('.respons-block__icon');
// const user = document.querySelectorAll('.respons-block__user');
// function responsPerson () {

//   user.forEach(elem => {
//     elem.classList.toggle('typeHide')
//     elem.addEventListener('click', () => {
//       // (<HTMLInputElement>document.querySelector('.respons-block__input')).value = elem.textContent;
//       document.querySelector('.respons-block__input').setAttribute('value', elem.textContent)
//     });
//   });

// }

// if (responsPersonBtn) {
//   responsPersonBtn.addEventListener('click', responsPerson)
// }


  
  






// const FioInput = document.querySelector('.new-user__fio-input') as HTMLInputElement;
// const EmailInput = document.querySelector('.new-user__email-input') as HTMLInputElement;
// const PasswInput = document.querySelector('.new-user_password__input') as HTMLInputElement;
// const Role = document.querySelector('.new-user__role-input') as HTMLInputElement;
// const SaveBtn = document.querySelector('.save-btn');
// if (SaveBtn) {
//   SaveBtn.addEventListener('click', () => {
//     let fio : string = '';
//     let email : string = '';
//     let pass : string = '';
//     let role : string = ''
//     if (FioInput.value.length > 0) {
//       fio = FioInput.value.trim();
//     } else {
//       FioInput.style.border = '1px solid red';
//       //   document.querySelector('.new-user__fill-title').classList.add('typeHide');
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;')
//     }
//     if (EmailInput.value.length > 0) {
//       email = EmailInput.value.trim();
//     } else {
//       EmailInput.style.border = '1px solid red';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;')
//     }
//     if (RoleInput.value.length > 0) {
//         role = RoleInput.value.trim();
//       } else {
//         RoleInput.style.border = '1px solid red';
//         document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;')
//       }
//     if (PasswInput.value.length > 0) {
//       pass = PasswInput.value.trim();
//     } else {
//       PasswInput.style.border = '1px solid red';
//       document.querySelector('.new-user__fill-field').classList.add('typeHide');
//     }
//     if (fio.length === 0) {
//       FioInput.style.border = '1px solid red';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;');
//     } else {
//       FioInput.style.border = '1px solid #D8E3EC';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 0');
//       localStorage.setItem('fioPerson', fio)
//         console.log('fioInput', FioInput.value)
//     }
//     if (email.length === 0) { 
//       EmailInput.style.border = '1px solid red';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;');
//     } else {
//       EmailInput.style.border = '1px solid #D8E3EC';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 0');
//     }
//     if (role.length === 0) { 
//         Role.style.border = '1px solid red';
//         document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;');
//       } else {
//         Role.style.border = '1px solid #D8E3EC';
//         document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 0');
//       }
//     if (pass.length === 0) {
//       PasswInput.style.border = '1px solid red';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 1;');
//     } else {
//       PasswInput.style.border = '1px solid #D8E3EC';
//       document.querySelector('.new-user__fill-field').setAttribute('style', 'opacity: 0');
//     }


//     console.log('fio', fio)
//     const ulUsers = document.querySelector('.users__person-items')
//     const liCreateUser = document.createElement('li');
//     liCreateUser.className = 'users__person-item';
//     console.log('liCreateUser', liCreateUser)

//     const divUser = document.createElement('div')
//     divUser.className = 'users__person-insert'

//     const editUser = document.createElement('button') as HTMLButtonElement
//     editUser.className = 'edit-btn'
//     const deleteBtn = document.createElement('button') as HTMLButtonElement
//     deleteBtn.className = 'delete-btn'
//         divUser.appendChild(editUser);
//         divUser.appendChild(deleteBtn);


//     const createImgUser = document.createElement('img') as HTMLImageElement
//     createImgUser.className = 'users__person-img'
//     // createImgUser.setAttribute('src', setAtt);
    
//     const createNameUser = document.createElement('span')
//     createNameUser.className = 'users__person-name'
//     createNameUser.innerHTML = fio

//     const createEmailUser = document.createElement('span')
//     createEmailUser.className = 'users__person-email'
//     createEmailUser.innerHTML = email

//     const createRoleUser = document.createElement('span')
//     createRoleUser.className = 'users__person-role'
//     createRoleUser.innerHTML = role

//     console.log('createRoleUser', createRoleUser);

//     localStorage.setItem('passwordUser', pass)

//     liCreateUser.appendChild(createImgUser);
//     liCreateUser.appendChild(createNameUser);
//     liCreateUser.appendChild(createEmailUser)
//     liCreateUser.appendChild(createRoleUser)

//     ulUsers.appendChild(liCreateUser)

//     console.log('ulUsers', ulUsers)

//   });
// }