Skip to content
GitLab

Menu
Search GitLab
2
2
5
Help
Анна Уракова
fe-21-1
fe-21-1
Project information
Repository
Files
Commits
Branches
Tags
Contributors
Graph
Compare
Issues
34
Merge requests
22
Deployments
Packages & Registries
Wiki
Collapse sidebar
Учебный центр ЦВТ
Frontend
fe-21-1fe-21-1
Repository
aurakova-project-react
fe-21-1
client
pages
tasks
tasks.tsx
Анна Уракова's avatar
feat: перевод страниц на react+ts
Анна Уракова authored 1 hour ago
1f390fcd
 tasks.tsx  4.31 KB
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
import React, { useState } from 'react';
import Label from '../../components/label/label';
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';
import Select from '../../components/select/select';
import Task from '../../components/task/task';
import Button from '../../components/button-with-text/button-with-text';
import Calendar from '../../components/calendar/calendar';
import ModalDelete from '../../components/modal-delete/modal-delete';
import data from '../../../server/TaskListResponseDto.json';
import format from '../../utils/format';
import './tasks.scss';
import { useHistory } from 'react-router-dom';
export default function Tasks() {
  let [searchTask, setSearchTask] = useState({
    text: '' as string,
    date: '' as string,
    status: '' as string,
    type: [] as string[]
  })
  let [cardTask, setCardTask] = useState(data)
  let [isShowModal, setShowModal] = useState({ modal: false, id: 0 })
  function change(e: { target: HTMLInputElement }) {
    let { name, value, checked } = e.target;
    if (name === 'text') {
      setSearchTask({ ...searchTask, text: value })
    }
    if (name === 'type') {
      if (checked) {
        setSearchTask({ ...searchTask, type: [...searchTask.type, value] })
      }
      else {
        setSearchTask({ ...searchTask, type: searchTask.type.filter(item => item != value) })
      }
    }
  }
  function selected(name: string, value: string) {
    setSearchTask({ ...searchTask, [name]: value })
  }
  function formatDate2(day: Date | [Date, Date]) {
    setSearchTask({ ...searchTask, date: format(day) })
  }
  function formatDate1(e: { target: HTMLInputElement }) {
    setSearchTask({ ...searchTask, date: e.target.value })
  }
  function showDeleteMessage(id: number) {
    setShowModal({ modal: true, id: id });
  }
  function deleteTask(answer: boolean) {
    (answer)
      ? setCardTask(cardTask.filter(item => item.id !== isShowModal.id))
      : null
    setShowModal({ modal: false, id: 0 })
  }
  const history = useHistory();
  function redirect(page: string, id?: number) {
    const path = (id) ? `/${id}` : ''
    history.push(`/${page}${path}`)
  }
  return (
    <main className="main">
      <div className="container">
        <div className="search-tasks">
          <Label text='Поиск'>
            <Input placeholder="Введите название задачи или имя ответственного" name="text" type="search" svg='search' value={searchTask.text} onChange={(e: { target: HTMLInputElement }) => change(e)} />
          </Label>
          <Label text='Статус'>
            <Select type='status' placeholder='Выберите статус' name='status' onChange={selected} />
          </Label>
          <Label text='Срок выполнения'>
            <Calendar placeholder='Укажите дату' value={searchTask.date} editValue={(e: { target: HTMLInputElement }) => formatDate1(e)} selectDay={(day: Date | [Date, Date]) => formatDate2(day)} />
          </Label>
          <Label text='Тип контента'>
            <Checkbox type='type' name='type' onChange={(e: { target: HTMLInputElement }) => change(e)} />
          </Label>
        </div>
        <div className='control'>
          <Button type='new-task' text='Новая задача' click={() => redirect('task-new')} />
        </div>
        <div className="content-tasks">
          <ol className="content-tasks__list">
            {cardTask.map((item) => {
              if (((item.name.toLowerCase()).indexOf(searchTask.text.toLowerCase()) !== -1 || (item.executor.name.toLowerCase()).indexOf(searchTask.text.toLowerCase()) !== -1) && ((format(item.dateExpired).indexOf((searchTask.date).replace(/\//g, ".").replace(/\s/g, "")) !== -1) || searchTask.date === '') && ((searchTask.type).indexOf(item.type.name) !== -1 || searchTask.type.length === 0) && (item.status.name === searchTask.status || searchTask.status === '')) {
                return <Task task={item} key={item.id} delete={() => showDeleteMessage(item.id)} edit={() => redirect('task-new', item.id)} />
              }
              else return null
            }
            )}
          </ol>
        </div>
      </div>
      {(isShowModal.modal)
        ? <ModalDelete selectedAnswer={deleteTask} text='задачу' />
        : null
      }
    </main>
  )
}
