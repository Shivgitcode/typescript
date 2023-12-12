// const stuff: string[] = ["asd", "adfasf"];

const color: [number, number, number] = [1, 2, 3];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

// goodRes[0]="200"

// goodRes.push(123)
// goodRes.pop()

// const responses:HTTPResponse[]=[[404,"not found"],[200,"ok"]]

// Enums

const Pending = 0;
const shipped = 1;
const Delivered = 2;

enum OrderStatus {
  PENDING = 10,
  SHIPPED = 34,
  DELIVERED = 324,
  RETURNED = 98,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = "right",
}
