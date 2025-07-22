---
layout: "@/layouts/BaseMarkdownLayout.astro"
title: "World's Tiniest Desktop Pets"
subtitle: "Large scale pet simulation for Ludum Dare 56."

made_with: "unity csharp"
favorite: true

github: "https://github.com/Caeden117/LudumDare56"
itchdotio: "https://plusonerabbit.itch.io/worlds-tiniest-desktop-pets"
other: "https://ldjam.com/events/ludum-dare/56/worlds-tiniest-desktop-pets"
---

# Development Story and Goals

![Animated graphic of a few desktop pets, showing various moods and emotions.](@/images/projects/worlds-tiniest-desktop-pets/wtdp.gif)

Ludum Dare 56 presented the theme "Tiny Creatures," which immediately sparked our team's imagination around miniaturization and scale. After several successful collaborative game jams, we wanted to tackle something technically ambitious while maintaining the accessibility and charm that made our previous entries successful.

World's Tiniest Desktop Pets emerged from our exploration of the virtual pet genre combined with desktop integration concepts. We envisioned a large-scale simulation where players could interact with thousands or millions of desktop pets.

Our goal was to create a relaxing yet engaging experience that would showcase advanced simulation programming while providing the addictive progression mechanics that make virtual pet games compelling.


# Technology Stack and Simulation Architecture

![Animated graphic of pets eating the logo to World's Tiniest Desktop Pets.](@/images/projects/worlds-tiniest-desktop-pets/wtdp2.gif)

**Primary Technologies:**
- **Unity** - Game engine chosen for its excellent performance optimization and desktop integration capabilities
- **C#** - Programming language for CPU-side systems and UI
- **Computer Shaders** - GPU approach to running the simulation

**Advanced Systems Developed:**
- **Mass Pet Simulation** - Efficient management of thousands or millions of individual pet entities
- **Behavioral AI System** - Behavior trees allowing each individual pet its act independently of another
- **Desktop Integration** - Native desktop features for enhanced user experience

**Rationale Behind Technology Choices:**
Unity was selected for its maturity and desktop integration capabilities. The engine's Compute Shader system allowed us to handle large-scale simulations efficiently, while C# provided the structure needed for set-up, tear down, and other systems which couldn't be done on the GPU.

# Technical Challenges and Simulation Complexity

![Animated graphic of pets affection growing based on proximity to the mouse cursor.](@/images/projects/worlds-tiniest-desktop-pets/wtdp4.gif)

**Large-Scale Entity Management:**
- **Performance Optimization** - Maintaining 60fps with millions of active pet entities
- **Memory Management** - Efficient data structures for large numbers of similar objects
- **Selective Partitioning** - Randomly selecting a small handful of pets to copy back to the CPU

**Advanced AI Implementation:**
- **Behavior Trees** - Complex decision-making systems for realistic pet behaviors
- **Need Simulation** - Hunger, happiness, social interaction, and other virtual pet mechanics
- **Emergent Interactions** - Pets interacting with each other in meaningful ways
- **Learning Systems** - Pets adapting their behavior based on player interactions

# Lessons Learned and Technical Mastery

**High-Performance Game Development:**
Developing World's Tiniest Desktop Pets provided intensive experience with performance-critical programming and large-scale simulation development. Working with Unity's advanced systems taught valuable lessons about optimization, parallel processing, and efficient memory management.

**AI and Simulation Programming:**
- Advanced understanding of behavior tree implementation and optimization
- Experience with state management across large numbers of entities

**Systems Architecture:**
- Understanding of performance profiling and bottleneck identification
- Skills in modular system design for maintainable complex projects
- Experience with desktop application development beyond traditional games

# Project Impact and Jam Results

![Animated graphic of hundreds of desktop pets movine around and jumping off of a File Explorer window.](@/images/projects/worlds-tiniest-desktop-pets/wtdp5.gif)

**Jam Results:**
- **85th Overall** for my current highest ranked game ever in Ludum Dare
- **2nd in Innovation** - Demonstrating the success of our large scale pet simulation
- **2nd in Theme** - The culmination of immense community positivity over our desktop pet game

**Innovation Impact:**
World's Tiniest Desktop Pets demonstrates the potential for game jams to produce technically sophisticated projects that push the boundaries of what's achievable in constrained timeframes. The large-scale simulation techniques developed for this project have applications in crowd simulation, ecosystem modeling, and other complex systems.

**Legacy and Future Applications:**
The performance optimization techniques and simulation architecture developed for this project continue to influence approaches to large-scale entity management in subsequent game development projects. The technical solutions serve as a foundation for more ambitious simulation projects and demonstrate the value of performance-focused development practices.