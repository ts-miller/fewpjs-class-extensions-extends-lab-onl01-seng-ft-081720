class Polygon {
    constructor(sidesArray) {
        this.sides = sidesArray
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((acc, value) => {
            return acc + value
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            const [a, b, c] = this.sides
            if ( a + b > c && b + c > a && c + a > b ) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            if (this.sides.every(s => s === this.sides[0])) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    get area() {
        debugger
        if (this.isValid) {
            return this.sides[0] ** 2
        }
    }
}