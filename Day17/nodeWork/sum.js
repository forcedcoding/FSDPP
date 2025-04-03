const sum = (...arr) => {
    const ans = arr.reduce((acc, curr) => {
        acc += curr;
        return acc;
    },0);

    return ans;
};

module.exports = sum;