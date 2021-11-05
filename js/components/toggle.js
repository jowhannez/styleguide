/*
    <style>
        .toggle {
            display: flex;
        }
        .toggle__button {
            padding: 16px;
        }
        .toggle__button--active {
            background-color: hotpink;
        }
        .toggle__target {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: hotpink;
            margin-left: 16px;
            padding: 16px;
        }
        .green {
            background-color: lime;
        }
    </style>

    <div class="toggle">
        <button class="toggle__button" data-toggle="test">Click me</button>
        <div class="toggle__target" data-toggle-target="test" data-toggle-class="green">I'm the target</div>
    </div> 
*/

export default {
    name: 'toggle',
    _toggles: null,
    _targets: null,
    init() {
        this._toggles = document.querySelectorAll('[data-toggle]');
        this._targets = document.querySelectorAll('[data-toggle-target]');
        
        if (!this._toggles || !this._targets) {
            return;
        }

        for (const toggle of this._toggles) {
            const id = toggle.getAttribute('data-toggle');
            toggle.addEventListener('click', () => {
                if (toggle.getAttribute('data-toggle-class')) {
                    toggle.classList.toggle(toggle.getAttribute('data-toggle-class'));
                } else {
                    toggle.classList.toggle(toggle.classList[0] + '--active');
                }
                for (const target of this._targets) {
                    if (target.getAttribute('data-toggle-target') === id) {
                        if (target.getAttribute('data-toggle-class')) {
                            target.classList.toggle(target.getAttribute('data-toggle-class'));
                        } else {
                            target.classList.toggle(target.classList[0] + '--active');
                        }
                    }
                }
            });
        }
    }
}