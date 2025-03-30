# JavaScript Basics: Variables, Data Types, Operators & Conversion Operations

## 📌 **1. Variables in JavaScript**  
Variables are used to store data and are declared using `var`, `let`, or `const`.  

### **Variable Declaration**  
```js
var name = "Alice";  // Function-scoped
let age = 25;        // Block-scoped
const PI = 3.14159;  // Cannot be reassigned
```

### **Difference Between `var`, `let`, and `const`**  
| Feature       | `var` | `let` | `const` |
|--------------|------|------|--------|
| Scope       | Function | Block | Block |
| Reassignable | ✅ Yes | ✅ Yes | ❌ No |
| Hoisted?     | ✅ Yes (with `undefined`) | ✅ Yes (but not initialized) | ✅ Yes (but not initialized) |

---

## 📌 **2. Data Types in JavaScript**  
JavaScript has two categories of data types: **Primitive** and **Non-Primitive (Reference Types).**

### **Primitive Data Types**  
| Type       | Example |
|------------|---------|
| String     | `"Hello, World!"` |
| Number     | `42`, `3.14` |
| Boolean    | `true`, `false` |
| Undefined  | `let x;` (x is undefined) |
| Null       | `let y = null;` |
| BigInt     | `123456789012345678901234567890n` |
| Symbol     | `Symbol('id')` |

### **Non-Primitive (Reference) Data Types**  
| Type        | Example |
|------------|---------|
| Object     | `{ name: "Alice", age: 25 }` |
| Array      | `[1, 2, 3, 4]` |
| Function   | `function greet() { console.log("Hello!"); }` |

---

## 📌 **3. Operators in JavaScript**
Operators are used to perform operations on variables and values.

### **Arithmetic Operators**
| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `5 + 3` → `8` |
| `-` | Subtraction | `10 - 4` → `6` |
| `*` | Multiplication | `6 * 2` → `12` |
| `/` | Division | `10 / 2` → `5` |
| `%` | Modulus (Remainder) | `10 % 3` → `1` |
| `**` | Exponentiation | `2 ** 3` → `8` |

### **Comparison Operators**
| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Equal to | `5 == "5"` → `true` |
| `===` | Strict equal to | `5 === "5"` → `false` |
| `!=` | Not equal to | `5 != "5"` → `false` |
| `!==` | Strict not equal | `5 !== "5"` → `true` |
| `>` | Greater than | `10 > 5` → `true` |
| `<` | Less than | `5 < 10` → `true` |
| `>=` | Greater than or equal to | `10 >= 10` → `true` |
| `<=` | Less than or equal to | `5 <= 5` → `true` |

### **Logical Operators**
| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | Logical AND | `(5 > 3 && 10 > 5)` → `true` |
| `||` | Logical OR | `(5 > 10 || 10 > 5)` → `true` |
| `!` | Logical NOT | `!(5 > 3)` → `false` |

### **Assignment Operators**
| Operator | Description | Example |
|----------|-------------|---------|
| `=` | Assigns value | `x = 10` |
| `+=` | Adds and assigns | `x += 5` (same as `x = x + 5`) |
| `-=` | Subtracts and assigns | `x -= 3` |
| `*=` | Multiplies and assigns | `x *= 2` |
| `/=` | Divides and assigns | `x /= 2` |
| `%=` | Modulus and assigns | `x %= 2` |
| `**=` | Exponentiation and assigns | `x **= 2` |

---

## 📌 **4. Type Conversion in JavaScript**  
JavaScript allows converting between different data types explicitly and implicitly.

### **Implicit Type Conversion (Type Coercion)**  
JavaScript automatically converts types in certain operations.  
```js
console.log("5" + 2);  // "52" (String concatenation)
console.log("5" - 2);  // 3 (String converted to Number)
console.log(true + 1); // 2 (true → 1)
```

### **Explicit Type Conversion**  
Using built-in functions to convert types.

| Conversion  | Method |
|------------|---------|
| String → Number | `Number("42")` → `42` |
| Number → String | `String(42)` → `"42"` |
| Boolean → Number | `Number(true)` → `1` |
| Number → Boolean | `Boolean(0)` → `false`, `Boolean(42)` → `true` |
| Parse Integers  | `parseInt("42.5")` → `42` |
| Parse Float  | `parseFloat("42.5")` → `42.5` |

Example:
```js
let str = "123";
let num = Number(str); // 123 (converted from string to number)
console.log(typeof num); // "number"
```

---

## 📌 **Summary**  
✅ Variables are declared using `var`, `let`, and `const`.  
✅ JavaScript has primitive (String, Number, Boolean, etc.) and reference types (Objects, Arrays, Functions).  
✅ JavaScript includes arithmetic, comparison, logical, and assignment operators.  
✅ Implicit conversion happens automatically, while explicit conversion requires functions like `Number()`, `String()`, etc.  

---

This README serves as a quick reference for JavaScript basics. Happy coding! 🚀

