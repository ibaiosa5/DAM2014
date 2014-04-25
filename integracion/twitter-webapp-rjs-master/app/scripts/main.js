require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        handlebars: '../bower_components/handlebars.js/dist/handlebars',
        pouchdb: '../bower_components/pouchdb/dist/pouchdb-nightly',
        'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev',
        quo : ['https://raw.githubusercontent.com/arkaitzgarro/EarthQuakeLungo/master/js/vendor/quo.debug',
                '../bower_components/quojs/quo'
            ],
        lungo : '../bower_components/lungo/lungo'
    },
    shim: {
        quo:{
            exports: '$$'
        },
        lungo: {
            deps : [
            'quo'
            ],
            exports : 'Lungo'
        },
        pouchdb: {
            exports : 'PouchDB'
        },
        handlebars: {
                exports : 'Handlebars'
        },
        'ydn-db': {
            exports : 'ydn'
        }
    }
});

require(['app'], function () {});
