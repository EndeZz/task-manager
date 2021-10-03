'use strict';

var utils = require('../utils/writer.js');
var DefaultController = require('../service/DefaultControllerService');

module.exports.authController_login = function authController_login (req, res, next, body) {
  DefaultController.authController_login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authController_logout = function authController_logout (req, res, next) {
  DefaultController.authController_logout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authController_refreshToken = function authController_refreshToken (req, res, next, body) {
  DefaultController.authController_refreshToken(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commentsController_create = function commentsController_create (req, res, next, body) {
  DefaultController.commentsController_create(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contentsController_create = function contentsController_create (req, res, next) {
  DefaultController.contentsController_create()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contentsController_getAll = function contentsController_getAll (req, res, next, page, count) {
  DefaultController.contentsController_getAll(page, count)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contentsController_remove = function contentsController_remove (req, res, next, id) {
  DefaultController.contentsController_remove(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.filesController_create = function filesController_create (req, res, next) {
  DefaultController.filesController_create()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.filesController_remove = function filesController_remove (req, res, next, id) {
  DefaultController.filesController_remove(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsController_getAll = function notificationsController_getAll (req, res, next) {
  DefaultController.notificationsController_getAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tasksController_create = function tasksController_create (req, res, next, body) {
  DefaultController.tasksController_create(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tasksController_get = function tasksController_get (req, res, next, id) {
  DefaultController.tasksController_get(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tasksController_getAll = function tasksController_getAll (req, res, next) {
  DefaultController.tasksController_getAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tasksController_remove = function tasksController_remove (req, res, next, id) {
  DefaultController.tasksController_remove(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tasksController_update = function tasksController_update (req, res, next, body, id) {
  DefaultController.tasksController_update(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersController_create = function usersController_create (req, res, next, body) {
  DefaultController.usersController_create(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersController_get = function usersController_get (req, res, next, id) {
  DefaultController.usersController_get(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersController_getAll = function usersController_getAll (req, res, next) {
  DefaultController.usersController_getAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersController_remove = function usersController_remove (req, res, next, id) {
  DefaultController.usersController_remove(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersController_update = function usersController_update (req, res, next, body, id) {
  DefaultController.usersController_update(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
