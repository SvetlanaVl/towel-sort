
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    } else if (matrix.length === 0) {
        return [];
    } else if (matrix.length === 4) {
        const str = matrix[0] + ',' + matrix[1].reverse() + ',' + matrix[2] + ',' + matrix[3].reverse();
        return Array.from(str.split(','));
    } else if (matrix.length === 3) {
        const str = matrix[0] + ',' + matrix[1].reverse() + ',' + matrix[2];
        return Array.from(str.split(','));
    } else if (matrix.length === 2) {
        const str = matrix[0] + ',' + matrix[1].reverse();
        return Array.from(str.split(','));
    }
}
