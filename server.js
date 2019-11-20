// const express = require('express');

// const app = express();

// app.get('/', (req, res) => res.send('API RUNNING'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

const express = require('express');
const gatsbyExpress = require('gatsby-plugin-express');
const app = express();

// serve static files before gatsbyExpress
app.use(express.static('public/'));
app.use(
  gatsbyExpress('config/gatsby-express.json', {
    publicDir: 'public/',
    template: 'public/404/index.html',

    // redirects all /path/ to /path
    // should be used with gatsby-plugin-remove-trailing-slashes
    redirectSlashes: true,
  }),
);
