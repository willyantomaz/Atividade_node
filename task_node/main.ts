import app from './app'

function main() {
    app.listen(300, 'localhost', ()=> {
        console.log('Server running at port 300')
    })
}

main()