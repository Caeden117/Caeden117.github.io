---
layout: "@/layouts/BaseMarkdownLayout.astro"
title: "ChroMapper"
subtitle: "An advanced community editor for Beat Saber."

made_with: "unity csharp"
favorite: true

github: "https://github.com/Caeden117/ChroMapper"
download: "https://cm.topc.at/dl"
---

# Goal and Explanation

ChroMapper was started in February of 2019 between a friend and I. ChroMapper was formed out of a need of an improved, community made map editor. At the time, the existing map editors lacking in some areas, from general usability to performance constraints. We believed we could create a map editor that did things better, while introducing new features created from the ever-expanding Beat Saber modding scene.

We chose to write ChroMapper in the Unity engine for a few reasons: It would match the engine used by Beat Saber, Unity was something both of us had prior experience in, and C# was a language we were also familiar with.

ChroMapper has become the primary third party map editor for the Beat Saber mapping community. Thousands of users use my software to create maps for Beat Saber and interact with eachother through the new multiplayer component. 

# Problems and Growing Pains

Over the course of ChroMapper's development, I ran into multiple issues that turned into large learning experiences. I never knew how large the project would become, so I quickly learned the importance of organizing and maintaining code.

The biggest lessons that have come out of developing ChroMapper were in real-time optimization. Multiple times in development, I had to sit down and rewrite systems that were simply unoptimized. From object rendering to mouse raycasting, I've examined and optimized code which allows ChroMapper to handle larger Beat Saber levels and run on lower powered hardware. We eventually got ChroMapper to run on devices such as Chromebooks, the new Steam Deck, and Android devices. Cool stuff! 

# Lessons Learned

ChroMapper is easily the largest project I've worked on, and the challenges I faced certainly morphed me into a much better developer.

Developing ChroMapper gave me invaluable insight into the structure of a project, optimizing for real-time performance, and managing a large open source project. While I will certainly not call ChroMapper my best work, it represents over 4 years of my growth as a developer. And for that, I am forever thankful. 