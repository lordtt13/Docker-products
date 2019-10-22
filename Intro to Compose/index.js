const express = require('express'),
redis = require('redis'),
process = require('process'),
app = express(),
port = 8081;
// connects to redis client 
client = redis.createClient({
    // traditionally, this would require a URL - since we are using docker-compose, we can use the name of the running docker service instead
    host: 'redis-server',

    // this is the default redis port number, which is the port the server will be running on within the container, not necessary with docker, but just to be thorough
    port: 6379
});

// sets creates the visits key, sets initial visits value to 0
client.set('visits', 0);

app.get('/', (req, res) =>{

    // breaks the process for testing purposes
    process.exit(0);

    // utilizes the visits key set above
    client.get('visits', (err, visits) =>{

        res.send('Number of visits is ' + visits);

        // saves an entry, under the key visits: numberOfVisitors
        client.set('visits', parseInt(visits) + 1);

        console.log('Number of visits:', visits)
    })
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})