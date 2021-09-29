<template>
  <div>
        <!-- Tabla de datos-->
        <div><h1 class="text-center">Listado de productos</h1></div>
        <v-container>
        <v-app id="inspire">
        <v-simple-table
        fixed-header
        height="500px"
        >
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">
                ID
                </th>
                <th class="text-left">
                Nombre
                </th>
                <th class="text-left">
                Marca
                </th>
                <th class="text-left">
                Fecha de vencimiento
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in listado"
                :key="item.name"
            >
                <td>{{ item.id }}</td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.marca }}</td>
                <td>{{ item.fecha }}</td>
                <td > 
                    <v-btn fab small color="primary" class="mx-0" >
                    <v-icon>mdi-pencil </v-icon>
                    </v-btn>
                </td>
                <td >
                    <v-btn fab small color="error" >
                    <v-icon>mdi-delete </v-icon>
                    </v-btn>
                </td>
                
            </tr>
            </tbody>
        </template>
        </v-simple-table>
    </v-app>
        </v-container>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                listado: [
                    {
                    id:'00001',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00002',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00003',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00004',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00005',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00006',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00007',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00008',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00009',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00010',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                ]
               
            };
        }
    }
</script>