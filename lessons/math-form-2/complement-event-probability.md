--- 
title: "Chapter 13.2: Complement of an Event in Probability"
---

<style>
    .img {
        width: 250px
    }
    .hyperlink {
        color: #8ebeee
    }
</style>

首先，回顾一下前一课的 <u class="hyperlink">[Simple Probability](https://mathheroclub.com/mathematics/form-2/simple-probability)</u>

如果我们要找一个event在设定情况下会发生的Probability/概率，可以用一下的formula：
<br>$$P(event) = \frac{no. of (event)}{totalno.in(Sample Space)}$$

在找一个event的probability时，event只是占了sample space的一部分，对吧？那没有被占的部分，就是这一课里会学到的。。。
“complement of an event”。
<br><br>

Complement 的意思是 “补充的” 或 “使完善的” ... make a thing more complete.
<br><br>
所以，complement of an event就是指除了event, 使sample space完整的那个部分。

<br>
既然，complement of an event 和 event 是在**同一个** sample space里的，那加起就会等于1。

$$P(A) + P(A') = 1$$ 
$$or$$
$$1 - P(A) = P(A')$$

A'  代表 complement of event A <br><br><br>

<u>### Example Questions:</u>

<p>
    <img src="/images/poker-cards.jpg" alt="a few poker cards" class="img" />(Figure 1)
</p>

Q1. Figure 1 shows the cards that are in Alex's hands. In the event of Alex playing all of his spades ♠️ cards. Which of the following set represents the complement of the event in Alex's hands?
<br><br>
A: {5 of spades, 4 of diamonds, 3 of clubs, 2 of hearts, ace of spades}<br>
B: {4 of diamonds, 3 of clubs, 2 of hearts}<br>
C: {4 of diamonds, 3 of clubs, 2 of hears, ace of spades}<br>

<br><br>

照图里看Alex手上有5张牌。题目说Alex打出所有的黑桃牌，那**剩下**在Alex手里的牌就不会有黑桃 ♠️ 了。所以，**答案是B**
<br><br><br>
Q2. There 52 playing cards in a deck, and there are 4 ace cards, 12 face cards, the rest is number cards. What is the probability of the complement of getting a face card?

$$\begin{aligned}
Probability\\ (face\\ card) &=  \frac{no.\\ of\\ face\\ card}{total\\ no.\\ of\\ cards} \\\
&= \frac{12}{52}
\end{aligned}
$$
$$\begin{aligned}
Complement\\ of\\ (face\\ card')&: \\\ 1 - \frac{12}{52} &=  \frac{52}{52} - \frac{12}{52} \\\
&=\frac{40}{52} \\\ &=\frac{10}{13}
\end{aligned}
$$

这个题目里的event，就是扑克牌里的face cards。所以，可以用1减去probability of face cards 就是扑克牌其它部分的概率。
