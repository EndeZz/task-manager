  const api = {
    get (url: string) {
      switch (url) {
        case '/contents':
          return new Promise((resolve) => {
            setTimeout(() => {
                resolve([ {
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
                    "preview": "preview",
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
                    "preview": "est in velit ea",
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
                    "id": 64128220.52860066,
                    "name": "sint Du",
                    "preview": "est in velit ea",
                    "type": {
                      "name": "photo",
                      "id": 6.027456183070403
                    },
                    "url": "https://via.placeholder.com/393"
                    },
                    {
                    "author": {
                      "name": "name",
                      "id": 1.4658129805029452
                    },
                    "dateCreated": "1944-03-15T01:05:43.592Z",
                    "format": "mp3",
                    "id": 64128220.52860066,
                    "name": "sint Du",
                    "preview": "est in velit ea",
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
                    "id": 64128220.52860066,
                    "name": "sint Du",
                    "preview": "est in velit ea",
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
                    "format": "mp4",
                    "id": 64128220.52860066,
                    "name": "sint Du",
                    "preview": "est in velit ea",
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
                    "id": 64128220.52860066,
                    "name": "sint Du",
                    "preview": "est in velit ea",
                    "type": {
                      "name": "photo",
                      "id": 6.027456183070403
                    },
                    "url": "https://via.placeholder.com/393"
                    }
                  ],
                  "total": 94843897.87201285
                }
                ])
            }, 200)
          })
        default:
          throw new Error('Unknown address')
      }
    }
  }
