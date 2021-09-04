const { Post } = require('../models');

const postdata = [
    {
        title:"the sjws have taken everything from me. my dignity. my happiness. and they pretend to like bad things",
        content:"Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor",
        user_id:2,
    },
    {
        title:"i think we take it for granted that i illegally torrent communism",
        content:"We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.",
        user_id:4,
    },
    {
        title:"im horrible. im terrible. i pretend to like mysterious unsourced meat",
        content:"Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag.",
        user_id:4,
    },
    {
        title:"we need to start a fundraiser in order to fund fursonas",
        content:"De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.	",
        user_id:4,
    },
    {
        title:"it turns out that vaccines actually cause you to think about death",
        content:"Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye.	",
        user_id:6,
    },
    {
        title:"im not a person. im a bunch of legos and i endorse it",
        content:"Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake.	",
        user_id:6,
    },
    {
        title:"slugs dont spy on dragons",
        content:"Just say anything, George, say what ever's natural, the first thing that comes to your mind. Take that you mutated son-of-a-bitch. My pine, why you. You space bastard, you killed a pine. You do? Yeah, it's 8:00. Hey, McFly, I thought I told you never to come in here.",
        user_id:7,
    },
    {
        title:"do not fear for the end is coming soon. we can revel in the thick clotted mud of the fields. we can hide from adam sandler?",
        content:"Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.	",
        user_id:7,
    },
    {
        title:"a little known fact is that there is a worm version of every holiday. for example on worm valentines day we celebrate worm love and create shrimp",
        content:"Busey ipsum dolor sit amet. Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later. I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning.It's OK to get Rib-grease on your face, because you're allowing people to see that you're proud of these ribs.",
        user_id:8,
    },
    {
        title:"do not fear for the end is coming soon",
        content:"Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.	",
        user_id:9,
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
