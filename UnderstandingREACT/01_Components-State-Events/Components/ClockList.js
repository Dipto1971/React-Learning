import Clock from './Clock';
export default function ClockList({quantities = {}}) {
    return (
        <div>
        {
            quantities.map((ClockNum) => (
                    <Clock key={ClockNum} serial={ClockNum} />
            )
            )}
       </ div>
    );
}