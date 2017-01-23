# Tennis League App
Web app to manage tennis leagues and matches.


### Prerequisites
>= Node v6.3.0

### How to run
`git clone https://github.com/tabrezakhtar/tennis-league-app.git`

`npm install`

`npm start`

### Tests
`npm test`

### If there are peer dependencies errors on installing, run:
`export PKG=eslint-config-airbnb;`
`npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"`
