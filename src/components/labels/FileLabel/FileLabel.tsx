import React from 'react';
import './FileLabel.scss';

function FileLabel(props: { type: 'video' | 'audio' | 'photo' }) {
  return (
    <div className="status_label">
      {(() => {
        switch (props.type) {
          case 'video':
            return (
              <div>
                <div className="file_label__text">
                  <span>avi</span>
                </div>
                <div className="file_label__text">
                  <span>flv</span>
                </div>
                <div className="file_label__text">
                  <span>mov</span>
                </div>
              </div>
            );
          case 'photo':
            return (
              <div>
                <div className="file_label__text">
                  <span>gif</span>
                </div>
                <div className="file_label__text">
                  <span>jpg</span>
                </div>
                <div className="file_label__text">
                  <span>png</span>
                </div>
              </div>
            );
          case 'audio':
            return (
              <div>
                <div className="file_label__text">
                  <span>mp3</span>
                </div>
              </div>
            );
          default:
            return (
              <div></div>
            );
        }
      })()}
    </div>
  );
}

export default FileLabel;
