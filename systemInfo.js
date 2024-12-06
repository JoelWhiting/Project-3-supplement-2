const os = require('os');

/**
 * Returns the number of CPUs on the machine.
 * @returns {number} Number of CPUs
 */
function getNumberOfCPUs() {
    return os.cpus().length;
}

/**
 * Retrieves the system architecture and total memory in megabytes.
 * @returns {string} A string describing architecture and memory
 */
function getSystemArchitectureAndMemory() {
    const architecture = os.arch();
    const totalMemory = Math.round(os.totalmem() / (1024 * 1024)); // Convert to MB
    return `Architecture: ${architecture}, Memory: ${totalMemory} MB`;
}

/**
 * Checks if the system has enough memory to allocate a specified amount.
 * @param {number} requiredMemoryInMB The required memory in megabytes
 * @returns {boolean} True if enough memory is available, false otherwise
 */
function hasEnoughMemory(requiredMemoryInMB) {
    const totalMemory = Math.round(os.totalmem() / (1024 * 1024)); // Convert to MB
    return totalMemory >= requiredMemoryInMB;
}

// Export the functions for testing
module.exports = {
    getNumberOfCPUs,
    getSystemArchitectureAndMemory,
    hasEnoughMemory,
};
