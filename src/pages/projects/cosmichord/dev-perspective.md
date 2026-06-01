---
layout: "@/layouts/BaseMarkdownLayout.astro"
title: "Developer's Perspective"
subtitle: "A behind-the-scenes look and technical breakdown of CosmiChord."

parentnav_name: "CosmiChord"
parentnav_href: "/projects/cosmichord"

under_construction: true
---

# Introduction

This section dives into the technical details of CosmiChord and it's Level Editor.

My capstone project is broken down into two halves, since the capstone itself is two quarters long. The first half focused on the Level Editor, and is primarily amount the Event System, the last major feature addition to the editor. The second half is focused on CosmiChord itself and polishing its user interface (UI) into a final, publishing-ready state.

## Author's Note

As of current writing, the second quarter of my capstone is still ongoing. As such, this page will only cover the first quarter of the capstone, highlighting the Level Editor.

# Quarter 1: The Level Editor and the Event System

This quarter focused on the CosmiChord Editor, and specifically includes the implementation of the Event System.

## In a Nutshell...

The Event System was the last major feature to be added to the level editor. It's premise is relatively simple; have small "events" that can be placed in a level which affected some component of the other beatmap objects. For example, a "color change" event which simply changes the color of an object at a certain point. Or a "freeze event" which simply freezes an object in its place. The fundamental idea with the Event System is that, through these small "building block" events, level designers can produce advanced level effects that are unseen in the Virtual Reality rhythm game space (unless you wanted to look at modded content, I guess).

## Under The Hood

There were a couple of iterations of the Event System throughout the capstone, with each iteration improving on the performance and usability of the Event System until it satisfied the requirements of CosmiChord's internal level design team.
