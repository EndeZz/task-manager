import '../button/button';
import './cardsTask.scss'

import React, { useEffect, useRef, useState } from 'react';

import Button from '../button/button';
import EditImg from '../../../public/img/edit--icon.svg'

// const buttonInsert = [
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`}
// ]
// const buttonDelete = [
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "", classReset: "", bgBtn: "", img: ""},
//     {classBtn: "", classReset: "", bgBtn: "", img: ""}
// ]


const CardTask = ( props ) => {

    const [idPostDel, setIdPostDel] = useState(false);
    // props.deletePost(idPostDel)

    const mountedRef = useRef(false)

    useEffect(() => {
        mountedRef.current = true
        return () => {
            mountedRef.current = false
        }
    }, [])

    useEffect(() => {
        if(mountedRef.current) {
            props.idPost(idPostDel)
        }
    }, [idPostDel])
        return (
            props.lists.map((item, ind) => 
                <li className="user-card" key={item.id}>
                    <img className="user-card__photo" src={item.preview} alt="" />
                    <span className="user-card__title user-card__title--item" > {item.type.name} </span>
                    <p className="user-card__text" > {item.name} 
                        <span className ="user-card__text-gradient" ></span>
                    </p>  
                    <span className="user-card__author" > {item.executor.name} </span>
                    <date className="user-card__data" > {item.dateExpired} </date>
                    {
                        item.status.name === "В работе" ?
                        <span className="user-card__process user-card__process--pink" > {item.status.name} </span>
                        :
                        item.status.name === "Выполнено" ?
                        <span className="user-card__process user-card__process--green" > {item.status.name} </span>
                        :
                        item.status.name === "Ожидает согласования" ?
                        <span className="user-card__process user-card__process--blue" > {item.status.name} </span>
                        :
                        <span className="user-card__process user-card__process--black" > {item.status.name} </span>

                    }
                    <div className="user-card__buttons" >
                        <div className="user-card__inner-edit" >
                            <button className="edit-btn btn-reset edit-btn--blue" >
                                <img className="edit-btn__img" src={item.editImg} alt="Кнопка редактирования" />
                            </button>
                        </div>
                        <div className="user-card__inner-del" >
                            <button className="delete-btn btn-reset delete-btn--blue" onClick={() => setIdPostDel(item)}>
                                <img className="delete-btn__img delete-btn__img--blue"  src={item.delImg} alt="Кнопка" />
                            </button>
                        </div>
                    </div>
                </li>

            )
        )
    }

// classEditBtn: "edit-btn", claddDelBtn: "delete-btn", classReset: "btn-reset", bgEditBtn: "blue", bgDelBtn: "blue", imgEdit: `${EditImg}`, imgDel: `${DelBtn}`
export default CardTask;
