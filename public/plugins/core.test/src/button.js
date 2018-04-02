/*
 * @Author: zhaikai 
 * @Date: 2018-04-02 17:46:22 
 * @Last Modified by:   zhaikai 
 * @Last Modified time: 2018-04-02 17:46:22 
 */

define(function (require, exports, module) {
    "use strict";
    main.consumes = [];
    main.provides=['buttonTest'];
    return main;

    function main(options, imports, register) {


        class buttonTest extends React.Component {
            constructor(props, mode) {
                super(props);
                this.state = {
                   
                };
            }
            render() {
                return <div className="main">
                    翟凯
                </div>
            }
        }

        register(null, {
            "buttonTest": buttonTest
        })
    }
});