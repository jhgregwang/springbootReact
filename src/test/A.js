import B from "./B";


const A = () => {
    const f = (v) => {
        let sum1 = 0;
        for(let i of v){
            sum1 += i;
        }
        return sum1;
    };

    const g = (ds) => {
        //{ a : { "b" : [1,2,3,4,5,6,11] } }
        
        return 1
    };

    return (
        <div>
            A<B a="홍길동" b="김개똥" c={f} d={g}></B>
        </div>
    )
}
export default A;