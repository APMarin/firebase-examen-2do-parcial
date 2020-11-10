<template>
    <div>
        <h1>Crear todos</h1>

        <form @submit.prevent="addTodo"> 
            <p>
                Nombre de mi tarea:
                <input type = "text" v-model = "name">
            </p>

            <p>
                Estatus:
                <select v-model = "status">
                    <option value="pendiente">Pendiente</option>
                    <option value="terminada">Terminada</option>
                </select>
            </p>
            <button type="submit">Aceptar</button> 

        </form>

    </div>
</template>

<script>
    import{db} from '../firebase'
    import router from '../router'
    export default {
        name: "TodoCreate",
        data(){
            return {
                name : "",
                status : ""
            }
        },
        methods: {
            async addTodo(){
                await db.collection('todos').add(
                    {
                        name: this.name,
                        status: this.status,
                    }
                )
                this.name=""; this.status = "";
                router.push("/")
            }
        },
    }
</script>