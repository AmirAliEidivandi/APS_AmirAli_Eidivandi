const uid = () => {
    if (typeof window === "undefined") {
        const { performance } = require("perf_hooks");
        return performance.now().toString(36) + Math.random().toString(36).substr(2);
    } else {
        return performance.now().toString(36) + Math.random().toString(36).substr(2);
    }
};

const id = uid();
console.log(id);
// random 0 to 36 english word