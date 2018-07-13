---
title: Projects
nav: 4
---

<style>
#main-content img {float:none; padding:0; padding-bottom:30px}
.container {}
.col-2, .col-3, .col-4 {float:left; height:500px; overflow-y:auto;margin:1em;padding:2em;box-sizing:border-box; border:#eee 1px solid; padding-top:0}
.col-2 {width:calc(50% - 2em)}
.col-3 {width:calc(33% - 2em)}
.col-4 {width:calc(25% - 2em)}
@media (max-width: 1000px) {
  .col-2, .col-3, .col-4 { float: none; width: 100%; height: auto }
}
</style>

# Projects

This page collects experimental projects and research prototypes based on or inspired by REScala. For the related publications, please see the [publications](publications) page.

<div class="container">
<div class="col-3">

## [Distributed REScala](distributed)

[Distributed REScala](distributed) is the first language to bring Reactive Programming to the distributed setting. Its propagation algorithm SID-UP ensures glitch freedom in (distributed) value updates.
[**More...**](distributed)

</div>
<div class="col-3">

## Concurrent Reactive Programming

We propose a model for thread-safe reactive programming that ensures abort-free strict serializability under concurrency without sacrificing neither expressiveness nor consistency. We also propose an architecture for integrating a corresponding scheduler into the RP language runtime, such that thread-safety is provided "out-of-the-box" to the applications.
We show the feasibility of our proposal by providing and evaluating a ready-to-use implementation integrated into REScala.

</div>
<div class="col-3">

## [Debugging Reactive Programming](https://guidosalva.github.io/reactive-inspector/)

![RSS Reader](https://guidosalva.github.io/reactive-inspector/images/highlight-dependencies-children.png)
The reactive style requires a paradigm shift in the concepts needed for debugging, from imperative debugging to declarative debugging. Reactive Inspector is a such a debugger integrated with the Eclipse Scala IDE. It provides a number of features including visualizing reactive trees, back-in-time debugging, interactive queries of the graph, node breackpoiting and profiling.
[**More...**](https://guidosalva.github.io/reactive-inspector/)

</div>
<div class="col-4">

## [Case studies](studies)

![RSS Reader](images/shapes.png)
A portfolio of case studies that compare various design solutions including REScala, event-only implementations, signal-only implementations and callback-based versions.
[**More...**](studies)

</div>
<div class="col-4">

## [Todolist](todolist)

![Todolist](images/todolist.png)
A case study that implements the popular TodoMVC application (an application to maintain a simple todolist), that is implemented in many web frameworks to compare them.
[**More...**](todolist)

</div>
<div class="col-4">

## [The RESwing GUI Library](reswing)

A GUI library based on the Swing Java library which provides bindings for REScala i.e., the widgets expose reactive abstractions (signals and events) to the rest of the application.
[**More...**](reswing)

</div>
<div class="col-4">

## [Reactive Datastructures](datastructures)

A library of data structures base on REScala which enforce data dependencies among containers in the style of view maintenance in databases.
[**More...**](datastructures)

</div>
</div>

