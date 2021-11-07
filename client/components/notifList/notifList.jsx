import './notifList.scss';



import React, {Component} from 'react';



class NotifList extends Component {
    render() {
        return pug`
            ${this.props.children[1].map((item, ind) => pug`
                li(class=${item.className + "__item"}) 
                    div(class=${item.className + "__img"})
                        img(src=${item.icon}, alt="")
                    figure(class=${item.className + "__content"})
                        p(class=${item.className + "__title"}) ${item.title}
                            span(class=${item.className + "__subtitle"}) ${item.subtitle}
                        span(class=${item.className + "__data"}) ${item.data}
            `)}
        `;
    }
}


export default NotifList;

