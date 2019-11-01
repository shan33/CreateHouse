
// this is a timer
function Timer(props) {
    const [count, setCount] = useState(0);
    function addCount() {
        setCount(++count);
    }
    return <div><h3>{count}</h3><button onClick={addCount}>+</button></div>
}

export {Timer};