<template>
    <div>
        <h1 class="text">Favoritos</h1>
        <div class="favorites-container">
            <ul class="favorites-list">
                <li class="favorites-item">
                    <div class="img-container">
                        <img
                            src="https://www.portablepress.com/wp-content/uploads/2017/10/Fast-food-combo-meal-1.jpg"
                            alt=""
                            class="product-img"
                        />
                    </div>
                    <ul class="product-info">
                        <li>Combo amigos</li>
                        <li>$200.00 MXN</li>
                    </ul>
                    <i class="btn-favorite fa-solid fa-heart"></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>

ul {
    list-style: none;
}

.text {
    color: rgb(74, 174, 84);
    padding: 0 20px;
}

.favorites-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.favorites-list {
    width: 100%;
    padding: 0;
}

.favorites-item {
    display: flex;
    border-bottom: 3px solid rgb(221 215 215);
    padding: 10px;
    align-items: center;
    position: relative;
}

.btn-favorite {
    position: absolute;
    right: 0%;
    font-size: 25px;
    z-index: 10;
    color: rgb(255, 131, 62);
    cursor: pointer;
    padding: 10px;
}

.favorites-item:last-child {
    border: 0;
}

.img-container {
    width: 150px;
    height: 100px;
}

.product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
    box-shadow: 0 0 10px grey;
}

.product-info {
    flex-grow: 1;
    padding: 5px 10px;
    margin-right: 25px;
}

.product-info li {
    padding-bottom: 5px;
}

@media (min-width: 768px) {
    .text {
        font-size: 2.5rem;
    }
    .product-info {
        display: inline-flex;
        gap: 10px;
    }
    .product-info li {
        width: max-content;
        font-size: 1.25rem;
    }
    .btn-favorite {
        font-size: 30px;
    }
    .favorites-container{
      margin-left: 20px;
    }
}

@media (min-width: 992px) {
}
</style>
