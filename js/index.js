import components from './components';

const app = {
    init() {
        for (let i in components) {
            let component = components[i];
            if (typeof component === 'object' && component.hasOwnProperty('default')) {
                component.default.hasOwnProperty('init') ? component.default.init() : null;
            }
        }
    }
};




app.init();