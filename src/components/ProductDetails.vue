
<script setup>


const ProductsDetail = [
    {
        name: "Product 1",
        price: 100.89,
        available: true
    },
    {
        name: "Product 2",
        price: 150.99,
        available: false
    },
    {
        name: "Product 3",
        price: 200.99,
        available: true
    },
    {
        name: "Product 3",
        price: 200.99,
        available: false
    },
];

const formattedPrice = (product) => {
return '$' + product.price
}
</script>

<template>

        <div class="item" v-for="product in ProductsDetail" :key="product.id">
            <div>{{ product.name }}</div>
            <div>{{ formattedPrice(product) }}</div>
            <div v-if="product.available">available</div>
            <div v-else>Out of stock</div>
        </div>


</template>

<style>
    .item {
        display: flex;
        gap: 20px;
    }
</style>

<!-- Фреймворк Vue.js
Урок 10. Семинар: Встроенные директивы и работа с данными компонента
Задача по макету
Создайте компоненты шапки и подвала, чтобы можно было подключать их к новым страницам

Vue
Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).
Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".
В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.
Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock". -->