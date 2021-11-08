import { IObjAudio } from './CardsAudio/CardsAudio';
import { IObjPhoto } from './CardsPhoto/CardsPhoto';
import { IObjVideo } from './CardsVideo/CardsVideo';
import { ICardsTask } from './CardsTask/CardsTask';
import { ICardsUser } from './CardsUser/CardsUser';
import { IBlockNotifications } from './BlockNotifications/BlockNotifications';
import { IPublishContent } from './PublishContent/PublishContent';
import { IBlockComments } from './BlockComments/BlockComments';
import { ISelect } from './Select/Select';

const BLOCK_COMMENTS: Array<IBlockComments> = [
    {
        id: 1,
        src: '/public/images/task_result/ava-sheglov.svg',
        author: 'Вы',
        message: 'Задача организации, в особенности же новая модель организационной',
        'time-date': '12:11 14.02.2020',
    },
    {
        id: 2,
        src: '/public/images/task_result/ava-shukin.svg',
        author: 'Станислав Щукин',
        message: 'Товарищи! укрепление и развитие структуры требуют определения и уточнения новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки направлений прогрессивного развития.',
        'time-date': '09:51 14.02.2020',
    },
    {
        id: 3,
        src: '/public/images/task_result/ava-sheglov.svg',
        author: 'Вы',
        message: 'Таким образом консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует',
        'time-date': '09:51 13.02.2020',
    },
];

type Urls = {
    main: string;
    tasks: string;
    users: string;
};

const URLS: Urls = {
    main: 'index.html',
    tasks: 'tasks.html',
    users: 'users.html',
};

const PUBLISH_CONTENT: Array<IPublishContent> = [
    {
        id: 1,
        src: '/public/images/publish/1.png',
        name: 'video_594-19.avi',
        'time-date': '09:15 11.02.2020',
    },
    {
        id: 2,
        src: '/public/images/publish/2.png',
        name: 'video_594-20.avi',
        'time-date': '09:15 11.02.2020',
    },
    {
        id: 3,
        src: '/public/images/publish/3.png',
        name: 'video_594-21.avi',
        'time-date': '09:15 11.02.2020',
    },
    {
        id: 4,
        src: '/public/images/publish/4.png',
        name: 'video_594-22.avi',
        'time-date': '09:15 11.02.2020',
    },
    {
        id: 5,
        src: '/public/images/publish/1.png',
        name: 'video_594-23.avi',
        'time-date': '09:15 11.02.2020',
    },
];

const CARDS: Array<IObjAudio | IObjPhoto | IObjVideo> = [
    {
        id: 1,
        type: 'video',
        link: '',
        source: '/public/videos/01.mp4',
        poster: '/public/videos/preview/01.png',
        description: 'Видео о воспоминаниях мужчины и женщины',
        duration: '02:31',
        title: 'Название повседневная практика показывает',
        author: 'Аркадий Юрченко',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 2,
        type: 'photo',
        link: '',
        source: '/public/images/cards/01.webp',
        img: '/public/images/cards/preview/01.jpg',
        description: 'Фотография с изображением берега моря и горами вдали',
        title: 'Название равным образом начало повседневной работы которая так и манит взять её в руки и отработать по полной, до конца',
        author: 'Оскар Калинин',
        'time-date': '15:41 14.02.2020',
    },
    {
        id: 3,
        type: 'audio',
        link: '',
        source: '/public/audio/01.wav',
        img: '/public/images/cards/sound.svg',
        description: 'Позитивная песня',
        duration: '02:31',
        title: 'Какая-то хорошая песенка...',
        author: 'Алексей Киселев',
        'time-date': '11:20 06.10.2021',
    },
    {
        id: 4,
        type: 'photo',
        link: '',
        source: '/public/images/cards/02.webp',
        img: '/public/images/cards/preview/02.jpg',
        description: 'Фотография аиста летящего над рекой близко к земле',
        title: 'Название равным образом начало повседневной работы',
        author: 'София Лебедева',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 5,
        type: 'video',
        link: '',
        source: '/public/videos/02.mp4',
        poster: '/public/videos/preview/02.png',
        description: 'Видео про жизнь мужчины от празднования рождества до следующего рождества',
        duration: '02:31',
        title: 'Название повседневная практика показывает',
        author: 'Альбина Ткаченко',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 6,
        type: 'photo',
        link: '',
        source: '/public/images/cards/03.webp',
        img: '/public/images/cards/preview/03.jpg',
        description: 'Фотография старой дороги уходящей вдаль к горам',
        title: 'Название повседневная практика показывает',
        author: 'Данил Плотников',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 7,
        type: 'audio',
        link: '',
        source: '/public/audio/02.wav',
        img: '/public/images/cards/sound.svg',
        description: 'Песня',
        duration: '02:31',
        title: 'Еще одна песенка, хорошо...',
        author: 'Алексей Киселев',
        'time-date': '11:23 06.10.2021',
    },
    {
        id: 8,
        type: 'photo',
        link: '',
        source: '/public/images/cards/04.webp',
        img: '/public/images/cards/preview/04.jpg',
        description: 'Фото букета цветов в вазе',
        title: 'Название повседневная практика показывает',
        author: 'Оскар Калинин',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 9,
        type: 'video',
        link: '',
        source: '/public/videos/03.mp4',
        poster: '/public/videos/preview/03.png',
        description: 'Видео анимироанное с норой под деревом',
        duration: '02:31',
        title: 'Название повседневная практика показывает',
        author: 'Аркадий Юрченко',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 10,
        type: 'photo',
        link: '',
        source: '/public/images/cards/05.webp',
        img: '/public/images/cards/preview/05.jpg',
        description: 'Фото травы и цветов',
        title: 'Название повседневная практика показывает',
        author: 'Оскар Калинин',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 11,
        type: 'video',
        link: '',
        source: '/public/videos/04.mp4',
        poster: '/public/videos/preview/04.png',
        description: 'Видео о собственной лени',
        duration: '02:31',
        title: 'Название повседневная практика показывает',
        author: 'Аркадий Юрченко',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 12,
        type: 'photo',
        link: '',
        source: '/public/images/cards/06.webp',
        img: '/public/images/cards/preview/06.jpg',
        description: 'Фотография девушки',
        title: 'Название повседневная практика показывает',
        author: 'Оскар Калинин',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 13,
        type: 'video',
        link: '',
        source: '/public/videos/05.mp4',
        poster: '/public/videos/preview/05.png',
        description: 'Видео парка рядом с дорогой',
        duration: '02:31',
        title: 'Название повседневная практика показывает',
        author: 'Аркадий Юрченко',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 14,
        type: 'photo',
        link: '',
        source: '/public/images/cards/07.webp',
        img: '/public/images/cards/preview/07.jpg',
        description: 'Фото реки между лесистыми берегами',
        title: 'Название повседневная практика показывает',
        author: 'Оскар Калинин',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 15,
        type: 'video',
        link: '',
        source: '/public/videos/06.mp4',
        poster: '/public/videos/preview/06.png',
        description: 'Видео страстного танца мужчины и женщины',
        duration: '02:31',
        title: 'Какой-то красивый танец...',
        author: 'Аркадий Юрченко',
        'time-date': '09:21 14.02.2020',
    },
    {
        id: 16,
        type: 'photo',
        link: '',
        source: '/public/images/cards/08.webp',
        img: '/public/images/cards/preview/08.jpg',
        description: 'Фото одинокого дерева',
        title: 'Название повседневная практика показывает',
        author: 'Оскар Калинин',
        'time-date': '09:21 14.02.2020',
    },
];

const CARDS_TASK: Array<ICardsTask> = [
    {
        id: 1,
        type: 'video',
        link: '',
        title: 'Название повседневная практика показывает',
        author: 'Аркадий Юрченко',
        date: '10.02.2020',
        status: 'В работе',
    },
    {
        id: 2,
        type: 'photo',
        link: '',
        title: 'Название равным образом начало повседневной работы',
        author: 'Эльза Калининa',
        date: '09.02.2020',
        status: 'Выполнено',
    },
    {
        id: 3,
        type: 'audio',
        link: '',
        title: 'Название с другой стороны начало повседневной работы по формиро',
        author: 'Дмитрий Румянцев',
        date: '08.02.2020',
        status: 'Ожидает согласования',
    },
    {
        id: 4,
        type: 'photo',
        link: '',
        title: 'Название равным образом начало повседневной работы',
        author: 'Гена Черемнов',
        date: '06.02.2020',
        status: 'Ожидает согласования',
    },
    {
        id: 5,
        type: 'video',
        link: '',
        title: 'Название повседневная практика показывает',
        author: 'Инесса Соловьёвa',
        date: '01.02.2020',
        status: 'Выполнено',
    },
];

const STATUSES: Array<ISelect> = [
    {
        id: 1,
        text: 'Любой',
        color: '#313131',
    },
    {
        id: 2,
        text: 'В работе',
        color: '#d663ff',
    },
    {
        id: 3,
        text: 'Ожидает согласования',
        color: '#2cccff',
    },
    {
        id: 4,
        text: 'Выполнено',
        color: '#97DC26',
    },
];

const TYPE_CONTENT: Array<ISelect> = [
    {
        id: 1,
        text: 'Видео',
        color: '#313131',
    },
    {
        id: 2,
        text: 'Аудио',
        color: '#313131',
    },
    {
        id: 3,
        text: 'Фото',
        color: '#313131',
    },
];

const ROLE: Array<ISelect> = [
    {
        id: 1,
        text: 'Контент-мейкер',
    },
    {
        id: 2,
        text: 'Менеджер',
    },
    {
        id: 3,
        text: 'Администратор',
    },
];

const LIST_USERS: Array<ISelect> = [
    {
        id: 1,
        text: 'Альбина Ткаченко',
        color: '#313131',
    },
    {
        id: 2,
        text: 'София Мельник',
        color: '#313131',
    },
    {
        id: 3,
        text: 'Инесса Соловьёвa',
        color: '#313131',
    },
    {
        id: 4,
        text: 'Оскар Калинин',
        color: '#313131',
    },
    {
        id: 5,
        text: 'Адам Галкин',
        color: '#313131',
    },
];

const USERS: Array<ICardsUser> = [
    {
        id: 1,
        'url-image': '/public/images/users/avatars/Inessa.png',
        name: 'Инесса Соловьева',
        email: 'inessa90@gmail.com',
        role: 'Контент-мейкер',
    },
    {
        id: 2,
        'url-image': '/public/images/users/avatars/Oscar.png',
        name: 'Оскар Калинин',
        email: 'oscar@gmail.com',
        role: 'Контент-мейкер',
    },
    {
        id: 3,
        'url-image': '/public/images/users/avatars/Albina.png',
        name: 'Альбина Ткаченко',
        email: 'albina_t@gmail.com',
        role: 'Менеджер',
    },
    {
        id: 4,
        'url-image': '/public/images/users/avatars/Adam.png',
        name: 'Адам Галкин',
        email: 'galkin@gmail.com',
        role: 'Администратор',
    },
    {
        id: 5,
        'url-image': '/public/images/users/avatars/Sofia.png',
        name: 'София Мельник',
        email: 'melnik_s@gmail.com',
        role: 'Менеджер',
    },
    {
        id: 6,
        'url-image': '/public/images/users/avatars/Inessa.png',
        name: 'Инесса Соловьева',
        email: 'inessa90@gmail.com',
        role: 'Контент-мейкер',
    },
];

const BLOCK_NOTIFICATIONS: Array<IBlockNotifications> = [
    {
        id: 1,
        'type-notifications': 'attachments',
        text_1: 'Аркадий Юрченко',
        text_2: 'загрузил контент в задаче',
        text_3: 'Название задачи',
        'time-date': '09:51 14.02.2020',
        'status-read': 'no-read',
    },
    {
        id: 2,
        'type-notifications': 'comment',
        text_1: '',
        text_2: 'Новый комментарий в задаче',
        text_3: 'Название задачи',
        'time-date': '08:51 14.02.2020',
        'status-read': 'no-read',
    },
    {
        id: 3,
        'type-notifications': 'video',
        text_1: 'Семен Щеглов',
        text_2: 'поручил вам новую задачу',
        text_3: '',
        'time-date': '15:17 13.02.2020',
        'status-read': 'no-read',
    },
    {
        id: 4,
        'type-notifications': 'audio',
        text_1: 'Семен Щеглов',
        text_2: 'поручил вам новую задачу',
        text_3: '',
        'time-date': '11:51 13.02.2020',
        'status-read': 'no-read',
    },
    {
        id: 5,
        'type-notifications': 'photo',
        text_1: 'Семен Щеглов',
        text_2: 'поручил вам новую задачу',
        text_3: '',
        'time-date': '11:51 13.02.2020',
        'status-read': 'no-read',
    },
    {
        id: 6,
        'type-notifications': 'comment',
        text_1: '',
        text_2: 'Новый комментарий в задаче',
        text_3: 'Название задачи',
        'time-date': '08:51 14.02.2020',
        'status-read': 'no-read',
    },
    {
        id: 7,
        'type-notifications': 'attachments',
        text_1: 'Аркадий Юрченко',
        text_2: 'загрузил контент в задаче',
        text_3: 'Название задачи',
        'time-date': '09:51 14.02.2020',
        'status-read': 'no-read',
    },
    {
        id: 8,
        'type-notifications': 'comment',
        text_1: '',
        text_2: 'Новый комментарий в задаче',
        text_3: 'Название задачи',
        'time-date': '08:51 14.02.2020',
        'status-read': 'no-read',
    },
];

export { URLS, LIST_USERS, STATUSES, ROLE, BLOCK_COMMENTS, BLOCK_NOTIFICATIONS, USERS, TYPE_CONTENT, CARDS, CARDS_TASK, PUBLISH_CONTENT };
