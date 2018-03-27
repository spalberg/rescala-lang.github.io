---
title: Home
nav: 1
---

# <span class="rescala-logo-re">RE</span><span class="rescala-logo-scala">Scala</span>
{: class="rescala-logo"}

REScala is a Scala library for functional reactive programming on the JVM and the Web.
It provides a rich API for event stream transformations and signal composition
with managed consistent up-to-date state and minimal syntactic overhead.
It supports concurrent and distributed programs.

<!-- {% include slideshow.html %} -->

<br />

## Functional
{: class="info-box"}
Abstractions for Events and Signals to handle interactions and state, and seamless conversions between them.

## Consistent
{: class="info-box"}
No temporary inconsistencies, no data races. Programmers define logical constraints which are automatically enforced by the runtime.

## Concurrent
{: class="info-box"}
Concurrent applications are fully supported. Reactive abstractions can be safely accessed from any thread and they are updated concurrently.

<br />

Software applications react to external changes such as the input from the user and network messages.
Traditionally, object-oriented software adopts the Observer pattern to implement reactivity and decouple the observers from the observables.
Whereas researchers have highlighted the drawbacks of this style for a long time, alternatives struggle to be widely accepted.
In particular, functional reactive programming and dataflow programming – which aim to represent time-changing values as first class abstractions – are promising,
but hardly escape the functional setting. On the other hand, event-based languages directly support events but do not achieve the declarative style of more functional approaches.


REScala is a reactive language which integrates concepts from event-based and functional-reactive programming into the object-oriented world.
Rescala supports the development of reactive applications by fostering a functional and declarative style which complements the advantages of object-oriented design.

<!-- --- -->
<!-- [Get Started](./manual){: class="btn btn-primary"}
[Sourcecode](https://github.com/guidosalva/REScala/){: class="btn btn-primary"} -->

<!-- <a class="github-button" href="https://github.com/guidosalva/REScala/archive/master.zip" data-style="mega" aria-label="Download guidosalva/REScala on GitHub">Download</a> -->



---
REScala is a research project held at TU Darmstadt in the
[Software Technology Group.](http://www.stg.tu-darmstadt.de/)
