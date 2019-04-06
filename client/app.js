const Doz = require('doz');
require('./cmp/page-1');
require('./cmp/page-2');
require('doz-router');

new Doz({
    root: '#app',

    template(h) {
        return h`
            <style> 
                :global * {
                    box-sizing: border-box;
                }
                :global body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                }
                
                :global a:link {
                    color: #000;
                }                
                
                :global a:hover {
                    color: orangered;
                }
                
                .content {
                    padding: 20px;
                    background: #eee;
                }
                
                nav {
                    padding: 20px;
                    background: #ddd;
                }
            </style>
            
            <nav>
                <a data-router-link="true" href="/">Page 1</a> | 
                <a data-router-link="true" href="/page-2">Page 2</a>
            </nav>
            
            <div class="content">
                <doz-router no-destroy>
                    <page-1 route="/"/>
                    <page-2 route="/page-2"/>
                </doz-router>
            </div>
        `
    }
});