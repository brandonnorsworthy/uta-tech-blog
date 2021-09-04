const router = require('express').Router();
const { User, Post, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');
const moment = require('moment')

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      limit: 50,
      include: [
        { model: User },
      ],
    });

    const posts = dbPostData.map((element) =>
    element.get({ plain: true })
    );

    posts.forEach(element => {
      element.date_created = moment(element.date_created).format('m/d/y');
    });

    res.render('homepage', {
      posts: posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id);

    const posts = dbPostData.get({ plain: true });
    res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;
