module.exports = (app) => {
    require('./router/admin.js')(app)
    require('./router/default.js')(app)
}