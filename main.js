/*
    main.js
    AUTHOR:     William Hall
    CREATED:    12/10/2018
    DESC:       entry point of the electron app
        * Opens the Electron app and SQLite Database
        * Handles the NodeJS event queue
        * Closes the Electon app and SQLite Database
*/

/* MODULES */
    const { app, BrowserWindow }    = require ("electron");
    const sqlite3                   = require ("sqlite3").verbose();

/* GLOBALS */
    let win; // this global reference revents the window from closing automatically
    let db = new sqlite3.Database('./db/sourcebook.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the sourcebook database.');
    });

/* FUNCTIONS */
function createWindow () {
    // create a new browser window
    win = new BrowserWindow ({ width:800, height:600 });

    // locate the index.html of the app
    win.loadFile ("enchiridion/index.html");

    // open the devtools
        // win.webContents.openDevTools ();

    // emitted when the browser is closed
    win.on ("closed", () => {
        win = null; // dereference the window object
        /*
            Usually, you would store windows in an array if your app supports
            multiple windows, so this is the only case when you should delete
            the 'win' element like this.
        */

        db.close((err) => {  // close the SQlite database
            if (err) {
                return console.error(err.message);
            }
            console.log('Closed the database connection.\n\n');
        });
    });
}

/* RUN IT! */
app.on("ready", createWindow);
