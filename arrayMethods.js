const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const a = numbers.filter((num) => num % 2 === 0); // Lọc toàn bộ số chẵn từ mảng numbers
console.log("filter:", a); // Kết quả: [2, 4, 6, 8, 10]

const b = numbers.find((num) => num % 2 === 0); // Tìm số chẵn đầu tiên trong mảng numbers
console.log("find:", b); // Kết quả: 2

const c = numbers.map((num) => num * 2); // Tạo một mảng mới với mỗi phần tử trong mảng numbers được nhân đôi
console.log("map:", c); // Kết quả: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const d = numbers.reduce((acc, num) => acc + num, 0); // Tính tổng tất cả các phần tử trong mảng numbers
console.log("reduce:", d); // Kết quả: 55

//  hàm reduce nhận vào 2 tham số: một hàm callback và một giá trị khởi tạo (initial value).
//  Hàm callback này lại nhận vào 4 tham số: accumulator (biến tích lũy), currentValue (giá trị hiện tại), currentIndex (chỉ số hiện tại), và array (mảng gốc).
//  Trong ví dụ trên, chúng ta chỉ sử dụng hai tham số đầu tiên: acc (accumulator) và num (currentValue).
//  Giá trị khởi tạo ở đây là 0, vì vậy lần đầu tiên hàm callback được gọi, acc sẽ có giá trị là 0 và num sẽ là phần tử đầu tiên của mảng numbers.
const e = numbers.some((num) => num > 5); // Kiểm tra xem có ít nhất một số lớn hơn 5 trong mảng numbers hay không
console.log("some:", e); // Kết quả: true

const f = numbers.every((num) => num > 0); // Kiểm tra xem tất cả các số trong mảng numbers có lớn hơn 0 hay không
console.log("every:", f); // Kết quả: true

const g = numbers.sort((a, b) => b - a); // Sắp xếp mảng numbers theo thứ tự giảm dần
console.log("sort:", g); // Kết quả: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const h = numbers.slice(0, 5); // Lấy ra một phần của mảng numbers từ chỉ số 0 đến chỉ số 5 (không bao gồm chỉ số 5)
console.log("slice:", h); // Kết quả: [1, 2, 3, 4, 5]

const i = numbers.splice(0, 3, 99, 100); // Thay thế 3 phần tử đầu tiên của mảng numbers bằng hai phần tử mới 99 và 100
console.log("splice:", i); // Kết quả: [1, 2, 3]
console.log("numbers after splice:", numbers); // Kết quả: [99, 100, 4, 5, 6, 7, 8, 9, 10]

//  Hàm splice thay đổi mảng gốc bằng cách loại bỏ hoặc thay thế các phần tử.
//  Trong ví dụ trên, numbers.splice(0, 3, 99, 100) bắt đầu từ chỉ số 0, loại bỏ 3 phần tử (1, 2, 3) và chèn vào hai phần tử mới (99, 100).
//  Kết quả trả về của hàm splice là mảng các phần tử đã bị loại bỏ, tức là [1, 2, 3].
//  Mảng numbers sau khi gọi splice sẽ trở thành [99, 100, 4, 5, 6, 7, 8, 9, 10].const j = numbers.join(", ");

const j = numbers.join(", "); // Nối tất cả các phần tử của mảng numbers thành một chuỗi, với mỗi phần tử được ngăn cách bởi ", "
console.log("join:", j); // Kết quả: "99, 100, 4, 5, 6, 7, 8, 9, 10"
//  Hàm join() nối tất cả các phần tử của mảng thành một chuỗi, với mỗi phần tử được ngăn cách bởi chuỗi được chỉ định (trong trường hợp này là ", ").

const k = numbers.indexOf(5); // Tìm chỉ số của phần tử 5 trong mảng numbers
console.log("indexOf:", k); // Kết quả: 3
//  Hàm indexOf() trả về chỉ số của phần tử đầu tiên trong mảng có giá trị bằng với giá trị được chỉ định (trong trường hợp này là 5).
//  Nếu phần tử không tồn tại trong mảng, hàm sẽ trả về -1.

const l = numbers.includes(10); // Kiểm tra xem mảng numbers có chứa phần tử 10 hay không
console.log("includes:", l); // Kết quả: true
//  Hàm includes() kiểm tra xem mảng có chứa phần tử được chỉ định (trong trường hợp này là 10) hay không.
//  Nếu có, hàm trả về true; nếu không, hàm trả về false.

const m = numbers.reverse(); // Đảo ngược thứ tự các phần tử trong mảng numbers
console.log("reverse:", m); // Kết quả: [10, 9, 8, 7, 6, 5, 4, 100, 99]
//  Hàm reverse() đảo ngược thứ tự các phần tử trong mảng gốc và trả về mảng đã được đảo ngược.
//  Lưu ý rằng hàm reverse() thay đổi mảng gốc.
//  Trong ví dụ trên, mảng numbers ban đầu là [99, 100, 4, 5, 6, 7, 8, 9, 10] và sau khi gọi hàm reverse(), mảng trở thành [10, 9, 8, 7, 6, 5, 4, 100, 99].

const n = numbers.fill(0, 0, 2); // Điền giá trị 0 vào mảng numbers từ chỉ số 0 đến chỉ số 2 (không bao gồm chỉ số 2)
console.log("fill:", n); // Kết quả: [0, 0, 8, 7, 6, 5, 4, 100, 99]
//  Hàm fill() điền giá trị được chỉ định (trong trường hợp này là 0) vào mảng gốc từ chỉ số bắt đầu (0) đến chỉ số kết thúc (2, không bao gồm).
//  Lưu ý rằng hàm fill() thay đổi mảng gốc.
//  Trong ví dụ trên, mảng numbers ban đầu là [10, 9, 8, 7, 6, 5, 4, 100, 99] và sau khi gọi hàm fill(), mảng trở thành [0, 0, 8, 7, 6, 5, 4, 100, 99].

const o = numbers.flatMap((num) => [num, num * 2]); // Tạo một mảng mới bằng cách ánh xạ mỗi phần tử trong mảng numbers thành một mảng con chứa phần tử đó và phần tử đó nhân đôi, sau đó làm phẳng mảng kết quả
console.log("flatMap:", o); // Kết quả: [0, 0, 0, 0, 8, 16, 7, 14, 6, 12, 5, 10, 4, 8, 100, 200, 99, 198]
//  Hàm flatMap() kết hợp hai thao tác: ánh xạ (map) và làm phẳng (flat).
//  Đầu tiên, nó áp dụng hàm callback cho mỗi phần tử trong mảng gốc để tạo ra một mảng mới (ánh xạ).
//  Sau đó, nó làm phẳng mảng kết quả một cấp độ (làm phẳng).
//  Trong ví dụ trên, mỗi phần tử num trong mảng numbers được ánh xạ thành một mảng con [num, num * 2], và sau đó tất cả các mảng con này được làm phẳng thành một mảng duy nhất.

const p = Array.from(numbers, (num) => num + 1); // Tạo một mảng mới từ mảng numbers, với mỗi phần tử được tăng lên 1
console.log("Array.from:", p); // Kết quả: [1, 1, 9, 8, 7, 6, 5, 101, 100]
//  Hàm Array.from() tạo một mảng mới từ một đối tượng giống mảng hoặc một iterable.
//  Tham số thứ hai là một hàm map tùy chọn, được áp dụng cho mỗi phần tử trong quá trình tạo mảng.
//  Trong ví dụ trên, mỗi phần tử num trong mảng numbers được tăng lên 1 để tạo thành mảng mới.

const q = numbers.at(-1); // Lấy phần tử cuối cùng của mảng numbers
console.log("at:", q); // Kết quả: 99
//  Hàm at() trả về phần tử tại vị trí được chỉ định trong mảng.
//  Vị trí có thể là một số nguyên dương (từ đầu mảng) hoặc một số nguyên âm (từ cuối mảng).
//  Trong ví dụ trên, at(-1) trả về phần tử cuối cùng của mảng numbers.

const r = numbers.flat(); // Làm phẳng mảng numbers (mặc dù trong trường hợp này mảng không có phần tử lồng nhau)
console.log("flat:", r); // Kết quả: [0, 0, 8, 7, 6, 5, 4, 100, 99]
//  Hàm flat() làm phẳng mảng gốc bằng cách loại bỏ các cấp độ lồng nhau.
//  Mặc dù trong ví dụ này mảng numbers không có phần tử lồng nhau, hàm flat() vẫn trả về một mảng mới giống như mảng gốc.
//  Nếu mảng có phần tử lồng nhau, bạn có thể chỉ định độ sâu làm phẳng bằng cách truyền một đối số vào hàm flat() (mặc định là 1).

const s = numbers.copyWithin(0, 3, 5); // Sao chép các phần tử từ chỉ số 3 đến chỉ số 5 (không bao gồm chỉ số 5) và dán chúng vào bắt đầu từ chỉ số 0
console.log("copyWithin:", s); // Kết quả: [7, 6, 8, 7, 6, 5, 4, 100, 99]
//  Hàm copyWithin() sao chép một phần của mảng gốc và dán nó vào một vị trí khác trong cùng mảng.
//  Tham số đầu tiên là vị trí bắt đầu để dán, tham số thứ hai là vị trí bắt đầu để sao chép, và tham số thứ ba là vị trí kết thúc để sao chép (không bao gồm).
//  Trong ví dụ trên, các phần tử từ chỉ số 3 đến chỉ số 5 (7 và 6) được sao chép và dán vào bắt đầu từ chỉ số 0.
//  Lưu ý rằng hàm copyWithin() thay đổi mảng gốc.

const t = numbers.findIndex((num) => num === 100); // Tìm chỉ số của phần tử có giá trị bằng 100 trong mảng numbers
console.log("findIndex:", t); // Kết quả: 7
//  Hàm findIndex() trả về chỉ số của phần tử đầu tiên trong mảng thỏa
//  mã điều kiện được cung cấp trong hàm callback.
//  Nếu không tìm thấy phần tử thỏa mãn, hàm sẽ trả về -1. mã điều kiện, trong trường hợp này là num === 100.
//  Trong ví dụ trên, phần tử 100 nằm ở chỉ số 7 trong mảng numbers, vì vậy hàm findIndex() trả về 7.

const u = numbers.toString(); // Chuyển mảng numbers thành một chuỗi
console.log("toString:", u); // Kết quả: "7,6,8,7,6,5,4,100,99"
//  Hàm toString() chuyển đổi mảng thành một chuỗi, với mỗi phần tử được ngăn cách bởi dấu phẩy.
//  Trong ví dụ trên, mảng numbers được chuyển đổi thành chuỗi "7,6,8,7,6,5,4,100,99".

const v = numbers.fill(5, 2); // Điền giá trị 5 vào mảng numbers từ chỉ số 2 đến hết mảng
console.log("fill:", v); // Kết quả: [7, 6, 5, 5, 5, 5, 5, 5, 5]
//  Hàm fill() điền giá trị được chỉ định (trong trường hợp này là 5) vào mảng gốc từ chỉ số bắt đầu (2) đến hết mảng.
//  Lưu ý rằng hàm fill() thay đổi mảng gốc.
//  Trong ví dụ trên, mảng numbers ban đầu là [7, 6, 8, 7, 6, 5, 4, 100, 99] và sau khi gọi hàm fill(), mảng trở thành [7, 6, 5, 5, 5, 5, 5, 5, 5].

const w = numbers.unshift(1, 2); // Thêm các phần tử 1 và 2 vào đầu mảng numbers
console.log("unshift:", w); // Kết quả: 11 (độ dài mới của mảng)
console.log("numbers after unshift:", numbers); // Kết quả: [1, 2, 7, 6, 5, 5, 5, 5, 5, 5, 5]
//  Hàm unshift() thêm một hoặc nhiều phần tử vào đầu mảng gốc và trả về độ dài mới của mảng.
//  Trong ví dụ trên, các phần tử 1 và 2 được thêm vào đầu mảng numbers.
//  Mảng numbers sau khi gọi unshift() trở thành [1, 2, 7, 6, 5, 5, 5, 5, 5, 5, 5], và độ dài mới của mảng là 11.

const x = numbers.pop(); // Loại bỏ và trả về phần tử cuối cùng của mảng numbers
console.log("pop:", x); // Kết quả: 5
console.log("numbers after pop:", numbers); // Kết quả: [1, 2, 7, 6, 5, 5, 5, 5, 5, 5]
//  Hàm pop() loại bỏ phần tử cuối cùng của mảng gốc và trả về phần tử đó.
//  Trong ví dụ trên, phần tử cuối cùng (5) được loại bỏ khỏi mảng numbers.
//  Mảng numbers sau khi gọi pop() trở thành [1, 2, 7, 6, 5, 5, 5, 5, 5, 5].

const y = numbers.shift(); // Loại bỏ và trả về phần tử đầu tiên của mảng numbers
console.log("shift:", y); // Kết quả: 1
console.log("numbers after shift:", numbers); // Kết quả: [2, 7, 6, 5, 5, 5, 5, 5, 5]
//  Hàm shift() loại bỏ phần tử đầu tiên của mảng gốc và trả về phần tử đó.
//  Trong ví dụ trên, phần tử đầu tiên (1) được loại bỏ khỏi mảng numbers.
//  Mảng numbers sau khi gọi shift() trở thành [2, 7, 6, 5, 5, 5, 5, 5, 5].
