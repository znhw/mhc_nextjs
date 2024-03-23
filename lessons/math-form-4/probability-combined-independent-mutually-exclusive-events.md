---
title: "Chapter 9.2: Probability of Combined Events - Independent & Mutually Exclusive Events"
--- 
<style>
    .img {
        width: 450px
    }
    .hyperlink {
        color: #8ebeee
    }
</style>
上一课，所学的 <u class="hyperlink">[Non-mutually exclusive events](https://mathheroclub.com/mathematics/form-4/probability-combined-independent-non-mutually-exclusive-events)</u> 跟这里会学到的“Mutually Exclusive Events” 只有一个区别，那就是两个events不可能同时发生！
<br><br>
Mutually (adjective) - 相互的
<br>
Exclusive (noun) - 独占的 
<br>
Mutually Exclusive Event - 相互排斥的 / 不可共存
<br><br>

<p>
    <img src="/images/combined-probability-mutually-exclusive-events.png" alt="event A and event B are independent and not intersecting" class="img" />(Figure 1)
</p>
 

石头、剪子、布游戏就是一个Mutually Exclusive Events的例子，因为你或对手每一次只能出其中一个手势，也表示一个时间只有**一个event**可以发生。

<br><br>

<u>### Example Question:</u>

You and your friend plays a set of rock paper scissor game. What is the probability of your friend choosing to play scissors or paper?
<br><br>

既然，题目说明只玩一场的猜拳，所以all possible outcomes / events：
$$ S = \\{scissors,\\ paper,\\ rock \\} $$

Probability of Scissors:
$$ P(Scissors)= \frac{1}{3}$$

Probability of Paper:
$$ P(Paper)= \frac{1}{3}$$

当要找P(Scissors) OR 或 P(Paper)发生的概率，跟<u class="hyperlink">[Non-mutually exclusive events](https://mathheroclub.com/mathematics/form-4/probability-combined-independent-non-mutually-exclusive-events)</u> OR 的做法一样，就直接**把两个的probability加起来**。分别在于，因为mutually exclusive events没有交叉点，所以**不用再减**掉P(A & B)。
<br><br>
Probability of Scissors OR Paper:
$$ 
\begin{aligned}
P(Scissors) + P(Paper) &= \frac{1}{3} + \frac{1}{3} \\\ &= \frac{2}{3}
\end{aligned}
$$

<br><br>

其它Mutually Exclusive Event的例子包括：
- Tossing a coin（ 抛一个硬币）
- Rolling a dice （掷一个骰子）
- Throwing a dart on the spinner （向旋转器投掷一个飞镖）
<br><br>

这系列的活动（activity），一个时间段里只能够拥有一个event / outcome。

<br><br><br>

### Recap   
<br>

Probability of Combining Mutually Exclusive Events 是指只有Event A **OR 或** Event B 可以发生，但是结合起来计算的概率：
$$P(event A) + P(event B) $$