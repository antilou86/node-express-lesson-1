const express = require('express');
const port = 5000;

const server = express();
server.use(express.json());

let hobbits = [
    {
      id: 1,
      name: 'Bilbo Baggins',
      age: 111,
    },
    {
      id: 2,
      name: 'Frodo Baggins',
      age: 33,
    },
  ];
  let nextId = 3;

server.get('/hobbits', (req, res) => {
    //query string parameters get added to req.query
    const sortField = req.query.sortby || 'id';
   
  
    // apply the sorting
    const response = hobbits.sort(
      (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
    );
  
    res.status(200).json(response);
  });


  server.post('/hobbits', (req, res) => {
    const hobbit = req.body;
    hobbit.id = nextId++;
  
    hobbits.push(hobbit);
  
    res.status(201).json(hobbits);
  });


server.put('/hobbits', (req, res) => {
    res.status(200).json({url: '/hobbits', operation: 'put'});
});

server.delete('/hobbits/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params)
    // or we could destructure it like so: const { id } = req.params;
    res.status(200).json({
      url: `/hobbits/${id}`,
      operation: `DELETE for hobbit with id ${id}`,
    });
  });


server.listen(port, () => {
    console.log(`server listening on ${port}`);

})