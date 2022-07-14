<template>
    <div class="navbar-container">
        <div class="navbar-content">
            <router-link class="navbar-link" :to="{ name: 'home-view' }">
                <i class="fa-solid fa-house"></i>
            </router-link>
            <div class="navbar-link" @click="isOpen = true">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <router-link
                class="navbar-link"
                :to="{ name: 'products-favorites' }"
            >
                <i class="fa-solid fa-heart"></i>
            </router-link>
            <router-link class="navbar-link" :to="{ name: 'products-history' }">
                <i class="fa-solid fa-clock-rotate-left"></i>
            </router-link>
            <div class="navbar-link"  @click="isAccountOpen = true">
                <i class="fa-solid fa-circle-user"></i>
            </div>
        </div>
    </div>
      <modal v-if="isAccountOpen" @on:close="isAccountOpen = false">
                    <div class="modal-header">
                        <h1>Mi cuenta</h1>
                        <button class="btn btn-close" @click="isAccountOpen = false"><i class="fa-solid fa-circle-xmark"></i></button>
                    </div>
                    <div class="modal-body">
                        <div style="text-align:center">
                           <img width="150" src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" alt="">
                           <div style="background:rgb(74, 174, 84); color:white; padding:5px; border-radius:5px; width:100%; text-align: center;">
                            <i class="fa-solid fa-upload"></i> actualizar foto
                            </div> 
                        </div>
                        <div style="display: flex;
                        flex-wrap: wrap;
                        gap: 5px;
                        width: 100%;
                        justify-content: space-around;
                        padding: 10px;
                        align-items: center;
                        padding: 10px;
    gap: 10px;
    margin-top: 10px;">
                            <input style="flex-grow:1; padding:5px;font-size: 1rem;" type="text" placeholder="nombre...">
                            <input style="flex-grow:1; padding:5px;font-size: 1rem;" type="text" placeholder="correo..">
                            <input style="flex-grow:1; padding:5px;font-size: 1rem;" type="text" placeholder="teléfono">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="isAccountOpen = false" class="btn btn-cancel"><i class="fa-solid fa-circle-xmark"></i> cancelar</button>
                        <button @click="isAccountOpen = false" class="btn btn-save"><i class="fa-solid fa-floppy-disk"></i> Guardar</button>
                    </div>
    </modal>
    <modal v-if="isOpen" @on:close="closeModal">
       <div class="modal-header">
                <h1>Mi carrito</h1>
                <button class="btn btn-close" @click="closeModal">
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
            </div>
            <div class="modal-body">
                <table>
                    <thead>
                        <th>
                            <td>Articulo</td>
                        </th>
                         <th>
                            <td>Cantidad</td>
                        </th>
                         <th>
                            <td>Precio</td>
                        </th>
                         <th>
                            <td>Subtotal</td>
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Combo amigos</td>
                            <td>2</td>
                            <td>120</td>
                            <td>240</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="text-align:right">Total</td>
                            <td>240.00 MXN</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button class="btn btn-cancel" @click="closeModal">
                    Seguir comprando
                </button>
                <button class="btn btn-save" @click="closeModal">
                    Realizar compra
                </button>
            </div>
    </modal>
</template>

<script>
import { ref } from 'vue';
import modal from "./Modal.vue";
export default {
    components: {
        modal
    },
    setup(){
        const isOpen = ref(false)
        const isAccountOpen = ref(false);
        return{
            isOpen,
            isAccountOpen,
            openModal: ()=> (isOpen.value = true),
            closeModal: ()=> (isOpen.value = false),
        
        }
    }
};
</script>

<style lang="css" scoped>
table { 
		width: auto; 
		border-collapse: collapse; 
        min-width: 400px;
	}
	tr:nth-of-type(odd) { 
		background: #eee; 
	}
	th { 
		background: rgb(74, 174, 84); 
		color: white; 
		font-weight: bold; 
	}
	td, th { 
		padding: 6px; 
		text-align: left; 
	}

.navbar-content {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: white;
    z-index: 100;
}

.navbar-link {
    text-decoration: none;
    color: rgb(163, 163, 163);
}
.navbar-link i {
    font-size: 1.4rem;
}
.router-link-exact-active {
    color: rgb(255, 131, 62);
}
@media (min-width:768px){
    table{
        width: 100%;
    }
    .modal-body{
         display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    }
}
@media (min-width: 992px) {
    
    .menu-btn {
        display: block;
        text-align: end;
        order: 1;
        cursor: pointer;
        padding: 2px;
    }
    .menu-btn svg:hover {
        background: rgb(250, 248, 248);
        border-radius: 50%;
    }
    .navbar-container {
        width: auto;
    }
    .navbar-content {
        flex-direction: column;
        position: relative;
        width: 200px;
        height: 100%;
        box-shadow: 0 0 12px #c9c7c7;
        justify-content: flex-start;
    }
    .navbar-link {
        position: relative;
        padding: 15px;
        order: 3;
        cursor: pointer;
       
    }
    .router-link-exact-active {
        border-left: 6px solid;
    }
    .navbar-link:nth-child(1)::after {
        content: "Inicio";
        padding: 4px;
        position: absolute;
    }
    .navbar-link:nth-child(2)::after {
        content: "Mi carrito";
        padding: 4px;
        position: absolute;
    }
    .navbar-link:nth-child(3)::after {
        content: "Favoritos";
        padding: 4px;
        position: absolute;
    }
    .navbar-link:nth-child(4)::after {
        content: "Historial de compras";
        padding: 4px;
        position: absolute;
    }
    .navbar-content :nth-child(5) {
        order: 2;
    }
    .navbar-link:nth-child(5)::after {
        content: "Mi cuenta";
        padding: 4px;
        position: absolute;
    }
}
</style>
