interface Cards {
  url: string, 
  name: string,
  id: number,
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



export default function generateCards(elem: HTMLElement, cards: Cards, contentTypePath: string) {
  const li = document.createElement('li') as HTMLElement;
  li.classList.add('card__item');
  li.classList.add(`${cards.type.name}`);
  li.setAttribute('data-id', `${cards.id}`);
  li.innerHTML = `
    <figure class = "card__item-wrapper">
      <img class="card__item-img" src=${cards.preview} alt="${cards.name}">
      <figcaption class="card-descr">
        <a class="cards__item-title" href="task.html">
            <div class="card__item-type content__box content__box--${cards.type.name}">
              <svg class="icon icon--${cards.type.name}">
                <use xlink:href=${contentTypePath}#${cards.type.name}-icon></use>
              </svg>
              <span class=content__box-text>${cards.name}</span>
            </div>
        </a>
        <p class="card__item-descr">${cards.name}</p>
        <div class="card__item-meta">
          <span class="card__item-author">${cards.author.name}</span>
          <time class="card__item-date" datetime=${cards.dateCreated}>${(new Date(cards.dateCreated)).toLocaleString()}</time>
        </div>
      </figcaption>
    </figure>
  </li>
  `;
  elem.append(li);
}
