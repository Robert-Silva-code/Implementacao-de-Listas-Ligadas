class Node {
    constructor(element, next = null) {
        this.element = element
        this.next = next
    }
}
class LinkedList {
    constructor(){
        this.head = null
        this._size = 0
    }
    //inserir no final
    append(element){
        const node = new Node(element)
        //lista vazia
        if (this.head === null) {
            this.head = node
            this._size++
            return
        }
        //lista com elementos
        let temp = this.head
        while(temp.next){
            temp = temp.next
        }
        temp.next = node
        this._size++
    }
    insert(position, element) {}
    remove(element){}
    removeAt(position){}
    indexOf(element){
        // Retornar um indice dado um elemento
        let temp = this.head
        let posicao = 0
        while(temp.next) {
            if (temp.element == element) {
                return posicao
            }
            posicao++
            temp = temp.next
        }
        return -1
    }
    toString(){
        if (this.isEmpty()) {
            return "Lista Vazia"
        }

        let texto = 'Elementos: '
        let temp = this.head
        while(temp.next) {
            texto += temp.element + " => "
            temp = temp.next
        }
        texto += temp.element
        return texto
        //implementar uma saída de dados da seguinte forma:
        //- Para lista [0, 10, 20, 30, 50] a saída deve ser 
        //  "Elementos: 0 => 10 => 20 => 30 => 50"
        //- Para lista vazia a saída deve ser
        // "Lista Vazia"
    }
    size(){
        //Retorne o tamanho
        return this._size
    }
    isEmpty(){
        //Retorne se a lista está vazia
        return this.head === null
    }
    clear(){
        //Limpa a lista
        this.head = null
        this._size = 0
    }
}

const lista = new LinkedList()

console.log(lista.isEmpty())
lista.append(0)
lista.append(10)
lista.append(20)
lista.append(30)
lista.append(50)
console.log(lista.size())
console.log(lista.toString())
console.log(lista.indexOf(30))
lista.clear()
console.log(lista.isEmpty())
console.log(lista.toString())