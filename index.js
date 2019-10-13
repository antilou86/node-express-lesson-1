
const port = 5000;

const server = express();
server.use(express.json());

server.get('/hobbitses', (req, res) => {
    res.send('Hello precious hobbitses');
});

server.post('/hobbitses', (req, res) => {
    res.status(201).json({url: '/hobbitses', operation: 'POST'});
});

server.put('/hobbitses', (req, res) => {
    res.status(200).json({url: '/hobbitses', operation: 'put'});
});

server.delete('/hobbitses', (req, res) => {
    res.status(204);
});


server.listen(port, hostname, () => {
    console.log(`server listening on ${port}`);

})