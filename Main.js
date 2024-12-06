const systemInfo = require('./systemInfo');

console.log('--- System Information ---');

// Get the number of CPUs
const cpuCount = systemInfo.getNumberOfCPUs();
console.log(`Number of CPUs: ${cpuCount}`);

// Get the system architecture and total memory
const systemDetails = systemInfo.getSystemArchitectureAndMemory();
console.log(`System Details: ${systemDetails}`);

// Check if the system has enough memory for a specific requirement
const requiredMemory1 = 512; // 512 MB
const hasMemory1 = systemInfo.hasEnoughMemory(requiredMemory1);
console.log(`Does the system have at least ${requiredMemory1} MB? ${hasMemory1 ? 'Yes' : 'No'}`);

const requiredMemory2 = 1024 * 1024; // 1 TB
const hasMemory2 = systemInfo.hasEnoughMemory(requiredMemory2);
console.log(`Does the system have at least ${requiredMemory2} MB? ${hasMemory2 ? 'Yes' : 'No'}`);
