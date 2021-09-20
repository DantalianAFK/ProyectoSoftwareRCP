<template>
  <div>
    
    <!-- Barra de navegacion-->
    <v-toolbar app color="blue" height="70">
        <v-app-bar-nav-icon @click="mostrar = !mostrar" dark></v-app-bar-nav-icon>
        <v-toolbar-title> </v-toolbar-title>
    </v-toolbar>
    <!-- Navigation drawer-->
    <v-navigation-drawer app v-model="mostrar" temporary absolute dark color="blue" class="text-center"
    >
        <v-list nav dense >
            <br>
            <v-list>
                <v-avatar>
                    <img
                        src="../assets/logo2.png"
                        alt="logo fresh food"
                    >
                </v-avatar>
            </v-list>
            <v-list-item-title class="display-1 font-weight-bold">FreshFood</v-list-item-title>
            
            <v-list-item-group  v-model="group">
                <br>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-title class="font-weight-bold">Registrar Producto</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-title class="font-weight-bold">Buscar productos</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-title class="font-weight-bold" >Productos caducados</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-title class="font-weight-bold font-si" >Productos proximos a caducar</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        
    </v-navigation-drawer>
    <!-- Tabla de datos-->
    <v-container>
       <v-row class="text-center">
           <v-col class="mb-4">
               <h2 class="display-1 font-weight-bold">
                   Lista de productos vencidos</h2>
           </v-col>
       </v-row>
        <v-row>
            <v-col >
                <v-simple-table fixed-header class="elevation-3">
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
   
    <v-footer  dark padless >
        <v-card flat tile class="blue white--text text-center " >
            <v-card-text class="mb-4">
                <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
                >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="pt-0 mb-4 ">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.  
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} 
            </v-card-text>
        </v-card>
    </v-footer>
    
    
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