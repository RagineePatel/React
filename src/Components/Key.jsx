
const Key = () => {
    let sum = 0;
    const Add = () => {
        let a = [1, 2, 3, 4, 5, 6]
        for (let i = 0; i < a.length; i++) {
            sum = sum + a[i];
        }

        alert("sum is" + sum);
    }

    return (
        <div>
            <input type="text" onKeyPress={Add} />
        </div>
    );
};
export default Key;