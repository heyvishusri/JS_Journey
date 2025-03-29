# JavaScript Basics: Variables, Data Types & Conversion Operations

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

## 📌 **3. Type Conversion in JavaScript**  
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
✅ Implicit conversion happens automatically, while explicit conversion requires functions like `Number()`, `String()`, etc.  

---

This README serves as a quick reference for JavaScript basics. Happy coding! 🚀

