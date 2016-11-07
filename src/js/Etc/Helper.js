function forEach(obj, iterator, context) {
    if (!obj) {
        return;
    }

    if (isArray(obj)) {
        if (obj.forEach) {
            obj.forEach(iterator, context, obj);
        } else {
            for (var i = 0; i < obj.length; i++) {
                iterator.call(context, obj[i], i, obj);
            }
        }
    } else if (isObject(obj)) {
        for (var key in obj) {
            iterator.call(context, obj[key], key, obj);
        }
    }
}

function isObject(value) {
    return value !== null && typeof value === 'object';
}

function isString(value) {
    return typeof value == 'string';
}

function isArray(value) {
    return Array.isArray(value);
}

function isFunction(value) {
    return typeof value == 'function';
}

function extend() {
    var objects = toArray(arguments);
    var obj = objects[0];

    for (var i = 1; i < objects.length; i++) {
        for (var key in objects[i]) {
            obj[key] = objects[i][key];
        }
    }

    return obj;
}

function map(array, iterator) {
    var result = [];

    forEach(array, function (obj) {
        result.push(iterator(obj));
    });

    return result;
}

function min(array) {
    var min = array[0];

    forEach(array, function (obj) {
        if (obj < min) {
            min = obj;
        }
    });

    return min;
}
function toArray(obj) {
    return Array.prototype.slice.call(obj);
}

function noop() {

}
