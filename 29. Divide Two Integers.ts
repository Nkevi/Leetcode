function divide(dividend: number, divisor: number): number {
    const int32Min: number = -2147483648;
    const int32Max: number = 2147483647;

    if (divisor === 0) return int32Max;
    if (dividend === int32Min && divisor === -1) {
        return int32Max;
    }

    const sign = dividend < 0 !== divisor < 0 ? -1 : 1;
    let dividendAbs = Math.abs(dividend);
    const divisorAbs = Math.abs(divisor);
    let result = 0;

    while (dividendAbs >= divisorAbs) {
        let currentDivisor = divisorAbs;
        let currentMultiple = 1;
        while (currentDivisor <= dividendAbs >> 1) {
            currentDivisor <<= 1;
            currentMultiple <<= 1;
        }

        dividendAbs -= currentDivisor;
        result += currentMultiple;
    }

    const resultWithSign = sign === 1 ? result : -result;

    if (resultWithSign > int32Max) {
        return int32Max;
    } else if (resultWithSign < int32Min) {
        return int32Min;
    } else {
        return resultWithSign;
    }
}
