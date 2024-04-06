
class Graph<T>{
    // 顶点
    vertexes: T[] = []
    // 边
    adjList: Map<T, T[]> = new Map()

    /**
     * @description 添加顶点
     */
    addVertex(vertex: T): void {
        this.vertexes.push(vertex)
        console.log(`🚀🚀🚀🚀🚀-> in index.ts on 13`,this.vertexes)
        // 创建连接表
        this.adjList.set(vertex, [])

    }

    addEdge(v1: T, v2: T): void {
        this.adjList.get(v1)?.push(v2)
        this.adjList.get(v2)?.push(v1)
    }

    traverse(){
        this.vertexes.forEach(v => {
            console.log(`${v} -> `, this.adjList.get(v))
        })
    }

    /**
     * @description 广度优先
     */
    bfs(){
        if(this.vertexes.length === 0) return;

        const queue: T[] = [];
        // 2. 创建队列结构访问每一个节点
        queue.push(this.vertexes[0])

        /// 3.
        const visited = new Set<T>()
        visited.add(this.vertexes[0])

        while(queue.length){
            const vertex = queue.shift()
            console.log(`🚀🚀🚀🚀🚀-> in index.ts on 45`,vertex)
        }
    }
}

const graph = new Graph<string>()
for (let i = 65; i < 79; i++) {
    const char = String.fromCharCode(i)
    graph.addVertex(char)
}

graph.addEdge('A', 'B')
graph.addEdge('A','C')
graph.addEdge('A', 'D')
graph.addEdge( 'C', 'D')
graph.addEdge( 'C', 'D')
graph.addEdge( 'D' , 'G')
graph.addEdge( 'D' , 'H')
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');

graph.traverse()
