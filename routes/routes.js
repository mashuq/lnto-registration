module.exports = function (server) {

    server.route({
        method: 'GET',
        path: '/about',
        handler: function (request, h) {

            var data = {
                message: 'Curriculum Microservice'
            };

            return data;
        }
    });

}