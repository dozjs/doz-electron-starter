const {define, Component} = require('doz');

define('page-2', class extends Component {
    template(h) {
        return h`
            <style> 
                h2 {
                    font-size: 12vw;
                    font-weight: lighter;
                    color: cornflowerblue;
                    text-align: center;
                }
            </style>
            <div>
                <h2>Page 2</h2>
            </div>
        `
    }
});