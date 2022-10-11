class RestaurantInfo extends HTMLElement {
    constructor() {
        super();
        this.showReview = true;
        this.innerHTML = `
        <div class="restaurantCard">
            <p class="infoField">
                <span class="infoLabel">Name:</span>
                <span class="infoValue">Akshaya Deluxe</span>
            </p>
            <p>
                <span class="infoLabel">Cuisine:</span>
                <span class="infoValue">Indian</span>
            </p>
            <p>
                <span class="infoLabel">Rating:</span>
                <span class="infoValue">4.5</span>
            </p>
            <p>
                <span class="infoLabel">Address:</span>
                <span class="infoValue">BEL road, Bengaluru</span>
            </p>
            <button id="showBtn">Hide Reviews</button>
            
            <restaurant-review></restaurant-review> 
        </div>
        `;
    }

    connectedCallback() {
        document.querySelector('#showBtn').addEventListener('click', () => {
            const reviewList = document.querySelector('.reviewsContainer');
            const showBtn = document.querySelector('#showBtn');
            
            this.showReview = !this.showReview;
            reviewList.style.display = this.showReview ? 'block' : 'none';
            showBtn.innerText = this.showReview ? 'Hide Reviews' : 'Show Reviews';
        })
    }

    disconnectedCallback() {
        document.querySelector('#showBtn').removeEventListener('click');
    }
}

window.customElements.define('restaurant-info', RestaurantInfo)