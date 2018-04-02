/*
 * @Author: zhaikai 
 * @Date: 2018-04-02 17:46:31 
 * @Last Modified by:   zhaikai 
 * @Last Modified time: 2018-04-02 17:46:31 
 */

define(function (require, exports, module) {
    "use strict";
    main.consumes = ['buttonTest'];
    return main;

    function main(options, imports, register) {
        var ButtonTest = imports.buttonTest;


        class Container extends React.Component {
            constructor(props, mode) {
                super(props);
                this.state = {
                   
                };
            }
            render() {
                return <div className="main">
                    <ButtonTest/>
                </div>
            }
        }

        ReactDOM.render(
            <Container />,
            document.getElementById('container')
        );
    }
});