// import './cards.pug';
import './cards.scss';

import VideoModal from '../videoModal/videoModal';

import React from 'react';
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
// import { getEnvironmentData } from 'worker_threads';






const Cards = (props) => { 
    console.log('propsCards', props.cards)
    const { push } = useHistory()
        return (
            // eslint-disable-next-line react/prop-types
            props.cards.length > 0 ? 
                // eslint-disable-next-line react/prop-types
                props.cards.map( item =>
                    <li className="card__column" key={item.id} onClick={() => push(`/task/${item.type.name}`)}>
                        <img className="card__column-img" src={item.url} />
                        <figure className="card__column-info" >
                        <figcaption className="card__column-name" href="#" >
                            <a className="card__column-link" >
                                <img  alt=""  src={item.preview}/>
                                {
                                    item.type.name === "Видео" ? 
                                    <span className="card__column-type card__column-name--blue "  > {item.type.name} </span>
                                    :
                                    item.type.name === "Фото" ? 
                                    <span className="card__column-type card__column-name--green "  > {item.type.name} </span>
                                    : 
                                    item.type.name === "Аудио" ? 
                                    <span className="card__column-type card__column-name--yellow "  > {item.type.name} </span>
                                    : 
                                    item.type.name === "Фильм" ? 
                                    <span className="card__column-type card__column-name--blue "  > {item.type.name} </span>
                                    : ''
                                }
                            {   item.duration ? 
                                <span className="card__column-duration" >
                                    {
                                        item.type.name === "Видео" ?
                                        <time className="card__column-time card__column-name--blue"  dateTime="06:31" > {item.duration} </time>
                                        :
                                        item.type.name === "Аудио" ?
                                        <time className="card__column-time card__column-name--yellow"  dateTime="06:31" > {item.duration} </time>
                                        :
                                        item.type.name === "Фильм" ?
                                        <time className="card__column-time card__column-name--blue"  dateTime="06:31" > {item.duration} </time>
                                        : ''
                                    }
                                </span>
                                : ''
                            }
                            </a>
                                <figcaption className="card__column-descr" >
                                    <p className="card__column-text" > {item.name} </p>
                                    {/* <span className="card__column-author" > {item.author.name} </span> */}
                                    <span className="card__column-data" >
                                        <time className="card__column-public_data" dateTime="14.02.2020 09:21" > {item.dateCreated} </time>
                                    </span>
                                </figcaption>
                            </figcaption>
                        </figure>
                    </li>
                ) 
            : ''
            // eslint-disable-next-line react/prop-types
            // props.isPend == false ?
            // <span className="nothingFound">По вашему запросу нет нужных карточек</span>
            // : ''
            
        )
    }   

export default Cards;






{/* <li className={item.classCard + "__column"} key={item.id}>
<img className={item.classCard + "__column-img"} src={item.url} />
<figure className={item.classCard + "__column-info"} >
    <figcaption className={item.classCard + "__column-name"} href="#" >
        <a className={item.classCard + "__column-link"} >
            <img  alt="" />
            <span className={` ${item.classCard + "__column-type"} ${item.classCard + "__column-name"}--${item.color} `} > {item.type.name} </span>
             <span className={item.classCard + "__column-duration"} >
                <time className={ `${item.classCard + "__column-time"} ${item.classCard + "__column-name"}--${item.color}`} dateTime="06:31" > {item.duration} </time>
            </span> 
        </a>
        <figcaption className={item.classCard + "__column-descr"} >
            <p className={item.classCard + "__column-text"} > {item.name} </p>
            <span className={item.classCard + "__column-author"} > {item.author.name} </span>
            <span className={item.classCard + "__column-data"} >
                <time className={item.classCard + "__column-public_data"} dateTime="14.02.2020 09:21" > {item.dateCreated} </time>
            </span>
        </figcaption>
    </figcaption>
</figure>
</li>  */}


// export default Cards;