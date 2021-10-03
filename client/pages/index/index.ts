import '../../components/calendar/calendar';
import {
  modalOpen,
  modalClose
} from '../../components/modal/modal';
import { playerGenerate } from '../../components/player/player';
import userMenu from '../../components/user/user';
import "./index.scss";
import  generateCards from '../../components/cards/cards';

userMenu();

const api = {
  get (url: string) {
    switch (url) {
      case '/contents':
        return new Promise((resolve) => {
          setTimeout(() => {
              resolve({
                "contents": [
                  {
                  "author": {
                    "name": "name",
                    "id": 1.4658129805029452
                  },
                  "dateCreated": "1978-01-02T14:13:20.570Z",
                  "format": "png",
                  "id": 84189242.5196236,
                  "name": "dolor sit ipsum do",
                  "preview": "https://via.placeholder.com/393",
                  "type": {
                    "name": "video",
                    "id": 6.027456183070403
                  },
                  "url": "https://www.youtube.com/watch?v=ScMzIvxBSi4"
                  },
                  {
                  "author": {
                    "name": "name",
                    "id": 1.4658129805029452
                  },
                  "dateCreated": "1944-03-15T01:05:43.592Z",
                  "format": "m4a",
                  "id": 64128220.52860066,
                  "name": "sint Du",
                  "preview": "https://via.placeholder.com/393",
                  "type": {
                    "name": "video",
                    "id": 6.027456183070403
                  },
                  "url": "https://www.youtube.com/watch?v=ScMzIvxBSi4"
                  },
                  {
                  "author": {
                    "name": "name",
                    "id": 1.4658129805029456
                  },
                  "dateCreated": "1944-03-15T01:05:43.592Z",
                  "format": "jpg",
                  "id": 64128220.52860067,
                  "name": "sint Du",
                  "preview": "https://via.placeholder.com/393",
                  "type": {
                    "name": "photo",
                    "id": 6.027456183070403
                  },
                  "url": "https://via.placeholder.com/790"
                  },
                  {
                  "author": {
                    "name": "name",
                    "id": 1.4658129805029459
                  },
                  "dateCreated": "1944-03-15T01:05:43.592Z",
                  "format": "mp3",
                  "id": 64128220.52860065,
                  "name": "sint Du",
                  "preview": "https://via.placeholder.com/393",
                  "type": {
                    "name": "audio",
                    "id": 6.027456183070403
                  },
                  "url": "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3"
                  },
                  {
                  "author": {
                    "name": "name",
                    "id": 1.4658129805029452
                  },
                  "dateCreated": "1944-03-15T01:05:43.592Z",
                  "format": "mp3",
                  "id": 64128220.52860063,
                  "name": "sint Du",
                  "preview": "https://via.placeholder.com/393",
                  "type": {
                    "name": "audio",
                    "id": 6.027456183070403
                  },
                  "url": "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3"
                  },
                  {
                  "author": {
                    "name": "name",
                    "id": 1.4658129805029426
                  },
                  "dateCreated": "1944-03-15T01:05:43.592Z",
                  "format": "mp4",
                  "id": 64128220.52860089,
                  "name": "sint Du",
                  "preview": "https://via.placeholder.com/393",
                  "type": {
                    "name": "video",
                    "id": 6.027456183070403
                  },
                  "url": "https://www.youtube.com/watch?v=ScMzIvxBSi4"
                  },
                  {
                  "author": {
                    "name": "name",
                    "id": 1.4658129805029452
                  },
                  "dateCreated": "1944-03-15T01:05:43.592Z",
                  "format": "jpg",
                  "id": 64128220.52860035,
                  "name": "sint Du",
                  "preview": "https://via.placeholder.com/393",
                  "type": {
                    "name": "photo",
                    "id": 6.027456183070403
                  },
                  "url": "https://via.placeholder.com/393"
                  }
                ],
                "total": 94843897.87201285
              }
              )
          }, 200)
        })
      default:
        throw new Error('Unknown address')
    }
  }
}

const contentTypePath = require('../../../public/img/icons/icon.svg');
const cards = document.querySelector('.card') as HTMLElement;

interface Content {
  contents: [];
  total: number;
}

api.get('/contents')
  .then((contents: Content) => console.log(contents.contents));

api.get('/contents')
  .then((contents: Content) => {
    const content = (contents.contents);
    for (let i:number = 0; i < content.length; i +=1 ) {
      generateCards(document.querySelector(".card__list"), content[i], contentTypePath);
    }
  });

  interface Cards {
    url: string, 
    name: string,
    id: string,
    format: string,
    type: {
      name: string;
      id: number;
    }, 
    dateCreated: string, 
    author: {
      name: string;
      id: number
    }
    preview: string;
  }

cards.addEventListener('click', (e: Event) => {
  if ((<HTMLElement>e.target).className.includes('card__item')) {
    const id = (<HTMLElement>e.target).closest('li').getAttribute('data-id');
    // console.log((((<Element>e.target).parentElement)).parentElement);
    modalOpen();
    api.get('/contents')
      .then((contents: Content) => {
        const content = (contents.contents);
        for (let i:number = 0; i < content.length; i +=1) {
          const obj: Cards = content[i];
          console.log(id == obj.id)
            console.log((<HTMLElement>e.target).closest('li').getAttribute('data-id'))
            if (id == obj.id) {
              playerGenerate(document.querySelector('.modal__body'), obj, contentTypePath);
            }
        }
        // playerGenerate(document.querySelector('.modal__body'), `${content.type}`, url: string, format: string);
        modalClose();
      });
  }
});

// (async () => {
//   const contents = await fetch('http://localhost:8080/api/contents');
//   if (!contents.ok) {
// 		throw 'Ошибка '+ contents.status
// 	}
//   console.log(contents.json());
// 	return await contents.json();
// })();
