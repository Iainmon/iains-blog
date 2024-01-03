+++
title = 'Interpretation of Mathematics'
date = 2024-01-02T22:56:58-10:00
draft = false
+++

```katex
\gdef\mathblue#1{\colorbox{blue}{$#1$}}
\gdef\mathgreen#1{\colorbox{green}{$#1$}}
\gdef\mathred#1{\colorbox{red}{$#1$}}
```

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
\forall A\forall B(A \subseteq B \leftrightarrow \forall x(x\in A\to x\in B) ),
```
adding a new symbol into my growing mathematical formal system. One issue with this is that I have changed the syntax of FOL by introducing the $\subseteq$ symbol. Another is that I am no longer in ZFC, but ZFC plus my new axiom. 

The current sense I have of definitions of properties is that they are abreviations or *macros*. So $A\subseteq B$ is an abbreviation for $\forall x(x \in A\to x \in B)$, so the property is $\subseteq$. In this way though, the property is not a component of the underlying ZFC set theory or FOL, but just a shorthand of the logical sentence that the notion "subset" is said to mean. 

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









