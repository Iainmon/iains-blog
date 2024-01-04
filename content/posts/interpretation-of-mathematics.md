+++
title = 'Interpretation of Mathematics'
date = 2024-01-02T22:56:58-10:00
draft = false
+++

```katex
\gdef\mathblue#1{\colorbox{blue}{$#1$}}
\gdef\mathgreen#1{\colorbox{green}{$#1$}}
\gdef\mathred#1{\colorbox{red}{$#1$}}
\gdef\mathhl#1{\colorbox{Orchid}{$#1$}}

\gdef\lequiv{\fallingdotseq}
```
$\gdef\lequiv{\fallingdotseq}$

What mathematics describes is a long standing issue in philosophy. It is hard to break into this subject, but I hope that my intent can be shared. 

Since I am a mathemtics student who is interested in formal systems, I can't help to feel nervous when my professor says 
> $A$ is a subset of $B$ if for all $x$, $x\in B$ whenever $x \in A$,

or
> $f$ is a function from $A$ to $B$ when $f\subseteq A \times B$ and for all $x \in A$, there exists a unique $y\in B$ such that $(x,y)\in f$. 

I have found that my mathematics peers don't share the same discomfort, nor find any relevance in my own. 

The issues I have come from my attempt to unify what I know about formal systems and first order logic, with mathematics is presented and talked about.


#### First Order Logic

First Order Logic or FOL is a formal system used by mathematicians and philosophers that describes the logical interaction of properties of objects. FOL is usually characterized by the ability to form logical assertions of objects having certain relationships, while abstracting over any specific object. 

Examples of such statements are
```katex
\forall y\forall x (P\, x \wedge Q\, x\, y )\qquad \forall x\exists y (P\, x \vee \neg P\, y)\qquad \exists a (P\, a \to Q \, a\, a).
```

FOL comes with several rules of inference that describe how new true statements can be used and created from existing ones that are known to be true. 

A theory in FOL is a collection of FOL statements called *axioms*, that describe a finite number of predicates (like $P$ or $Q$).

#### ZFC

ZFC is probably the most famous FOL theory, which has nine axioms that all describe the $\in$ predicate that relates sets to their elements. The intention of ZFC is to be a clearly defined foundation for which all mathematical truths can be proved. So any mathematical theorem must somehow be derived from the axioms of ZFC, using the rules of inference from FOL. This amazing.



But if you look at the axioms of ZFC and the language of FOL, you will not see any occurance of the symbol $\subseteq$, $<$, $\cup$, $+$, or $\neq$, so how can you formally prove the theorem 
> *for any integers $a$ and $b$, if $a < b$, then $a \neq b$*,

if there is no $<$ or $\neq$ symbol? The only non-logical symbol is $\in$!

### Definitions

Mathematical definitions consist of 1) a property that objects can have, and 2) the condition that those objects must meet to exibit the property. Examining the definition
> $A$ is a subset of $B$, written as $A \subseteq B$, when for all $x$, if $x\in A$ then $x\in B$,

we can see that *is a subset of* or $\subseteq$ is the property, and *for all $x$, if $x\in A$ then $x\in B$* is the condition.


I used to think that a definition introduced a new axiom, on top of ZFC, that I was supposed to add to my mathematical library. In the case of $\subseteq$, the axiom would be
```katex
A \subseteq B \leftrightarrow \forall x(x\in A\to x\in B),
```
adding a new symbol into my growing mathematical formal system. One issue with this is that I have changed the syntax of FOL by introducing the $\subseteq$ symbol. Another is that I am no longer in ZFC, but ZFC plus my new axiom. 

Things didn't feel righ like this though. Especially since mathemeticians don't use "if and only if" in definitions. The only way I could reconsile my view with what I saw was to deem mathemeticians as being sort of hand wavy, or think that *if* meant *iff* when in a definition, as some sort of convention. However, mathemeticians are not known for being imprecise.


The current sense I have of definitions of properties is that they are lossless abreviations or *macros*. So $A\subseteq B$ is an abbreviation for $\forall x(x \in A\to x \in B)$, so the property is $\subseteq$. In this way though, the property is not a component of the underlying ZFC set theory or FOL, but just a shorthand of the logical sentence that the notion "subset" is said to mean. 

In this interpretation, any theorem can be reduced to its full logical sentence, leaving the underlying logical sentence unchanged. In other words, when a mathemetician uses a defined property in a theorem, they are just writing the shorthand version of that property's condition. 

For example, the statement
```katex
\text{if $\mathblue{A\subseteq B}$ and $\mathgreen{B \subseteq C}$, then $\mathred{A\subseteq C}$}
```
is the same as
```katex
\mathblue{A\subseteq B} \wedge \mathgreen{B \subseteq C}\to \mathred{A\subseteq C}
```
which is the same as
```katex
\mathblue{\forall x(x \in A\to x \in B)}\wedge \mathgreen{\forall x(x \in B\to x \in C)} \to \mathred{\forall x(x \in A\to x \in C)}
```

In this way, it *does* make sense to say 
> $A\subseteq B$ if $\forall x(x \in A\to x \in B)$,

since the *if* does not represent a connective in FOL, as in $\to$, but rather a connective in natural language, English. 

The nature of definitions then change slightly. They can be thought of as providing a lens or filter for certain forms of statements, so the statements may be reasoned about at a higher level. Definitions may then also be seen as philisophical statements, that connect concepts with their set theoretic embedding. 

As you become familiar with a certain area of mathematics, you will start to come up with your own corrallaries and lemmas. Many of them will be useless, but in order to determine the significance, you have to examine them at a higher level, by applying definitions.


### Formal Definitions in Set Theory

Suppose $A$ is a set. What can you do with $A$? From a logical perspective, all that is important is what $x\in A$ means. When doing proofs, mathematicians care more about this than what the set actually is. 

For any two sets $A$ and $B$, consider the intersection $A\cap B$. 

Using *$A\cap B$ is the set of elements that are shared by $A$ and $B$*, we have no idea what it means for $x\in A\cap B$ (ignoring the obvious). Instead, $A\cap B$ is better characterized by the assertion 
> *$x\in A\cap B$ means $x\in A$ and $x\in B$*,

which tells us exactly how to deal with the set $A\cap B$ logically. After seeing and working with this definition, one can say *$A\cap B$ is the set of elements that are shared by $A$ and $B$*.

This shows how to account for definitions *of* sets, rather than relationships of them, like $A\subseteq B$. In both situations, a logical statement was given as an abreviation for more statements. To make this more sussinct, we can introduce a notation that captures this. 

To abreviate *is the same as* or *means* by $\lequiv$, which can be thought of as an equivelance. This allows us to write meta statements like
```katex
\mathgreen{A\cap B\subseteq C}\lequiv \mathgreen{\forall x(\mathblue{x\in A\cap B} \to x\in C)}\lequiv \mathgreen{\forall x(\mathblue{x\in A \wedge x\in B} \to x\in C)}.
```
In many presentations, $\equiv$ is used to convey logical equivelance, which is a similar notion. The distinction between $\equiv$ and $\lequiv$ is subtle, but it is important to see that they are not the same. For two propositions are logically equivalent, $P\equiv Q$, they only need to share the same truth value under every possible interpretation (world or variable assignment). Logical equivelance does not require $P$ and $Q$ to mean the same thing, as 
```katex
x\in A \wedge y\in B \equiv y\in B \wedge x\in A
```
but
```katex
x\in A \wedge y\in B \not\lequiv y\in B \wedge x\in A.
```
It's worth noting that $P\lequiv Q$ implies $P\equiv Q$, since $\equiv$ is reflexive. Since a sequence of $\lequiv$ equations has no effect on the underlying logical sentances, it has no importance in a formal proof, unlike $\equiv$. Therefore, $\lequiv$ equivelancies are only useful for *rephrasing* logical sentances for the benefit of understanding or communication. We can see how both may be used to show $x\in A\cap B$ is logically the same as $x\in B \cap A$,
```katex
\mathblue{x\in A\cap B}\lequiv \mathblue{x\in A\wedge x\in B }\equiv \mathgreen{x\in B \wedge x\in A}\lequiv \mathgreen{x\in B\cap A}.
```
Here, same colors indicate the same underlying logical sentence.


Mathematicians have the ability to apply both kinds of equivelance as they reason, but usually don't recognize the usage of $\lequiv$.


#### Draft notes after this
It is important to note 

To indicate a definition, which is an assertional $\lequiv$ statement, we will use $:\lequiv$, so
```katex
\begin{align*}
A\subseteq B & :\lequiv \forall x(x \in A\to x \in B)\\
x\in A\cap B &:\lequiv x\in A\wedge x \in B
\end{align*}
```







