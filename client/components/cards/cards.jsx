// import './cards.pug';
import './cards.scss';

import VideoModal from '../videoModal/videoModal';

import React, {Component} from 'react';
import { useState } from 'react';
// import { getEnvironmentData } from 'worker_threads';


// const getData = (img, text, datePublic, typeName) => {
//     const [modal, setModal] = useState(false)
//     const [tempdata, setTempData] = useState([])
//     let tempData = [img, text, datePublic, typeName]
//     setTempData(item => [1, ...tempData])
//     return setModal
// }




const Cards = (props) => { 
    const [modal, setModal] = useState(false)
    const [tempdata, setTempData] = useState([])

    const getData = (img, text, datePublic, typeName) => {
        let tempData = [img, text, datePublic, typeName]
        setTempData(item => [1, ...tempData])
        return setModal
    }  
        return pug`
            ${props.children[1].map((item, ind) => pug`
                li(class=${item.classCard + "__column"})
                    img(class=${item.classCard + "__column-img"} src=${item.img} alt=${item.altText})
                    figure(class=${item.classCard + "__column-info"})
                        figcaption(class=${item.classCard + "__column-name"} href="#")
                            a(class=${item.classCard + "__column-link"})
                                img(src=${item.icon} alt="")
                                span(class=${` ${item.classCard + "__column-type"} ${item.classCard + "__column-name"}--${item.color} `}) ${item.typeName}
                                span(class=${item.classCard + "__column-duration"})
                                    time(class= ${ `${item.classCard + "__column-time"} ${item.classCard + "__column-name"}--${item.color}`} datetime="06:31") ${item.duration}
                            figcaption(class=${item.classCard + "__column-descr"})
                                p(class=${item.classCard + "__column-text"}) ${item.text}
                                span(class=${item.classCard + "__column-author"}) ${item.author}
                                span(class=${item.classCard + "__column-data"})
                                    time(class=${item.classCard + "__column-public_data"} datetime="14.02.2020 09:21") ${item.public}
            ` )} 
        `;
    }

export default Cards;






// class Cards extends Component {
    
//     render() {
        
//         return pug`
//             ${this.props.children[1].map((item, ind) => pug`
//                 li(class=${item.classCard + "__column"})
//                     img(class=${item.classCard + "__column-img"} src=${item.img} alt=${item.altText} onClick=${() => getData(item.img, item.text, item.public, item.typeName)})
//                     figure(class=${item.classCard + "__column-info"})
//                         figcaption(class=${item.classCard + "__column-name"} href="#")
//                             a(class=${item.classCard + "__column-link"})
//                                 img(src=${item.icon} alt="")
//                                 span(class=${` ${item.classCard + "__column-type"} ${item.classCard + "__column-name"}--${item.color} `}) ${item.typeName}
//                                 span(class=${item.classCard + "__column-duration"})
//                                     time(class= ${ `${item.classCard + "__column-time"} ${item.classCard + "__column-name"}--${item.color}`} datetime="06:31") ${item.duration}
//                             figcaption(class=${item.classCard + "__column-descr"})
//                                 p(class=${item.classCard + "__column-text"}) ${item.text}
//                                 span(class=${item.classCard + "__column-author"}) ${item.author}
//                                 span(class=${item.classCard + "__column-data"})
//                                     time(class=${item.classCard + "__column-public_data"} datetime="14.02.2020 09:21") ${item.public}

//                 ${ modal === true ? <VideoModal /> : ''}
//             `)}
//         `;
//     }
// }


// export default Cards;