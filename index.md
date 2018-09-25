---
title: Home
nav: 1
class: center-block col-sm-9
---

<style>
 .col-sm-4 {text-align:center}
 .myicon > strong {font-feature:none; font-size:30px; background:#EC6500; color:white; padding:0 .5em; display:inline-block}
</style>

# <span class="rescala-logo-re">RE</span><span class="rescala-logo-scala">Scala</span>
{: class="rescala-logo"}

REScala is a Scala library for functional reactive programming on the JVM and the Web.
It provides a rich API for event stream transformations and signal composition
with managed consistent up-to-date state and minimal syntactic overhead.
It supports concurrent and distributed programs.

<!-- {% include slideshow.html %} -->

<div class="row"><div class="col-sm-4">

## Flexible

Abstractions for Events and Signals. Integrating with imperative, object-oriented, functional and any other paradigm on the JVM.


</div><div class="col-sm-4">

## Consistent

No temporary inconsistencies, no data races, no surprises.
Write code which behaves as expected.


</div><div class="col-sm-4">

## Thread-safe

Multi-threaded applications are fully supported.
Reactive abstractions can be safely accessed from any thread and they are updated in parallel.


</div></div>

<br>

<div class="alert alert-info text-justify" role="alert">
Visit the <a href="{{ site.github.baseurl }}/manual" class="alert-link">manual</a> to get started.
</div>

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
