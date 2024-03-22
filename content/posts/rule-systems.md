+++
title = 'Rule Systems'
date = 2024-01-01T21:07:28-10:00
draft = false
tags = ['rule systems', 'logic', 'zfc']
+++

```katex
\def\infer#1#2{\dfrac{#2}{#1}}
```

Rule systems are seen in almost every programming languages paper. They are a tool for conveying very precise notions of computation. In general, is not easy to give a succinct definition of a rule system, but one can be described easily by adopting a specific representation. 

A rule system consists of a set of statements of the form
```katex
\infer{Q}{P_1 \quad \ldots \quad P_n}
```
where $Q,P_i$ are propositional schemata. Here, $Q$ is called the conclusion and $P_i$ are called the premises.

In an acceptable interpretation that I prefer, $Q$ and $P_i$ are schemtata for first order sentences that lack any quantification (i.e. $P_i$ is in the form of $x_i \in A_i$), and the above statement logically means
```katex
(P_1 \wedge \ldots \wedge P_n) \implies Q.
```
So a rule can be read: if $P_1$ and $\ldots$ and $P_n$, then $Q$. 

In essence, rule systems describes the objects of sets. For example, 
```katex
\infer{0\in\mathbb N}{}\qquad \infer{S(n) \in \mathbb{N}}{n\in\mathbb{N}}
```
are the rules that may be used to describe the set of natural numbers. This shows how an inductive set may be defined via a rule system. Though, here we are interested in the case of relations. 


When the set $A$ being described is a relation, that is $A\subseteq R_1\times \ldots \times R_n$ for sets $R_i$, $A$ is essentially the truth set that is inductively defined via the rules. When presented, mixfix notation is almost always used to better convey the meaning of the relation. For example, 
```katex
\infer{(n,S(n))\in \textsf{LT}}{}\qquad \infer{(n,S(m))\in \textsf{LT}}{(n,m)\in \textsf{LT}}
```
where $(i,j)\in \textsf{LT}$ can be denoted as $i < j$. It is also common for the assumption of a component belonging to a set be omitted from the premises and instead stated elsewhere. So we say $n,m\in \mathbb{N}$ and $\textsf{LT}\subseteq \mathbb N \times \mathbb N$.


For ease of reference, we will refere to $(i,j)$ or $i < j$ as the *judgement* and the values $i,j$ as *components*. We will also define the truth of a judgment to be equivlent to it belonging to the set that is defined, so $i < j$ is true when $(i,j) \in \textsf{LT}$. Then we can rewrite this rule system as
```katex
\infer{n < S(n)}{}\qquad \infer{n < S(m)}{ n < m }.
```

TODO: more examples

#### Proof System

How do you know if a given judgment is true? A judgment is true when you can derive it from the axioms using the rules in the rule system. A good way to check if judgment is true for a rule system is to start with the conclusion, then attempt to recursively apply the rules by pattern matching on the conclusions, filling out each of the premises. This process results in a *proof tree* for the original judmgnent, and the truth is known if the leaves of the tree are axioms, and each rule is correctly applied. Check out [this article](https://danilafe.com/blog/bergamot/) by Daniel.

For an example, here is a proof tree for $2 < 5$
```katex
\infer{2 < 5}{\infer{2 < 3}{} \qquad \infer{3 < 5}{\infer{3 < 4}{} \qquad \infer{4 < 5}{}}}
```
using the rules
```katex
\infer{n < n + 1}{}\qquad \infer{n < m}{ n < k \qquad k < m }.
```
where $n,m,k\in \mathbb{N}$.

Interestingly, not all rule systems can be checked against in this way, such as propositional logic. The systems for which this proof tree generation process works are called syntax directed rule systems.


#### Computation

Since a function is just a special kind of relation, it is possible for a function to be defined via a rule system. Computer scientists are mostly interested in rule systems that describe functional relations, as these are often descriptions for how the function is computed. 

As an example, suppose $\textsf{fac} : \mathbb{N} \to \mathbb{N}$ the factorial function $n\mapsto \prod_{k = 1}^n k$, which has the equivelent recursive definition
```katex
\textsf{fac}(n) = \begin{cases}
0 & \text{if $n = 0$}\\
n \cdot \textsf{fac}(n - 1) & \text{otherwise}
\end{cases}.
```
Note that $\textsf{fac}(n) = k$ is equivelent to $(n,k)\in \textsf{fac}$, for any $n,k\in \mathbb{N}$. Using the recursive definition, we can define $\textsf{fac}$ in via the rules
```katex
\infer{\textsf{fac}(0)=1}{} \qquad \infer{\textsf{fac}(n)=k}{\textsf{fac}(n-1)=m \qquad n \cdot m = k}.
```
So, every judgment that we derive in this system, $(n,k)\in \textsf{fac}$ or $\textsf{fac}(n)=k$, we have that $k$ is the result of computing the $\textsf{fac}$ function on the input $n$.









