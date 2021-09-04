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
      order: [
        ['createdAt', 'DESC'],
      ]
    });

    const posts = dbPostData.map((element) =>
      element.get({ plain: true })
    );

    posts.forEach(element => {
      element.createdAt = moment(new Date(posts[0].createdAt).toISOString()).format('M/D/YYYY');
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
    res.render('post', { post, loggedIn: req.session.loggedIn });
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

router.get('/dashboard', withAuth, async (req, res) => {
  if (!(req.session.loggedIn)) {
    res.redirect('/');
    return;
  }
  try {
    const dbPostData = await Post.findAll({
      limit: 50,
      where: {
        user_id: req.session.user_id
      },
      include: [
        { model: User },
      ],
      order: [
        ['createdAt', 'DESC'],
      ]
    });

    const posts = dbPostData.map((element) =>
      element.get({ plain: true })
    );

    posts.forEach(element => {
      element.createdAt = moment(new Date(posts[0].createdAt).toISOString()).format('M/D/YYYY');
    });

    res.render('dashboard', { posts: posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

module.exports = router;
