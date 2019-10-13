
const port = 5000;

const server = express();

server.get('/hobbitses', (req, res) => {
    res.send('Hello precious hobbitses');
});

server.listen(port, hostname, () => {
    console.log(`server listening on ${port}`);

})