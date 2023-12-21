const productContainer = document.getElementById("product-gallery");

const productArray = [
    "Img-Sqr-01.png",
    "Img-Sqr-02.png",
    "Img-Sqr-03.png",
    "Img-Sqr-04.png",
    "Img-Sqr-05.png",
    "Img-Sqr-06.png",
    "Img-Sqr-07.png",
    "Img-Sqr-08.png",
    "Img-Sqr-09.png",
    "Img-Sqr-10.png",
    "Img-Sqr-11.png",
    "Img-Sqr-12.png",
    "Img-Sqr-13.png",
    "Img-Sqr-14.png",
    "Img-Sqr-15.png",
    "Img-Sqr-16.png",
    "Img-Sqr-17.png"];

const baseUrl = "./Assets/images/Uploads/";

const createProduct = () => {
    productArray.forEach((img, index) => {
        const productFigure = document.createElement("figure");
        productFigure.classList.add("product-figure");

        const productImage = document.createElement("img");
        const productImageSovs = baseUrl + img;
        productImage.src = productImageSovs;
        productFigure.appendChild(productImage);

        const productFigCap = document.createElement("figcaption");
        productFigCap.classList.add("product-figcap");

        const productHeaderArray = [
            "Product One",
            "Product Two",
            "Product Three",
            "Product Four",
            "Product Five",
            "Product Six",
            "Product Seven",
            "prodcut Eight",
            "product Nine",
            "product Ten",
            "Product Eleven",
            "Product Twelve",
            "Product Thirteen",
            "Product Fourteen", 
            "Product Fifteen",
            "Product Sixteen",
            "Product Seventeen"
        ];
        
        const productPricesArray = [
            "20 kr.",
            "40 kr.",
            "60 kr.",
            "80 kr.",
            "100 kr.",
            "120 kr.",
            "140 kr.",
            "160 kr.",
            "180 kr.",
            "200 kr.",
            "220 kr.",
            "240 kr.",
            "260 kr.",
            "280 kr.",
            "300 kr.",
            "320 kr.", 
            "340 kr."
        ];

        const productHeader = document.createElement("h2");
        productHeader.textContent = productHeaderArray[index];

        const productText = document.createElement("p");
        productText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint ex nobis ea, consequatur aspernatur odit, praesentium cupiditate dolores blanditiis laboriosam architecto illum deleniti,";

        const productPrice = document.createElement("p");
        productPrice.textContent = "Price: " + productPricesArray[index];

        const productDescHeader = document.createElement("h4");
        productDescHeader.textContent = "Description:";

        const productDesc = document.createElement("p");
        productDesc.textContent = "Magnam dicta soluta odit provident, sapiente dolor quidem incidunt eius, totam architecto, sed molestiae minus? Molestiae, fugiat perferendis earum sit natus impedit maxime quis ex, omnis dolorem repellat doloribus architecto!";

        const appendChildren = (parent, elements) => {
            elements.forEach((element) => {
                parent.appendChild(element);
            });
        };

        appendChildren(productFigCap, [
            productHeader,
            productText,
            productPrice,
            productDescHeader,
            productDesc
        ]);

        productFigure.appendChild(productFigCap);

        productContainer.appendChild(productFigure);
    });
};

window.addEventListener("load", createProduct);