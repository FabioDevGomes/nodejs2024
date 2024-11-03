import amqp from "amqplib";

async function main() {
  const connection = await amqp.connect({
    hostname: 'localhost',
    port: 5672,
    username: 'guest',
    password: 'guest'
  })
}


main();