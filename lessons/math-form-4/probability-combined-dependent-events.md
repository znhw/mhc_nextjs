---
title: "Chapter 9.3: Probability of Combined Events - Dependent Events"
---

<style>
    .img {
        width: 450px
    }
    .hyperlink {
        color: #8ebeee
    }
</style>

Dependent 的意思是 “依赖的” 或 “相关的”
<br><br>

在 <u class="hyperlink">[Chapter 9.1](https://mathheroclub.com/mathematics/form-4/probability-combined-independent-non-mutually-exclusive-events)</u> 和 <u class="hyperlink">[Chapter 9.2](https://mathheroclub.com/mathematics/form-4/probability-combined-independent-mutually-exclusive-events)</u> 都是关于Independent Events，独立性事件，这两课的分别在于events结合的方式。
<br><br>

这里，我们要学的是Dependent Events，非独立事件。就是说如果两个events是dependent的，一个event的probability是会**被前面已经发生的event而受影响**。

<br><br>

<p>
    <img src="/images/pokemon-gashapon.jpeg" alt="pokemon gashapon illusttration" class="img" />(Figure 1)
</p>
<br><br>
<u>### Example Questions:</u>

1. There 8 pokemon balls in the gashapon machine, each containing different pokemon. You're given 2 coins so that you can get 2 pokemon from the machine, and no pokemon is replaced each time 1 is removed. If you got pikachu the first time, what is the probability of getting charmander after that? 
<br><br>

$$ 
\begin{aligned}
A. \frac{1}{8} \\\ B. \frac{1}{7} \\\ C. \frac{2}{8}
\end{aligned}
$$

题目说明如果第一次你从Pokemon扭蛋机获得pikachu, 之后你可以获得charmander的probability是多少。而且还说了每次1个Pokemon被取得时，没有新的Pokemon会加进去。所以，答案是**B**, 得到pikachu后扭蛋机里就剩7个Pokemon。

<br><br>

2. What is the probability that the first pokemon you get is pikachu and the second pokemon you get is charmander? 
<br><br>

*还记得吗？只要probability有用到 AND 就把两个events的 probability 乘✖️ 起来。*
<br><br>

Probability of getting pikachu first, then charmander:

$$
\begin{aligned}
P(A\\ and\\ B) &= P(A) \times P(B|A) \\\ &= \frac{1}{8} \times \frac{1}{7} \\\ &= \frac{1}{56}
\end{aligned}
$$

P(B｜A) 指，B 的 Probability 当 Event A 已经发生了
<br><br>

所以，在 dependent events 要留意的是，第二个 event 的 **sample space**，会按照第一个 / 之前的 event 而改变。

<br><br><br>


### Recap   
<br>
 
- 每一次 event 发生的 probability 会被上一个 结果 / outcome 受影响，第一个 event 会影响第二个 event 的 probability。


