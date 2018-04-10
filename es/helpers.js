export var propValidator = {
    endsWithpx: function endsWithpx(props, propName, componentName) {
        var p = props[propName];
        var msg = "Invalid prop " + propName + " supplied to " + componentName + ". A string that ends with \"px\" is required. Received: \"" + p + "\".";
        if (!(typeof p === "string" && p.endsWith("px"))) {
            return new Error(msg);
        }
    },
    isDecimal: function isDecimal(props, propName, componentName) {
        var p = props[propName];
        var num = Number(p);
        var msg = "Invalid prop " + propName + " supplied to " + componentName + ". A decimal string is required. Received: \"" + p + "\".";
        if (num < 0 || num > 1) {
            return new Error(msg);
        }
    }
};