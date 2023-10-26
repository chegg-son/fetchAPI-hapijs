/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const testRoute = [
    {
        // bagian render HTML dari GET "/"
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.view('index', {
                title: 'Percobaan EJS dengan API'
            })
        }
    },
    {
        // bagian request data API
        method: 'GET',
        path: '/getData1',
        handler: (request, h) => {
            const props = {
                data1: 'ini merupakan data1 dari API',
                data2: 'ini merupakan data2 dari API',
                data3: 'ini merupakan data3 dari API'
            }

            const response = h.response({
                data1: props.data1,
                data2: props.data2,
                data3: props.data3
            })
            response.code(200)

            return response
        }
    },
    {
        method: 'GET',
        path: '/public/js/{path*}',
        handler: {
            file: 'js/main.js'
        }
    }
]

module.exports = testRoute
