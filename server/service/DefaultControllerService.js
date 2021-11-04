'use strict';


/**
 * Вход в систему
 *
 * body AuthLoginRequestDto 
 * returns AuthLoginResponseDto
 **/
exports.authController_login = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accessToken" : "accessToken",
  "refreshToken" : "refreshToken"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Выход из системы
 *
 * no response value expected for this operation
 **/
exports.authController_logout = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Обновление токена
 *
 * body AuthResfreshTokenRequestDto 
 * returns AuthLoginResponseDto
 **/
exports.authController_refreshToken = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accessToken" : "accessToken",
  "refreshToken" : "refreshToken"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Создать комментарий
 *
 * body CommentCreateRequestDto 
 * no response value expected for this operation
 **/
exports.commentsController_create = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Загрузить контент
 *
 * no response value expected for this operation
 **/
exports.contentsController_create = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Лента контента
 *
 * page BigDecimal Номер страницы
 * count BigDecimal Количество на страницу
 * returns ContentsResponseDto
 **/
exports.contentsController_getAll = function(page,count) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 5.962133916683182,
  "contents" : [ {
    "preview" : "preview",
    "dateCreated" : "2000-01-23T04:56:07.000+00:00",
    "author" : {
      "name" : "name",
      "id" : 1.4658129805029452
    },
    "name" : "name",
    "format" : "jpg",
    "id" : 0.8008281904610115,
    "type" : {
      "name" : "video",
      "id" : 6.027456183070403
    },
    "url" : "url"
  }, {
    "preview" : "preview",
    "dateCreated" : "2000-01-23T04:56:07.000+00:00",
    "author" : {
      "name" : "name",
      "id" : 1.4658129805029452
    },
    "name" : "name",
    "format" : "jpg",
    "id" : 0.8008281904610115,
    "type" : {
      "name" : "video",
      "id" : 6.027456183070403
    },
    "url" : "url"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Удалить контент
 *
 * id String ID
 * no response value expected for this operation
 **/
exports.contentsController_remove = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Загрузить файл
 *
 * no response value expected for this operation
 **/
exports.filesController_create = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Удалить файл
 *
 * id String ID
 * no response value expected for this operation
 **/
exports.filesController_remove = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Список уведомлений
 *
 * returns List
 **/
exports.notificationsController_getAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "task" : {
    "name" : "name",
    "id" : 6.027456183070403
  },
  "id" : 0.8008281904610115,
  "type" : "video",
  "message" : "message",
  "user" : {
    "name" : "name",
    "id" : 1.4658129805029452
  }
}, {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "task" : {
    "name" : "name",
    "id" : 6.027456183070403
  },
  "id" : 0.8008281904610115,
  "type" : "video",
  "message" : "message",
  "user" : {
    "name" : "name",
    "id" : 1.4658129805029452
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Создать задачу
 *
 * body TaskCreateUpdateRequestDto 
 * no response value expected for this operation
 **/
exports.tasksController_create = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Получить задачу
 *
 * id String ID
 * returns TaskResponseDto
 **/
exports.tasksController_get = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "dateCreated" : "2000-01-23T04:56:07.000+00:00",
  "comments" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "id" : 5.637376656633329,
    "message" : "message",
    "user" : {
      "name" : "name",
      "id" : 1.4658129805029452
    }
  }, {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "id" : 5.637376656633329,
    "message" : "message",
    "user" : {
      "name" : "name",
      "id" : 1.4658129805029452
    }
  } ],
  "contents" : [ {
    "preview" : "preview",
    "dateCreated" : "2000-01-23T04:56:07.000+00:00",
    "author" : {
      "name" : "name",
      "id" : 1.4658129805029452
    },
    "name" : "name",
    "format" : "jpg",
    "id" : 0.8008281904610115,
    "type" : {
      "name" : "video",
      "id" : 6.027456183070403
    },
    "url" : "url"
  }, {
    "preview" : "preview",
    "dateCreated" : "2000-01-23T04:56:07.000+00:00",
    "author" : {
      "name" : "name",
      "id" : 1.4658129805029452
    },
    "name" : "name",
    "format" : "jpg",
    "id" : 0.8008281904610115,
    "type" : {
      "name" : "video",
      "id" : 6.027456183070403
    },
    "url" : "url"
  } ],
  "author" : {
    "role" : {
      "name" : "admin",
      "id" : 5.962133916683182
    },
    "name" : "name",
    "id" : 1.4658129805029452,
    "avatar" : "",
    "email" : ""
  },
  "dateExpired" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "files" : [ {
    "dateCreated" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "format" : "doc",
    "id" : 6.027456183070403,
    "url" : "url"
  }, {
    "dateCreated" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "format" : "doc",
    "id" : 6.027456183070403,
    "url" : "url"
  } ],
  "id" : 0.8008281904610115,
  "type" : {
    "name" : "video",
    "id" : 6.027456183070403
  },
  "status" : {
    "name" : "inWork",
    "id" : 6.027456183070403
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Список задач
 *
 * returns List
 **/
exports.tasksController_getAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "executor" : {
    "name" : "name",
    "id" : 1.4658129805029452
  },
  "dateExpired" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : 0.8008281904610115,
  "type" : {
    "name" : "video",
    "id" : 6.027456183070403
  },
  "status" : {
    "name" : "inWork",
    "id" : 6.027456183070403
  }
}, {
  "executor" : {
    "name" : "name",
    "id" : 1.4658129805029452
  },
  "dateExpired" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : 0.8008281904610115,
  "type" : {
    "name" : "video",
    "id" : 6.027456183070403
  },
  "status" : {
    "name" : "inWork",
    "id" : 6.027456183070403
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Удалить задачу
 *
 * id String ID
 * no response value expected for this operation
 **/
exports.tasksController_remove = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Отредактировать задачу
 *
 * body TaskCreateUpdateRequestDto 
 * id String ID
 * no response value expected for this operation
 **/
exports.tasksController_update = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Создать пользователя
 *
 * body UserCreateUpdateRequestDto 
 * no response value expected for this operation
 **/
exports.usersController_create = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Получить пользователя
 *
 * id String ID
 * returns UserResponseDto
 **/
exports.usersController_get = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "role" : {
    "name" : "admin",
    "id" : 5.962133916683182
  },
  "name" : "name",
  "id" : 1.4658129805029452,
  "avatar" : "",
  "email" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Список пользователей
 *
 * returns List
 **/
exports.usersController_getAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "role" : {
    "name" : "admin",
    "id" : 5.962133916683182
  },
  "name" : "name",
  "id" : 1.4658129805029452,
  "avatar" : "",
  "email" : ""
}, {
  "role" : {
    "name" : "admin",
    "id" : 5.962133916683182
  },
  "name" : "name",
  "id" : 1.4658129805029452,
  "avatar" : "",
  "email" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Удалить пользователя
 *
 * id String ID
 * no response value expected for this operation
 **/
exports.usersController_remove = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Отредактировать пользователя
 *
 * body UserCreateUpdateRequestDto 
 * id String ID
 * no response value expected for this operation
 **/
exports.usersController_update = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

