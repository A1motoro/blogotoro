# Python Syntax Sugar

**Published:** October 10, 2025
**Category:** Programming
**Read Time:** 12 min

This article will introduce several elegant syntax sugars in Python. Mastering these clever syntax sugars can make your code more Pythonic!

~Someone asked, what is syntax sugar? I'll award `a, b = b, a` as Python's greatest syntax sugar right away!~

## Lambda Functions

Lambda functions are **one-time**, **anonymous functions** in Python. Let's clarify this with a simple example below:
```python
square = lambda x: x ** 2
print(square(4)) # Output: 16
# This is equivalent to:
def square(x):
    return x ** 2
```
Why go through all this trouble for a one-time function? Its most frequent and elegant application is passing parameters to complex functions.

Check out the VCR:
```python
# Assuming we have the following dictionary, sort them by value
d = {'apple': 2, 'banana': 1, 'cherry': 3}
sorted_items = sorted(d.items(), key=lambda item: item[1])
# Here, key is not the dictionary key, but a parameter of sorted(), telling the function to sort by which value
```
Notice there's `lambda item: item[1]`, this is the Lambda function. Its function is completely equivalent to:
```python
def trans(dict.item):
    return item[1]
```
However, the latter can be called repeatedly, while the Lambda function completes function definition and calling in one line, then it **cannot be called again**.

It only supports single expressions, [ternary expressions](#ternary-expressions) of course count as single expressions, check out the VCR:
```python
# This is a ternary expression, it's allowed
sign = lambda x: "positive" if x > 0 else "negative"
print(sign(5)) # Output: positive
print(sign(-3)) # Output: negative, what do smart readers think?
```
Note that the **scope** of Lambda functions is the line where they are defined.

*It's not recommended to set Lambda parameter names to function names already defined in the current scope*. It's syntactically allowed, but semantically dangerous.

> Lambda functions were introduced in Python 1.0, so they can run correctly on any Python interpreter! It can basically be considered Python's oldest syntax sugar.

## Ternary Expressions

**Ternary expressions**, or **conditional expressions** or **ternary operators**, are syntax sugar introduced in Python 2.5. They allow you to compress an `if-else` logic into an expression. Its syntax structure is as follows:
```python
value_if_True if condition else value_if_False # This is an expression
```
It will first judge whether the condition is true, if true, the expression value is the front part, if false, it's the back part.

Different from C family ternary expressions `condition? value_if_true : value_if_false`, note this.

Ternary expressions can of course be **nested**, but this is not recommended because it gets messy beyond recognition. Try reading:
```python
# Return grade based on score
grade = 'A' if score >= 90 else 'B' if score >= 80 else 'C' if score >= 70 else 'F'
```
At this time, you can turn to `if-else` statements. Or, you can also check out [Match-Case](#match-case-syntax).

## F-String Syntax

The f in `f-string` stands for formatted, this syntax helps developers format strings very easily, *concise, efficient, and readable!*

- **Purpose** is to insert variables or expressions into the middle of strings.
- **Essence** is not a string constant, but an **expression** evaluated at runtime.

The syntax structure is as follows:
```python
f"string string string {expression} more string after" # f is case insensitive
```

It supports all Python expressions inside curly braces, can be function calls, arithmetic, methods, of course can also put [ternary expressions](#ternary-expressions).

Its performance is superior, **faster** than `%` formatting and `str.format()` method formatting. Because it's parsed at compile time.
### Formatting Options
There are many formatting options to choose from inside the curly braces, just add a colon `:` after the expression in curly braces.

- **Float precision** `{value:.2f}` means keep two decimal places, using rounding.

> The round() function in Python and decimal keeping in f-string both use "banker's rounding", that is, **when the discarded digit is exactly 5**, if the previous digit is *even*, then **discard**; if *odd*, then *carry over*.

- Alignment and padding: `{value:>10}` means right align, total width 10; `{value:<10}` self-explanatory; while `value:^10` means center align.

- Conversion flags: ~Figure it out yourself, not teaching.~

### Advanced Usage

- Multi-line f-string: Create multi-line f-string with **triple quotes**, not shown here.
- Unpack dictionary, see
```python
data = {"name": "Charlie", "score": 95}
print(f"Player {data['name']} scored {data['score']} points.")
# or
print(f"Player {data['name']:>10} scored {data['score']} points.")
```
- **Quote rules**: **Cannot** directly use quotes of the same type as the outer string in the expression part of f-string, otherwise it will cause syntax errors. Can use different quotes or backslash escaping.

## Comprehensions

This is one of the most representative syntax sugars in Python, used to concisely initialize iterable objects. Its **core idea is to compress loop and conditional logic into one line expressions**. So concise!

### First, let's look at **list comprehensions**:
```python
[expression for item in iterable]
```
This code will get a list [], each element is the element calculated from expression in iteration.

Of course can be more complex, with some conditions:
```python
[expression for item in iterable if condition]
```
Simple enough to need no explanation!

### Next, let's look at **dictionary comprehensions**

Similar to list comprehensions, but need to **specify key and value expressions simultaneously**.
```python
{key_expression: value_expression for item in iterable if condition}
```
Simple enough to need no explanation!

### Finally, let's look at **set comprehensions**

~Tricking you, I'm not going to explain it~

*Cough*, of course I'll explain, let's first review the **set** we learned in elementary school grade 3, its characteristic is unordered and unique elements, so duplicate elements are automatically removed when creating sets:
```python
{expression for item in iterable}
```
**Summary**, so declarative! So satisfying to write!

## Chained Comparisons

The **simplest** one among all syntax sugars mentioned today! Link multiple comparison operations together, just like writing math:
```python
if 1 < x < 10:
    pass
```

Under guaranteed logic, you can write:
```python
if 1 < x > 0: # Anyway, both sides must be true
```

However, it's recommended not to write such super comparisons.

## Match-Case Syntax

Match-Case syntax was introduced much later, it was introduced in Python 3.10. Aimed at simplifying complex `if-elif-else` statement chains. Its syntax structure is written like this:
```python
match subject:          # subject is the target value you're matching
    case <pattern_1>:   # Define the first pattern
        <action_1>      # If matched, execute this action
    case <pattern_2>:   # Define the second pattern
        <action_2>      # If matched, execute this action
    case _:             # Wildcard pattern, matches any value (optional)
        <action_wildcard> # If none above match, execute this action
```
It will traverse each case from top to bottom, **stops when found**, won't continue checking cases below.

Wait, dude, what is a **pattern** thing, can't understand?

This brings us to its powerful feature **pattern destructuring**! It can unpack and assign variables to matching data structures (like tuples, lists, dictionaries) while matching.

You say you can't understand? Then let's first look at basic literal matching, that is, imitating C language's `switch-case` statements without pattern structure functions.
```python
status_code = 418

match status_code:
    case 200:
        print("Success")
    case 404 | 400: # | means or, these two cases use one result
        print("Not Found")
    case 500:
        print("Server Error")
    case _:  # Default case, wildcard
        print(f"Unknown status: {status_code}") # Just learned f-string syntax sugar, quick review
```

Let's also look at Python's **unpacking** capability, taking dictionary unpacking as an example, check VCR:
```python
user = {"type": "admin", "level": 5}

match user:
    case {"type": "guest"}:
        print("Hello guest!")
    case {"type": "user", "level": level} if level < 3:
        print(f"Hello user, your level {level} is low.")
    case {"type": "user", "level": level}:
        print(f"Hello user, your level {level} is good.")
    case {"type": "admin", "level": level}:
        print(f"Hello admin! Level: {level}") # So many f-strings, recall
```
Finally, this thing supports coexisting with if, we call it **conditional guard**, you can add extra conditions with if after case.
```python
match command:
    case ["move", direction, steps] if steps > 0:
        print(f"Moving {direction} for {steps} steps.")
    case ["move", _, steps] if steps <= 0:
        print("Can't move zero or negative steps!")
```

With the help of `match-case` syntax, we can write much clearer code than `if-elif-else`, and this writing style is more **declarative**, more readable.

## @ Decorators

Decorators are one of Python's most powerful and elegant features, it's a design pattern that allows you to dynamically modify or enhance the behavior of a function or class without modifying the original function code. I haven't fully learned it either, so just a small section for now.

The most difficult syntax sugar we've encountered so far to understand, let's start with sample code:
```python
import time
from functools import wraps

def timer(func):
    """
    A simple timing decorator.
    """
    # @wraps(func) is used to preserve the original function's metadata (like __name__, __doc__)
    @wraps(func)
    def wrapper(*args, **kwargs): # One * packs into a tuple, ** packs into a dictionary
        start = time.time()
        # Call the original function and get its return value
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} execution time: {end - start:.4f} seconds")
        return result  # Must return the original function's result
    return wrapper

# Use decorator
@timer
def slow_function():
    """A function that simulates time-consuming operations"""
    time.sleep(1)
    return "Task completed!"

# Call the decorated function
result = slow_function()
print(result)
# Output:
# slow_function execution time: 1.00 seconds
# Task completed!
```
The `@timer` here is syntax sugar, equivalent to `slow_function = timer(slow_function)`, the `timer` function receives `slow_function` as parameter `func`, then defines a `wrapper` function inside itself, adding timing logic to it.

Got it? No worries, I haven't fully figured it out either.

This thing can also add parameters, wait until I learn it to write that section!
