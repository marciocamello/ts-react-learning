type RandomNumberType = {
    value: number;
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean;
    isPositive?: never;
    isZero?: never;
}

type Zero = RandomNumberType & {
    isZero: boolean;
    isPositive?: never;
    isNegative?: never;
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) => {
    return (
        <div>
            <h2>Random number</h2>
            <p>
                {value} {isPositive && 'is positive'} {isNegative && 'is negative'} {''}
                {isZero && 'is zero'}
            </p>
        </div>
    );
};