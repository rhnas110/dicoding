const initialMemoryUsage = process.memoryUsage().heapUsed;
const name = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0, len = 10000; i < len; i++) {}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${name}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);
