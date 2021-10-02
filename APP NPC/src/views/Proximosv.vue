<template>
    <div>
        <!-- Tabla de datos-->
        <v-container>
            <v-row class="text-center">
                <v-col class="mb-4">
                    <h2 class="display-1 font-weight-bold">
                        Lista de productos a caducar</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col >
                    <v-simple-table fixed-header class="elevation-3" height="500px">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-center">ID</th>
                                    <th class="text-center">Marca</th>
                                    <th class="text-center">Nombre</th>
                                    <th class="text-center">Fecha de expedicion</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td class="text-center">A1</td>
                                    <td class="text-center">Parmalat</td>
                                    <td class="text-center">Leche</td>
                                    <td class="text-center">18/09/2021</td>
                                    <td > 
                                        <v-btn fab small color="primary" class="mx-3" >
                                            <v-icon>mdi-pencil </v-icon>
                                        </v-btn>
                                        <v-btn fab small color="error" >
                                            <v-icon>mdi-delete </v-icon>
                                        </v-btn>
                                    </td>

                                </tr>
                                <tr >
                                    <td class="text-center">A2</td>
                                    <td class="text-center">Alqueria</td>
                                    <td class="text-center">Leche</td>
                                    <td class="text-center">18/09/2021</td>
                                    <td > 
                                        <v-btn fab small color="primary" class="mx-3" >
                                            <v-icon>mdi-pencil </v-icon>
                                        </v-btn>
                                        <v-btn fab small color="error" >
                                            <v-icon>mdi-delete </v-icon>
                                        </v-btn>
                                    </td>

                                </tr>
                                <tr >
                                    <td class="text-center">A3</td>
                                    <td class="text-center">Colanta</td>
                                    <td class="text-center">Leche</td>
                                    <td class="text-center">18/09/2021</td>
                                    <td > 
                                        <v-btn fab small color="primary" class="mx-3" >
                                            <v-icon>mdi-pencil </v-icon>
                                        </v-btn>
                                        <v-btn fab small color="error" >
                                            <v-icon>mdi-delete </v-icon>
                                        </v-btn>
                                    </td>

                                </tr>
                            </tbody>
                        </template>

                    </v-simple-table>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                mostrar: false,
                desserts: [
                    {
                        ID: 'A1',
                        Marca: 'Parmalat',
                        Nombre: 'Leche',
                        Fecha:'18/09/2021'
                    },
                    {
                        ID: 'A2',
                        Marca: 'Alqueria',
                        Nombre: 'Leche',
                        Fecha:'18/09/2021'
                    }
                    
                ],
                icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
                ],
            };
        }
    }
</script>