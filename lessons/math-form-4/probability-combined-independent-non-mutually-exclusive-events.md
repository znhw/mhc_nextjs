---
title: "Chapter 9.1: Probability of Combined Events - Independent & Non-mutually Exclusive Events"
---

<style>
    .img {
        width: 450px
    }
    .hyperlink {
        color: #8ebeee
    }
</style>

想象一下以下的情景：
<br><br>
你的班主任说要选新的班长和副班长。班上有30位学生。
<br><br>

可以被提名当<u>班长</u>必须符合以下条件：
<br><br>
Event A - 有参加过运动会比赛（12人）
<br>

**和 AND** 
<br>
Event B - 去年考数学80%以上（15人）

<br><br>


假设说你去年数学考了85%，也参加了篮球比赛。
<br><br>

1. 那你被选为班长的概率是多少？ 
<br><br>

当班长的概率：
$$\begin{aligned}
P(event) &= \frac{no. of (event)}{total\\ no.\\ in(Sample Space)} \\\ \\\
P(A) &=  \frac{\cancel{12}}{\cancel{30}}   
 = \frac{2}{5} \\\ \\\
P(B) &= \frac{\bcancel{15}}{\cancel{30}} 
 = \frac{1}{2}
\end{aligned}
$$

<p>
    <img src="/images/combined-probability-and-events.png" alt="event A and event B intersecting" class="img" />(Figure 1)
</p>

现在，找到了Event A 和 Event B 各自的probability，可是我们要找的是根据Figure 1所涂黑的部分，就是**两个events都要有**的。这时我们就可以把
<br>
P(A) 乘 ✖️ P(B)

$$\begin{aligned}
P(A\\ and\\ B)&= \frac{2}{5} \\ \times \\ \frac{1}{2} \\\ &= \frac{\cancel{2}}{\cancel{10}} \\\ &= \frac{1}{5}
\end{aligned}
$$

$$
\therefore 你被选为班长的概率是\\ \frac{1}{5}\\ /\\ 0.2
$$

<br><br>

可以被提名当<u>副班长</u>必须符合以下条件：
<br><br>
Event A - 有参加过运动会比赛（12人）
<br>

**或 OR** 
<br>

Event B - 去年考数学80%以上（15人）
<br><br>

2. 你被选为副班长的概率是多少？
<br><br>

<p>
    <img src="/images/combined-probability-or-events.png" alt="event A or event B not intersecting" class="img" />(Figure 2)
</p>

这次就跟Q1不一样了，我们只要找Event A 或 Event B发生的概率，而且不能包括有两个events的交叉点。这时我们可以把
<br>
P(A) 加 ➕ P(B) 然后再减 ➖ P(A & B)
<br><br>

当副班长的概率：

$$\begin{aligned}
P(A) + P(B) - P(A\\ and\\ B) &= \frac{2}{5} + \frac{1}{2} - \frac{1}{5} \\\  &= \frac{4}{10} + \frac{5}{10} - \frac{2}{10} \\\ &= \frac{7}{10} 
\end{aligned}$$

$$
\therefore 你被选为副班长的概率是\\ \frac{7}{10}\\ /\\ 0.7
$$

所以这也表示你当副班长的机会比较高，因为只需符合其中一个条件。
<br><br>
<br><br>
<br><br>

## 	Probability of Combined Events 
就是计算两个事件,events  结合,combined 起来会发生的可能性。并且，两个events可以结合combined的方式有几种。
<br><br> 

### Non-mutually Exclusive Events
以上例子combined的方式称为“Non-mutually exclusive event”，就是说两个events有可能同时发生的。
<br><br> 
Non - 非/不是
<br> 
Mutual - 相互的
<br> 
exclusive - 独占的
<br> 
Non-mutually exclusive event - 不是相互排斥的  / 可共存

<br><br> 
### Independent Events  
还有以上例子的两个Events也称为Independent Events （独立性事件），说明Event A 发生时不会影响 Event B发生的概率。



<br><br><br>

### Recap  

- Non-mutually Exclusive Events如果用到AND，两个events都符合 / 必须同时发生：
$$P(A) \times P(B)$$ 

- Non-mutually Exclusive Events用到OR，只有一个event符合 / 可以其中一个发生：
$$P(A) + P(B) - P(A\\ and\\ B)$$

<br><br><br>

### Challenge Question:

How many students in the class satisfied the conditions of both Event A AND Event B?
<br>
班上有多少学生同时符合Event A 和 Event B 的条件？
<br><br>
要知道答案可以在FB或IG，DM @mathheroclub！：）