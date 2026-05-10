export function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

export function randomObstacleTime() {
    return Math.random() * 1500 + 1000;
}
