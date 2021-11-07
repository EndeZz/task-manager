
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Header from '../header/header';
import Button from '../button/button';

import uploadImg from '../../../public/img/upload--icon.svg'


class UploadAvatar extends Component {
    render() {
        
        return pug`
            ${this.props.children[1].map((item, ind) => pug`
                div(class=${item.className + "__photo-profile"})
                    div(class=${item.className + "__circle-img"})
                        img(class=${item.className + "__photo-img"} src=${item.logo})
                    div(class=${item.className + "__upload-photo"})
                        label(class=${item.className + "__custom-file"})
                            img(class=${item.className + "__upload"} src=${item.upload})
                            span(class=${item.className + "__custom-title"}) ${item.title}
                            input(class=${item.className + "__custom-upload"} type="file" name="file")
            `)}
        `;
    }
  }

export default UploadAvatar;