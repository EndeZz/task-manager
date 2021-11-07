// import './addUser.pug';
import './addUser.scss';



import React, {Component} from 'react';

import EditImg from '../../../public/img/edit--icon.svg'
import DelImg from '../../../public/img/delete--icon.svg'

import Button from '../button/button';

const editBtn = [
    {   classBtn: "edit-btn", 
        classReset: "btn-reset", 
        bgBtn: "blue", 
        img: `${EditImg}`, 
    }
]

const deleteBtn = [
    {   classBtn: "delete-btn", 
        classReset: "btn-reset", 
        bgBtn: "blue",  
        img: `${DelImg}`
    }
]

class AddUser extends Component {
    render() {
        
        return pug`
            ${this.props.children[1].map((item, ind) => pug`
                li(class=${ `${item.className + "__person-item"} ${item.classDop} `})
                    div(class=${item.className + "__person-picture"})
                        img(class=${item.className + "__person-img"} src=${item.icon})
                    span(class=${item.className + "__person-name"}) ${item.name}
                    span(class=${item.className + "__person-email"}) ${item.email}
                    span(class=${item.className + "__person-role"}) ${item.role}
                    div(class=${item.className + "__person-insert"})
                        Button btn=${editBtn}
                        Button btn=${deleteBtn}
            `)}
        `;
    }
}


export default AddUser;

