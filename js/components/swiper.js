import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/*
<style>
    .swiper-pagination {
        position: relative !important;
        margin-top: 16px;
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: white !important;
    }
</style>

<div class="swiper" data-swiper>
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="https://picsum.photos/seed/1/640/450" width="640" height="450"/>
        </div>
        <div class="swiper-slide">
            <img src="https://picsum.photos/seed/2/640/450" width="640" height="450"/>
        </div>
        <div class="swiper-slide">
            <img src="https://picsum.photos/seed/3/640/450" width="640" height="450"/>
        </div>
        <div class="swiper-slide">
            <img src="https://picsum.photos/seed/4/640/450" width="640" height="450"/>
        </div>
    </div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
</div>
*/

export default {
    name     : "swiper",
    _selector: "[data-swiper]",
    _swipers : [],
    init() {
        this._swipers = document.querySelectorAll(this._selector);

        if (!this._swipers) {
            return;
        }
            
        for (const container of this._swipers) {
            const swiper = new Swiper(container, {
                loop: true,
                spaceBetween: 30,
                slidesPerView: 1,
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }
    }
};
