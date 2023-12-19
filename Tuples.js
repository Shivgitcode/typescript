"use strict";
// const stuff: string[] = ["asd", "adfasf"];
const color = [1, 2, 3];
const goodRes = [200, "OK"];
// goodRes[0]="200"
// goodRes.push(123)
// goodRes.pop()
// const responses:HTTPResponse[]=[[404,"not found"],[200,"ok"]]
// Enums
const Pending = 0;
const shipped = 1;
const Delivered = 2;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 10] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 34] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 324] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 98] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
    ArrowKeys["ERROR"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
