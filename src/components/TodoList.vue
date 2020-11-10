<template>
    <div>
        <h1>Listado de todos</h1>
        <ul>
            <li v-for ="todo in todos" :key=todo.id>
                {{todo.name}} - {{todo.status}} 
                - 
                <router-link :to="{name: 'TodoEdit', params: {id: todo.id}}">Editar</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import{db} from '../firebase'
    export default {
        name: "TodoList",
        data(){
            return {
                todos: []}
        },
        created(){
            this.listTodos();
        },
        methods: {
            async listTodos(){
                const data = await db.collection("todos").get();
                this.todos = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(this.todos)
            }
        },
    }
</script>