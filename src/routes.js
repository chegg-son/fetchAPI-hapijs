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
                data1: 'ini sebuah percobaan'
            }
            // return h.response({ data1: props.data1 }).code(200)
            const response = h.response({
                data1: props.data1
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
