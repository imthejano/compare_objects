"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author imjano
 * @param obj1
 * @param obj2
 * @returns boolean
 * @description This function compare deeply 2 objects
 * returns true if the objects are identical
 */
function compareObjects(obj1, obj2) {
    if (typeof obj1 != typeof obj2)
        return false;
    if (typeof obj1 == 'object') {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length != keys2.length)
            return false;
        for (let i = 0; i < keys1.length; i++) {
            const key = keys1[i];
            const compare = compareObjects(obj1[key], obj2[key]);
            if (!compare)
                return false;
        }
        return true;
    }
    else if (Array.isArray(obj1) && Array.isArray(obj2)) {
        for (let i = 0; i < obj1.length; i++) {
            const compare = compareObjects(obj1[i], obj2[i]);
            if (!compare)
                return false;
        }
        return true;
    }
    else {
        return obj1 == obj2;
    }
}
exports.default = compareObjects;
