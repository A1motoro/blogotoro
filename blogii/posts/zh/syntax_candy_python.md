# Python 中的语法糖

**Published:** October 10, 2025
**Category:** Programming
**Read Time:** TBD

本文将要介绍几个 Python 中优雅的语法糖，熟练运用这些巧妙的语法糖可以让你的代码变得更加 Pythonic 哦！

~有人要问了，语法糖是啥，我直接一手颁奖`a, b = b, a`就是Python最伟大的语法糖！~

## Lambda 函数

Lambda 函数是 Python 中的**一次性**的、**匿名函数**。我们拿下面这个简单的小例子来讲清楚：
```python
square = lambda x: x ** 2
print(square(4)) # 输出 16
# 这等价于：
def square(x):
    return x ** 2
```
为什么要多此一举搞这么一个一次性的函数呢？它最经常和优雅的应用是为复杂函数传参。

请看VCR：  
``` python
# 假设我们有如下字典，要对他们按照value值排序
d = {'apple': 2, 'banana': 1, 'cherry': 3}
sorted_items = sorted(d.items(), key=lambda item: item[1])
# 这里的 key 不是字典的键，而是sorted()的参数，告诉函数按照哪个值的大小来排序 
```  
注意到有个`lambda item: item[1]`，这就是 Lambda 函数。它的作用完全相当于：
```python
def trans(dict.item):
    return item[1]
```
不过后者可以反复调用，而Lambda 函数在一行内完成了函数的定义和调用，然后它就**无法被二次调用**了。

它只支持单表达式，[三元表达式](#三元表达式)当然算单表达式了，请看VCR：
```python
# 这是一个三元表达式，是被允许的
sign = lambda x: "positive" if x > 0 else "negative"
print(sign(5)) # 输出 positive
print(sign(-3)) # 输出，聪明的读者能想到吗？
```
要注意的是，Lambda 函数的**作用域**是它定义的那一行所在的作用域。

*不建议把Lambda的参数名设置为当前作用域已经定义过的函数名*，语法上是允许的，但是语义上是危险的。

> Lambda 函数在 Python 1.0 就已经被引入Python，所以在任何一个Python解释器上它都能正确运行！它基本上可以称得上是Python最古老的语法糖了。

## 三元表达式

**三元表达式**，或者**条件表达式**或者**三元运算符**，是 Python 2.5 版本引入的语法糖。它允许你将一个`if-else`逻辑压缩成一个表达式。它的语法结构如下：
```python
value_if_True if condition else value_if_False # 这是一个表达式
```
它会先判断condition成立与否，成立时表达式的值为前面，不成立就是后面。

与C语言家族的三元表达式`condition? value_if_true : value_if_false`不同，需要注意。

三元表达式当然**可以嵌套**，但是这并不被推荐，因为会乱到不知天地为何物。尝试读一下：
```python
# 根据分数返回等级
grade = 'A' if score >= 90 else 'B' if score >= 80 else 'C' if score >= 70 else 'F'
```  
这时候，可以转身向`if-else`语句走去。或者，也可以看看[Match-Case](#Match-Case语法)。  

## F-String 语法

`f-string`中的 f 代表 formatted，这个语法帮助开发者十分轻松地格式化字符串，*简洁，高效，可读性强！*

- **目的** 是将变量或表达式插入到字符串中间。
- **本质** 不是一个字符串常量，而是一个运行时求值的**表达式**。

语法结构如下：
```python
f"字符串字符串字符串 {表达式} 后面还有字符串" # f 大小写不影响
```

它支持所有Python表达式放进花括号里面，可以是函数调用、算数、方法，当然也可以放[三元表达式](#三元表达式)。

它的性能优越，比`%`格式化和`str.format()`方法格式化更**快**。因为它在编译时解析。
### 格式化选项
大括号里面有很多格式化选项任君挑选，只需要你在花括号的表达式后加一个冒号`:`。

- **浮点数精度** `{value:.2f}`表示保留两位小数，采用四舍五入。

> Python 中的round()函数以及f-string中的保留小数都采用"银行家舍入法"，即**舍弃的数字恰好是5时**，如果前面一位是*偶数*，则**舍去**；是*奇数*，则*进位*。

- 对齐与填充：`{value:>10}`表示右对齐，总宽度为10；`{value:<10}`无需多言；而`value:^10`表示居中对齐。

- 转换标志：~自己学去，不教。~

### 高级用法

- 多行 f-string：用**三引号**创建多行 f-string，这里不展示了。
- 解包字典，请看
```python
data = {"name": "Charlie", "score": 95}
print(f"Player {data['name']} scored {data['score']} points.")
# 或者
print(f"Player {data['name']:>10} scored {data['score']} points.")
```
- **引号有说法**：在 f-string 的表达式部分**不能**直接使用与外层字符串相同的引号，否则会引发语法错误。可以使用不同的引号或反斜杠转义。

## 推导式

这是 Python 中最具代表性的语法糖之一，用于简洁地初始化可迭代对象。它的**核心思想是将循环和条件逻辑压缩成一行表达式**。十分的简洁啊！

### 先来看**列表推导式**：
```python
[expression for item in iterable]
```
这段代码会得到一个列表[]，每个元素是expression在迭代中算出来的元素。

当然可以复杂一点，带一点条件：
```python
[expression for item in iterable if condition]
```
简单到无需说明！

### 再来看看**字典推导式**

与列表推导式类似，但需要**同时指定键和值的表达式**。
```python
{key_expression: value_expression for item in iterable if condition}
```
简单到无需说明！

### 最后看看**集合表达式**

~逗你的，我才不讲呢~

咳咳，当然会讲的，我们先复习一下小学三年级学习的**集合**，无序且元素唯一是它的特性，所以再创建集合的时候会自动去除重复元素：
```python
{expression for item in iterable}
```
**总结**，声明性好强！写起来好爽！

## 连续比较

今天提到的所有语法糖中**最简单**的一个！将多个比较操作链接在一起，就像你写数学一样：
```python
if 1 < x < 10:
    pass
```

在保证逻辑的情况下，可以这样写：
```python
if 1 < x > 0: # 总之就是两头都成立
```

不过，建议这种超级比较不要写。

## Match-Case 语法

Match-Case语法则引入的晚了很多，它在 Python 3.10 版本引入。旨在简化复杂的`if-elif-else`语句链条。它的语法结构这么写：
```python
match subject:          # subject 是你要匹配的目标值
    case <pattern_1>:   # 定义第一个模式
        <action_1>      # 如果匹配，执行此动作
    case <pattern_2>:   # 定义第二个模式
        <action_2>      # 如果匹配，执行此动作
    case _:             # 通配符模式，匹配任何值（可选）
        <action_wildcard> # 如果以上都不匹配，执行此动作
```
它会从上往下遍历每一个case，**找到即停**，不会继续检查后面的case。

等等，不是兄弟，**模式**是什么东西，看不懂啊？

这就要说到它的强大特性**模式解构**功能了！它可以在匹配的同时，把符合的数据结构（比如元组、列表、字典）中的元素解包并赋值给变量。

你说看不懂？那我们先看基础字面量的匹配，也就是先不用模式结构功能，模仿C语言中的`switch-case`语句。
```python
status_code = 418

match status_code:
    case 200:
        print("Success")
    case 404 | 400: # | 表示或，就是这俩case用一个结果
        print("Not Found")
    case 500:
        print("Server Error")
    case _:  # 默认情况，通配符
        print(f"Unknown status: {status_code}") # 刚刚学过的f-string语法糖，马上复习一下
```

再看看Python的**解包**能力，以解包字典为例，请看VCR：
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
        print(f"Hello admin! Level: {level}") # 好多f-string，回忆一下
```
最后，这玩意是支持和if共存的，我们叫做**条件守卫**，可以再 case 后用 if 添加额外的条件。
```python
match command:
    case ["move", direction, steps] if steps > 0:
        print(f"Moving {direction} for {steps} steps.")
    case ["move", _, steps] if steps <= 0:
        print("Can't move zero or negative steps!")
```

在`match-case`语法帮助下，我们能写出比`if-elif-else`清晰得多的代码，而且这种写法更**声明性**，更易读。

## @ 装饰器

装饰器是 Python 中最强大、最优雅的特性之一，它是一种设计模式，允许你在不修改原函数代码的前提下，动态地修改或增强一个函数或类的行为。主包也没完全学会，所以先讲一小段。

我们现在遇到的最难理解的语法糖，我们从样例代码学起：
```python
import time
from functools import wraps

def timer(func):
    """
    一个简单的计时装饰器。
    """
    # @wraps(func) 用于保留原函数的元信息（如 __name__, __doc__）
    @wraps(func)
    def wrapper(*args, **kwargs): # 一个 * 打包成一个元组， ** 打包成一个字典
        start = time.time()
        # 调用原函数，并获取其返回值
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} 执行耗时: {end - start:.4f} 秒")
        return result  # 必须返回原函数的结果
    return wrapper

# 使用装饰器
@timer
def slow_function():
    """一个模拟耗时操作的函数"""
    time.sleep(1)
    return "任务完成！"

# 调用被装饰的函数
result = slow_function()
print(result)
# 输出:
# slow_function 执行耗时: 1.00 秒
# 任务完成！
```
其中`@timer`是语法糖，相当于`slow_function = timer(slow_function)`，`timer`函数接收`slow_function`作为参数`func`，然后在自己体内又定义了一个`wrapper`函数，其中加入了计时逻辑。

学懂了吗？没关系，主包也是一知半解的。

这玩意还能加参数，等主包学会了再写这一段！
