/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const testRoute = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.view('index', {
                title: 'My EJS Page'
            })
        }
    },
    {
        method: 'GET',
        path: '/getData1',
        handler: (request, h) => {
            const props = {
                data1: 'ini merupakan data1 dari API',
                data2: 'ini merupakan data2 dari API',
                data3: 'ini merupakan data3 dari API'
            }
            // return h.response({ data1: props.data1 }).code(200)
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
        path: '/public/js/main.js',
        handler: {
            file: 'js/main.js'
        }
    }
]

module.exports = testRoute
