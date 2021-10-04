import React from 'react';
import Button from '../../components/button/button';
import PlusIcon from '../../components/iconComponents/plusIcon';
import ApproveIcon from '../../components/iconComponents/approveIcon';
import EditIcon from '../../components/iconComponents/editIcon';
import BackArrowIcon from '../../components/iconComponents/backArrowIcon';
import DeleteIcon from '../../components/iconComponents/deleteIcon';
import CrossIcon from '../../components/iconComponents/crossIcon';
import MenuItem from '../../components/menuItem/menuItem';
import BellNotification from '../../components/bellNotification/bellNotification';

function UiKit() {
  return (
    <div>

      <Button
        btnIcon={<PlusIcon />}
        title='Новая задача'
        theme='new-task'
        onClick={() => {}}
      />

      <Button
        btnIcon={<ApproveIcon />}
        title='Утвердить и опубликовать'
        theme='approve-publish'
        onClick={() => {}}
      />

      <Button
        btnIcon={<EditIcon />}
        theme='edit-type1'
        onClick={() => {}}
      />

      <Button
        btnIcon={<EditIcon />}
        theme='edit-type2'
        onClick={() => {}}
      />

      <Button
        btnIcon={<BackArrowIcon />}
        title='К списку задач'
        theme='back'
        onClick={() => {}}
      />

      <Button
        btnIcon={<DeleteIcon />}
        title='Удалить'
        theme='delete'
        onClick={() => {}}
      />

      <Button
        btnIcon={<CrossIcon />}
        theme='cross'
        onClick={() => {}}
      />

      <MenuItem theme='menu-item-regular' title='Задачи' onClick={() => {}} />

      <BellNotification numberOfNotifications='3' />
      <BellNotification numberOfNotifications='0' />

    </div>
  );
}

export default UiKit;
