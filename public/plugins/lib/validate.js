define(function (require, exports, module) {

    exports.notEmpty = function (str) {
        if (str) {
            return !(str.replace(/^ +| +$/g, '') == '');
        }
        return false;
    };

    exports.noSpacing = function (str) {
        return !(str.indexOf(" ") >= 0);
    };

    exports.noChinese = function (str) {
        return !(/[\u4e00-\u9fa5]/.test(str));
    };

    exports.noChineseSymble = function (str) {
        var reg = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/;
        return !(reg.test(str));
    };

    //只包含数字、字母、'.'和'_',切不能以数字或'.'开头
    exports.variableNameFormat = function (str) {
        return /^([a-zA-Z]|[_]){1}([a-zA-Z0-9]|[._]){2,19}$/g.test(str);
    };

    //不包含'/'和'\'
    exports.noSlash = function (str) {
        return !(str.indexOf("/") >= 0 || str.indexOf("\\") >= 0);
    };

    exports.goodsVersionValidate = function (str) {
        return /^[0-9]{1,3}(\.[0-9]{1,3}){2}$/g.test(str);
    }

    exports.fileNameValidate = function (str) {
        return /^$/g.test(str);
    }

    exports.certPasswordValidate = function (str) {
        var reg = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/;
        if (str.indexOf(" ") >= 0) {
            return false;
        } else if (/[\u4e00-\u9fa5]/.test(str)) {
            return false;
        } else if (reg.test(str)) {
            return false
        } else {
            return str.length > 5 && str.length < 21
        }

    };

    //mk product 和 mk feature name命名：3~25位 数字 字母 _ .
    exports.mkNameValidate = function (str) {
        return /^([a-zA-Z0-9]){1}([a-zA-Z0-9]|[._]){2,34}$/g.test(str);
    }

    //版本号规则
    exports.versionValidate = function (str) {
        return /^[0-9]{1,3}(\.[0-9]{1,3}){2}$/g.test(str);
    }

    //商品名规范:只包含数字、字母、'.'、'-'和'_',切不能以数字或'.'开头,最多36位
    exports.GoodsNameValidate = function (str) {
        return /^([a-zA-Z]|[_]){1}([a-zA-Z0-9]|[._-]){1,35}$/g.test(str);
    };
})