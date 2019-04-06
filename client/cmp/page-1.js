const {define, Component} = require('doz');

define('page-1', class extends Component {
    template(h) {
        return h`
            <div>Page 1</div>
        `
    }
});