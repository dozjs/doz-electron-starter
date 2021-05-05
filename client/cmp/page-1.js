const {define, Component} = require('doz');

define('page-1', class extends Component {
    template(h) {
        
        //language=HTML
        return h`
            <style> 
                h2 {
                    font-size: 12vw;
                    font-weight: lighter;
                    color: darkseagreen;
                    text-align: center;
                }
            </style>
            <div>                
                <h2>Page 1</h2>
            </div>
        `
    }
});
