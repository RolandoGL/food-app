<template>
    <div>
        <h1 style="padding-left:20px;">Historial</h1>
        <div class="filters-container">
            <div class="filters-content">
                <div class="filters-item">
                    <button class="btn btn-active">Todo</button>
                    <button class="btn">En proceso</button>
                    <button class="btn">Completadas</button>
                </div>
                <div class="filters-item">
                    <div class="date">
                        <input type="date" />
                    </div>
                    a
                    <div class="date">
                        <input type="date" />
                    </div>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <div class="table-container">
                <div class="table-row">
                    <div class="table-cell">ID</div>
                    <div class="table-cell">Repartidor</div>
                    <div class="table-cell">Pago</div>
                    <div class="table-cell">Estado</div>
                    <div class="table-cell">Total</div>
                </div>
                <div class="table-row">
                    <div class="table-cell">0001</div>
                    <div class="table-cell">Rolando Gomez Lopez</div>
                    <div class="table-cell">Efectivo</div>
                    <div class="table-cell">En camino</div>
                    <div class="table-cell">$1200.00</div>
                </div>
                <div class="table-row">
                    <div class="table-cell">0002</div>
                    <div class="table-cell">Rolando Antonio Gomez Lopez</div>
                    <div class="table-cell">Tarjeta</div>
                    <div class="table-cell">Completado</div>
                    <div class="table-cell">$100.00</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filters-container {
    margin: 0 20px;
}

.filters-content {
    display: flex;
    padding: 5px;
    flex-wrap: wrap;
    gap: 10px;
}

.filters-item {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
}

.btn {
    background: transparent;
    padding: 5px;
    font-size: 12px;
    border: 0;
    font-weight: bold;
    color: #d0cbd1;
}

.btn-active {
    color: rgb(255, 131, 62);
    border-bottom: 2px solid rgb(255, 131, 62);
}

.date input {
    padding: 5px;
    color: rgb(74, 174, 84);
}

.table-responsive {
    padding: 10px;
}

.table-container {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.table-row {
    width: 100%;
    min-width: 450px;
    display: grid;
    grid-template-columns: 50px 1fr 60px 80px 100px;
    gap: 5px;
    padding: 2px;
    border: 2px solid #d0d1d6;
    margin: 10px 0;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 12px;
    text-align: center;
    transition: all 300ms cubic-bezier(0.4, 0, 1, 1);
}

.table-cell:first-child,
.table-cell:nth-child(2) {
    overflow: auto;
}

@media (min-width: 768px) {
    .btn {
        font-size: 15px;
    }

    .table-row {
        padding: 5px;
        font-size: 15px;
        text-align: left;
        grid-template-columns: 100px 1fr 70px 90px 120px;
    }
}

@media (min-width: 992px) {
    .filters-item:first-child {
        justify-content: start;
        gap: 10px;
    }

    .filters-item:last-child {
        justify-content: end;
        gap: 10px;
    }

    .table-container {
        width: 80%;
        margin: auto;
        overflow: visible;
    }

    .table-row:hover {
        margin: 15px 0;
        box-shadow: 0 0px 30px -7px #646161;
        transform: scale(1.02);
    }
}
</style>
