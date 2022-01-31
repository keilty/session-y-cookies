const { validationResult } = require('express-validator')

module.exports = {
    index: (req, res, next) => {
        res.render('index');
      },

    processIndex: (req, res) => {
      const errors = validationResult(req)

      if (errors.isEmpty()) {
        const {name, color, email, age} = req.body

        req.session.bgColor = color
        res.locals.bgColor = color
        req.session.userName = name

        if (req.body.recordar !== undefined) {
          res.cookie('color', color, {maxAge: 120*1000})
        }

        res.render('index', {name, color, email, age})

      } else {

        res.render('index', 
        {errors: errors.mapped(),
         old: req.body})
        console.log(errors);
      }

    },

    user: (req, res) => {
      res.locals.bgColor = req.session.bgColor;
      res.render('user', {userName: req.session.userName})
    }
}

