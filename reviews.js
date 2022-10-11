class Reviews extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="reviewsContainer">
            <h3>Reviews</h3>
            <div class="review">Great taste</div>
            <div class="review">It's a good place for good portions of food</div>
            <div class="review">Super sea food and all items are tasty and well cooked</div>
        </div>
        `;
    }
}

window.customElements.define('restaurant-review', Reviews)