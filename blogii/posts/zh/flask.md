# 用 Flask 库构建简单的后端进程
 
**Published:** October 14, 2025
**Category:** Programming
**Read Time:** TBD

Flask 是 Python 的一个轻量级 Web 框架，浙江技术选考略有涉及，但并不深入。今天主包边学编写，大家一起学习一下这个库的详细语法、用法、写法。  

## 安装
好的，很显然你首先需要安装这个库，在**终端**输入：
```bash
pip install flask # 这个库是小写的f
```
你最亲爱的 `pip` 包管理器就会帮你下载 Flask 库。

## 基本应用结构  
```python
from flask import Flask

# 创建 Flask 应用实例，即用 Flask类 实例化了一个对象名为 app
app = Flask(__name__)

# 定义路由和视图函数，这里第一行用了 @ 装饰器
# @app.route('/') 告诉Flask：当用户访问根路径（/）时，调用下面的函数 hello()
@app.route('/')
def hello():
    return 'Hello, World!'

# 当直接运行该文件时，启动 Flask 开发服务器
if __name__ == '__main__':
    app.run()
```

### 当开始运行后，发生了什么？
你现在写好了上面这一段应用结构，然后点了运行。

Python 解释器执行，此时它干了这些事情：
- 导入Flask模块
- 创建应用实例
- 执行装饰器，注册路由
- 定义`hello()`函数，并与路由建立映射
- 检查`if __name__ == '__main__'` 条件，发现成立，返回True，执行下属语句
- 调用`app.run()` 启动服务器  
我明白，这怎么和天书一样的，看不懂咋办？你可能有这些疑问：  
1. 注册路由是什么？路由映射又是什么？
   Flask 在运行的时候会维护一个 URL 表，也就是路由表。路由表可能长这样：
   ```python
   # 完整的路由表条目示例
    route_entry = {
        'rule': '/',                           # URL规则
        'methods': ['GET', 'POST'],            # 允许的HTTP方法
        'endpoint': 'hello',                   # 端点名称
        'function': <function hello>,          # 视图函数对象
        'defaults': {},                        # 默认参数
        'host': None,                          # 主机限制
        'options': {'methods': ['GET']}        # 额外选项
    }
    ```
    *里面涉及到一些相对复杂的信息，我们之后再讲*
    而路由映射是URL到视图函数的映射关系，只代表路由表中 路由 与 视图函数 这一对映射。
2. 这些双下划线后面跟着的是什么？
    它们是 Python 的奇妙方法，也就是魔法方法（Magic Methods），这些方法让对象拥有特殊的行为：
    ```python
    class MyClass:
        def __init__(self, value):    # 初始化对象
            self.value = value

        def __str__(self):            # 字符串表示，print(obj)时调用
            return f"MyClass({self.value})"

        def __len__(self):            # 长度，len(obj)时调用
            return 1

        def __add__(self, other):     # 加法运算符，obj1 + obj2时调用
            return MyClass(self.value + other.value)

        def __getitem__(self, key):   # 索引访问，obj[0]时调用
            return self.value

        def __call__(self):           # 对象可调用，obj()时调用
            return f"Called with {self.value}"
    ```
3. 感觉还是好奇怪，不知道要问什么？
    那你问鸡毛，继续往下看！

### 插入讲讲 web 的四种方法