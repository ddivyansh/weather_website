1. path module:
    path module allows us to change paths of directories
    __dirname: current directory
    "../" : go back a level
    __filename : current file name
    CSS/functional js files/images : they're rendered statically, hence their path must be with respect to path passed to the code.
    ` app.use(express.static(stactic_path)) `

2. use method: 
    * it allows one to serve up the directories using static function of express.
    * It allows us to set up static assets.
    * if you want to serve static document, place it in public.
    * For dynamic pages (use dynamic template engine) & place the pages you want to serve up in views directory(By default your views need to be in views directory in order for the express to serve them up.)

3. using partials: 
    * they're the components that you want to repeat on multiple web-pages, 
    * for 404, the path is * which is given to us by express js, it's for everything else.
    ``` hbs.registerPartials('path') ```

4. rendering pages : using
```req.render('nameOfPage', { dynamicKeys : values}) ```
