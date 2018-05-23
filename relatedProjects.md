---
title: Related Projects
nav: 4
---


<br />


This page collects experimental projects and research prototypes based on or inspired by REScala. For the related publications, please see the [publications](../publications/) page.




# [Distributed REScala](../distributed/)

[Distributed REScala](../distributed/) is the first language to bring Reactive Programming to the distributed setting. Its propagation algorithm SID-UP ensures glitch freedom in (distributed) value updates.

[**More...**](../distributed/)





# [Concurrent Reactive Programming](../concurrent/)

We propose a model for [thread-safe reactive programming](../concurrent/) that ensures abort-free strict serializability
under concurrency without sacrificing neither expressiveness nor consistency. We also propose an architecture
for integrating a corresponding scheduler into the RP language runtime, such that thread-safety is provided
"out-of-the-box" to the applications.

We show the feasibility of our proposal by providing and evaluating a ready-to-use implementation
integrated into REScala. 

[**More...**](./concurrent/)





# [Debugging Reactive Programming](https://guidosalva.github.io/reactive-inspector/)

![RSS Reader](images/highlight-dependencies-children.png){: width="480"}
The reactive style requires a paradigm shift in the concepts needed for debugging. Traditional debugging has been conceived for imperative languages while reactive programming is declarative. Reactive Inspector is a debugger for reactive programs integrated with the Eclipse Scala IDE that allows to debug software in the reactive style.

[Reactive Inspector](https://guidosalva.github.io/reactive-inspector/)
 provides a nuber of features which support developer in the process of debugging reactive programs, including visualizing reactive trees, back-in-time debugging, interactive queries of the graph, node breackpoiting and profiling.

 [**More...**](https://guidosalva.github.io/reactive-inspector/)




# [Case studies](./studies/)

![RSS Reader](images/shapes.png){: width="240"}
A portfolio of case studies that compare various design solutions including REScala, event-only implementations, signal-only implementations and callback-based versions.

[**More...**](./studies/)




# [The RESwing GUI Library](../reswing/)

A GUI library based on the Swing Java library which provides bindings for REScala i.e., the widgets expose reactive abstractions (signals and events) to the rest of the application.

[**More...**](../reswing/)



# [Reactive Datastructures](../datastructures/)

A library of data structures base on REScala which enforce data dependencies among containers in the style of view maintenance in databases.   

[**More...**](../datastructures/)













