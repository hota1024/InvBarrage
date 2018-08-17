export default {
    getAngle (x1, y1, x2, y2) {
        return (atan((x1 - x2) / (y1 - y2)) + (y2 < y1) * -180 + 90 + 180) * -1
    }
}