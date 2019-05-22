---
title: Projects
nav: 3
---

<style scoped>
 #main-content img {float:none; padding:0; padding-bottom:30px; height:150px}
</style>

# Projects

This page collects experimental projects and research prototypes based on or inspired by REScala.
Most of these projects are included in the REScala repository,
and we ensure that they still compile and run their tests with the current versions of REScala.
However, other than the minimum to keep the code usable,
these projects present snapshots of the research at that time,
and are not necessarily kept up-to-date.

For the related publications, please see the [publications]({{ site.github.baseurl }}/publications) page.

<div class="container">
<div class="row"><div class="col-sm-4">

## [Distributed REScala](distributed)

![Distributed](distributed.png)

Distributed REScala is the first language to bring Reactive Programming to the distributed setting. Its propagation algorithm SID-UP ensures glitch freedom in (distributed) value updates.
[**More...**](distributed)

</div><div class="col-sm-4">

## Concurrent Reactive Programming

![Concurrent](concurrent.png)

We propose a model for thread-safe reactive programming that ensures abort-free strict serializability under concurrency without sacrificing neither expressiveness nor consistency. We also propose an architecture for integrating a corresponding scheduler into the RP language runtime, such that thread-safety is provided "out-of-the-box" to the applications.
We show the feasibility of our proposal by providing and evaluating a ready-to-use implementation integrated into REScala.

</div><div class="col-sm-4">

## [Reactive Debugging](https://guidosalva.github.io/reactive-inspector/)

![Reactive Inspector](https://guidosalva.github.io/reactive-inspector/images/highlight-dependencies-children.png)

The reactive style requires a paradigm shift in the concepts needed for debugging, from imperative debugging to declarative debugging. Reactive Inspector is a such a debugger integrated with the Eclipse Scala IDE. It provides a number of features including visualizing reactive trees, back-in-time debugging, interactive queries of the graph, node breackpoiting and profiling.
[**More...**](https://guidosalva.github.io/reactive-inspector/)

</div></div>
<div class="row"><div class="col-sm-3">

## [Case studies](studies)

![Shapes](shapes.png)

A portfolio of case studies that compare various design solutions including REScala, event-only implementations, signal-only implementations and callback-based versions.
[**More...**](studies)

</div><div class="col-sm-3">

## [Todolist](todolist)

![Todolist](todolist.png)

A case study that implements the popular TodoMVC application (an application to maintain a simple todolist), that is implemented in many web frameworks to compare them.
[**More...**](todolist)

</div><div class="col-sm-3">

## [RESwing](reswing)

A GUI library based on the Swing Java library which provides bindings for REScala i.e., the widgets expose reactive abstractions (signals and events) to the rest of the application.
[**More...**](reswing)

</div><div class="col-sm-3">

## [Reactive Datastructures](datastructures)

A library of data structures base on REScala which enforce data dependencies among containers in the style of view maintenance in databases.
[**More...**](datastructures)

</div></div>
</div>

