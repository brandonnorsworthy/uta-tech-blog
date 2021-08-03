const { Comment } = require('../models');

const commentdata = [
    {
        date_created:"4/9/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:1,
        post_id:1
    },
    {
        date_created:"5/13/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:3,
        post_id:2
    },
    {
        date_created:"5/14/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:5,
        post_id:2
    },
    {
        date_created:"5/16/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:7,
        post_id:2
    },
    {
        date_created:"5/16/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:1,
        post_id:2
    },
    {
        date_created:"7/14/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:5,
        post_id:3
    },
    {
        date_created:"9/8/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:6,
        post_id:4
    },
    {
        date_created:"11/3/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:7,
        post_id:5
    },
    {
        date_created:"11/4/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:8,
        post_id:5
    },
    {
        date_created:"11/5/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:9,
        post_id:5
    },
    {
        date_created:"11/6/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:10,
        post_id:5
    },
    {
        date_created:"12/25/2020",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:4,
        post_id:6
    },
    {
        date_created:"2/11/2021",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:5,
        post_id:6
    },
    {
        date_created:"2/12/2021",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:4,
        post_id:6
    },
    {
        date_created:"3/8/2021",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:3,
        post_id:7
    },
    {
        date_created:"3/12/2021",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:2,
        post_id:7
    },
    {
        date_created:"3/14/2021",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:1,
        post_id:7
    },
    {
        date_created:"5/19/2021",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:9,
        post_id:8
    },
    {
        date_created:"5/19/2021",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:6,
        post_id:9
    },
    {
        date_created:"5/20/2021",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:1,
        post_id:9
    },
    {
        date_created:"5/26/2021",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:4,
        post_id:10
    },
    {
        date_created:"5/27/2021",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        author_id:5,
        post_id:10
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
