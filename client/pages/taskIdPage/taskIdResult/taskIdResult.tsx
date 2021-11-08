import React, { useState } from 'react';
import './task-result.scss';
import { useParams } from 'react-router-dom';
import Icon from '../../../components/icon/icon';
import LoadFile from './loadFile/loadFile';

const TaskIdResult = ({ className, setLoadFiles }: any) => {
  const [fileList, setFileList] = useState([]);
  const { id }: any = useParams();
  const uploadFile = async (formdata: any) => {
    await fetch('/api/files', { method: 'POST', body: JSON.stringify(formdata) });
  };
  const filesUploadHandler = (event: any) => {
    const { files } = event.target;
    const data = {
      id,
      files,
    };
    uploadFile(data);

    const file = files[0];
    setFileList([...fileList, file]);
    setLoadFiles(true);
  };
  return (
    <article className={`task-result ${className}`}>
      <div className={'task-result__desc'}>
        <h3 className={'task-result__title'}>Результат</h3>
        <p className={'task-result__format'}>Допустимые форматы</p>
        <ul className={'task-result__format-list'}>
          <li className={'task-result__format-item'}>
            <Icon type={''} typeIcon={`format--avi`} />
          </li>
          <li className={'task-result__format-item'}>
            <Icon type={''} typeIcon={`format--flv`} />
          </li>
          <li className={'task-result__format-item'}>
            <Icon type={''} typeIcon={`format--mov`} />
          </li>
        </ul>
      </div>
      <div className={'task-result__upload-file-inner'}>
        <ul className={'task-result__upload-file-list'}>
          {fileList.map((file: any) => (
            <li className={'task-result__upload-file'} key={file.name}>
              <LoadFile file={file} setFileList={setFileList} fileList={fileList} setLoadFiles={setLoadFiles} />
            </li>
          ))}
        </ul>
        <label className={'task-result__file-load-label'}>
          <input type={'file'} name={'file'} className={'task-result__file-load-input'} onChange={filesUploadHandler} />
          <Icon type={''} typeIcon={'plus'} />
        </label>
      </div>
    </article>
  );
};

export default TaskIdResult;