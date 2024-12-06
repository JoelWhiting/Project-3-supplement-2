const systemInfo = require('../systemInfo');

describe('SystemInfo Functions', () => {
    test('should return the number of CPUs on the machine', () => {
        const cpuCount = systemInfo.getNumberOfCPUs();
        expect(cpuCount).toBeGreaterThan(0);
    });

    test('should return system architecture and memory details', () => {
        const info = systemInfo.getSystemArchitectureAndMemory();
        expect(info).toContain('Architecture');
        expect(info).toContain('Memory');
    });

    test('should check if enough memory is available', () => {
        expect(systemInfo.hasEnoughMemory(512)).toBe(true);
        expect(systemInfo.hasEnoughMemory(1024 * 1024 * 1024)).toBe(false);
    });
});
