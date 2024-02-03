import Queue from "../index";

const names = ['1','2','3','4','5','6','7']

function hotPotato(names: string[], num: number){
    const queue = new Queue<string>()
    for(const name of names){
        queue.enqueue(name)
    }

    while(queue.size > 1){
        for(let i = 1; i < num; i++){
            const name = queue.dequeue()
            queue.enqueue(name)
        }
        const name =  queue.dequeue()
        console.log(`🚀🚀🚀🚀🚀-> in index.ts on 17`,name)
    }
    return queue.dequeue()
}
// const idx = hotPotato(names,6)
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 21`,idx)

function iceBreakingGame(num: number, target: number) {
    console.time()
    const queue = new Queue<number>()
    for (let i = 0 ; i < num; i++) {
        queue.enqueue(i)
    }
    while(queue.size > 1) {
        for (let i = 1; i < target; i++) {
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }
    console.timeEnd()
    return queue.dequeue()
}
const idx = iceBreakingGame(1000,4)
console.log(`🚀🚀🚀🚀🚀-> in index.ts on 39`,idx)

// function iceBreakingGame(num: number, target: number) {
//     const queue = []
//     for (let i = 0 ; i < num; i++) {
//         queue.push(i)
//     }
//     while(queue.length > 1) {
//         for (let i = 1; i < target; i++) {
//             queue.push(queue.shift())
//         }
//         queue.shift()
//     }
//     return queue.shift()
// }
// const idx = iceBreakingGame(7,4)
// console.log(`🚀🚀🚀🚀🚀-> in index.ts on 39`,idx)


/**
 * @description 动态规划
 */
function iceBreakingGame1(num: number, target: number){
    let position = 0;
    console.time()
    for(let i = 2; i <= num; i++){
        position = (position + target) % i
    }
    console.timeEnd()
    return position
}

console.log(`🚀🚀🚀🚀🚀-> in index.ts on 72`,iceBreakingGame1(1000,4))
