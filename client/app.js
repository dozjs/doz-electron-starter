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
                    background: #eee;
                    color: #1f0c70;
                }
                
                .logo {
                    display: block;
                    margin: auto;
                    width: 250px;
                    background: #1f0c70;
                    border-radius: 8px;
                }
                
                nav a {
                    text-decoration: none;
                    padding: 10px;
                    color: #1f0c70;
                    border-radius: 8px;
                }
                
                nav a.router-link-active {
                    background: #1f0c70;
                    color: #fff;
                }
                               
                .content {
                    padding: 20px;
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
                <img class="logo" src="assets/logo.svg">
                <doz-router no-destroy>
                    <page-1 route="/"/>
                    <page-2 route="/page-2"/>
                </doz-router>
            </div>
        `
    }
});