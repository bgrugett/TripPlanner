
---

Database relations
`Hotel.belongsTo(Place)` will put a placeId on the hotel instance
The setup of the seed file is what tells us this is what we need!

---

Why static routes?

 - static routes give incoming requests access to files in your server. You don't want outside sources or users to be able to ask for your server files! Static routes say "Look for any files that are requested in /public or /node_modules"

 We could make this middleware ourselves, though it wouldn't be as robust. It would look something like this (I doubt this would work right off the bat, but it illustrates the principles):
 ```
   //note: assuming a promisified fs module

   app.use('/public/:filepath', function(req, res, next) {
     const filepath = req.params.filepath;
     const fullFilepath = path.join(__dirname, '/public', filepath)
     fs.exists(fullFilepath)
     .then(function(exists) {
        if(exists) {
          res.sendFile(fullFilepath);
        }
        else next();
      })
   })
 ```

---

How to store user authentication
 - You will learn more about this during Auther!
 - Mixture of cookies and libraries such as passport

---

Seeding the database - lat and lng

This property needs to be of type Sequelize.ARRAY(Sequelize.DOUBLE)
Doubles have 8-byte precision, while floats have 4-byte precision. Make sure you are using Double if your decimal number is very long.
Here are the [docs](http://docs.sequelizejs.com/en/latest/api/datatypes/)



-Look for resources on debugging structural problem?
  -You can map the module diagram out yourself, or I found this nifty looking [npm module](https://www.npmjs.com/package/module-structure).


-Can you make relations/foreign keys mandatory?
  -I found an answer to this [here](http://stackoverflow.com/questions/29993936/how-do-i-create-a-required-belongsto-association-using-sequelize).
  Essentially, the relation function, such as `belongsTo` takes an additional argument that is an object with a `foreignKey` property. You can specify whether it is allowed to be null inside that object.
  ```
  Hotel.belongsTo(Place, {
    foreignKey: {
      field: 'placeId',
      allowNull: false
    },
    onDelete: 'cascade'
  });
  ```


-does express.static take an array?
I can't seem to find any instances of this. Here is a line from the docs that suggest it's not possible: "To use multiple static assets directories, call the express.static middleware function multiple times."


