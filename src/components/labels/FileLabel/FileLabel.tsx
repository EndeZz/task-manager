import React, { Fragment } from 'react';
import './FileLabel.scss';

function FileLabel(props: { type: 'video' | 'audio' | 'photo' }) {
  return (
    <div className="status_label">
      {(() => {
        switch (props.type) {
          case 'video':
            return (
              <Fragment>
                <div className="file_label__text">
                  <span>avi</span>
                </div>
                <div className="file_label__text">
                  <span>flv</span>
                </div>
                <div className="file_label__text">
                  <span>mov</span>
                </div>
              </Fragment>
            );
          case 'photo':
            return (
              <Fragment>
                <div className="file_label__text">
                  <span>gif</span>
                </div>
                <div className="file_label__text">
                  <span>jpg</span>
                </div>
                <div className="file_label__text">
                  <span>png</span>
                </div>
              </Fragment>
            );
          case 'audio':
            return (
              <Fragment>
                <div className="file_label__text">
                  <span>mp3</span>
                </div>
              </Fragment>
            );
          default:
            return (
              null
            );
        }
      })()}
    </div>
  );
}

export default FileLabel;
