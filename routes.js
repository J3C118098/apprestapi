'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/read')
        .get(jsonku.tampilsemuamahasiswa);

    app.route('/read/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/insert')
        .post(jsonku.tambahMahasiswa);
}