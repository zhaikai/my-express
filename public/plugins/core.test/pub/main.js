"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

        var Container = function (_React$Component) {
            _inherits(Container, _React$Component);

            function Container(props, mode) {
                _classCallCheck(this, Container);

                var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

                _this.state = {};
                return _this;
            }

            _createClass(Container, [{
                key: "render",
                value: function render() {
                    return React.createElement(
                        "div",
                        { className: "main" },
                        React.createElement(ButtonTest, null)
                    );
                }
            }]);

            return Container;
        }(React.Component);

        ReactDOM.render(React.createElement(Container, null), document.getElementById('container'));
    }
});
