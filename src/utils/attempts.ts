export const attempts = (fn: any, ...args: any) => (typeof fn === 'function' ? fn(...args) : fn);
