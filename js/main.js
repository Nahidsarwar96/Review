let reviewProducts = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUVXERm3yWgAa9s5uAIG2et2PtD1mM-1n6g&s",
        "images": [
            "https://dummyjson.com/image/i/products/1/1.jpg",
            "https://dummyjson.com/image/i/products/1/2.jpg",
            "https://dummyjson.com/image/i/products/1/3.jpg",
            "https://dummyjson.com/image/i/products/1/4.jpg",
            "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1717804800&semt=sph",
        "images": [
            "https://dummyjson.com/image/i/products/2/1.jpg",
            "https://dummyjson.com/image/i/products/2/2.jpg",
            "https://dummyjson.com/image/i/products/2/3.jpg",
            "https://dummyjson.com/image/i/products/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNjb3cAGuOm8nN0Iopqcehh8ZG2F7PwSlhg&s",
        "images": [
            "https://dummyjson.com/image/i/products/3/1.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww",
        "images": [
            "https://dummyjson.com/image/i/products/4/1.jpg",
            "https://dummyjson.com/image/i/products/4/2.jpg",
            "https://dummyjson.com/image/i/products/4/3.jpg",
            "https://dummyjson.com/image/i/products/4/4.jpg",
            "https://dummyjson.com/image/i/products/4/thumbnail.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://cdn.pixabay.com/photo/2017/07/15/19/42/train-track-2507499_1280.jpg",
        "images": [
            "https://dummyjson.com/image/i/products/5/1.jpg",
            "https://dummyjson.com/image/i/products/5/2.jpg",
            "https://dummyjson.com/image/i/products/5/3.jpg"
        ]
    }
]


console.log(reviewProducts[1]);



const reviewTitle = document.querySelector(".reviewTitle");
const reviewImg = document.querySelector(".reviewImg");
const Name = document.querySelector(".Name");
const Designation = document.querySelector(".Designation");
const Review = document.querySelector(".Review");
const Previous = document.querySelector(".Previous");
const Next = document.querySelector(".Next");

count = 0;

window.addEventListener("DOMContentLoaded", () => {
    display(count)
})


function display(count) {
    Name.innerHTML = reviewProducts[count].title;
    Designation.innerHTML = reviewProducts[count].category;
    Review.innerHTML = reviewProducts[count].description;
    reviewImg.src = reviewProducts[count].thumbnail;
}


Next.addEventListener("click", () => {
    count++;

    if (count > 4) {
        count = 0
    }
    display(count);
})


Previous.addEventListener("click", () => {
    count--;
    if (count < 0) {
        count = 4
    }
    display(count);
})