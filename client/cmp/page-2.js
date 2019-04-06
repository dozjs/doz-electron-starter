const {define, Component} = require('doz');

define('page-2', class extends Component{
    template(h) {
        return h`
            <div>Page 2</div>
        `
    }
});