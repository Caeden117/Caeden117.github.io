---
layout: "@/layouts/BaseMarkdownLayout.astro"
title: "ChroMapper"
subtitle: "An advanced community editor for Beat Saber."

made_with: "unity csharp"
favorite: true

github: "https://github.com/Caeden117/ChroMapper"
download: "https://cm.topc.at/dl"
---

# Development Story and Goals

[IMAGE STUB: Screenshot of ChroMapper's main interface showing the 3D beatmap editor with notes, lighting, and timeline]

ChroMapper began in February 2019 as a collaborative project between myself and a friend, born from frustration with the existing Beat Saber map editors. The community tools at the time suffered from usability issues and performance limitations that hindered the creative process for mappers. We envisioned creating a superior editor that would not only address these shortcomings but also incorporate cutting-edge features emerging from Beat Saber's vibrant modding community.

The project started as a simple improvement effort but evolved into something far more ambitious—a comprehensive mapping ecosystem that would become the cornerstone of Beat Saber map creation.

[IMAGE STUB: Before/after comparison showing old Beat Saber editors vs ChroMapper's modern interface]

# Technology Stack and Architecture

**Primary Technologies:**
- **Unity** - Chosen to match Beat Saber's engine for maximum compatibility
- **C#** - Leveraging our existing expertise and Unity's native language
- **Jenkins CI/CD** - Automated builds and distribution pipeline

**Rationale Behind Technology Choices:**
Unity was the natural choice given Beat Saber's foundation and our team's familiarity with the engine. C# provided robust performance for real-time editing operations while maintaining flexibility for our growing open-source community. The decision to implement a comprehensive plugin system using .NET Framework enabled community extensibility without compromising core stability.

[IMAGE STUB: Screenshot of Unity editor showing ChroMapper project structure and key components]

# Technical Challenges and Solutions

## Performance Optimization Journey
The most significant challenge was achieving real-time performance with complex beatmaps. Early iterations struggled with:
- Object rendering bottlenecks when handling thousands of objects
- Inefficient mouse raycasting causing editor lag
- Memory management issues during extended editing sessions

**Solutions Implemented:**
- Developed custom object pooling systems for rendering
- Implemented spatial partitioning for optimized raycasting
- Fixed many inefficient code paths with better designed, memory and runtime efficient versions

[IMAGE STUB: Performance profiler screenshots showing before/after optimization results]

## Cross-Platform Compatibility
Expanding ChroMapper's reach required addressing platform-specific challenges:
- Achieved compatibility with Chromebooks, Steam Deck, and Android devices
- Implemented platform-agnostic input systems
- Developed universal build pipeline supporting Windows, macOS, and Linux

[IMAGE STUB: Screenshot showing ChroMapper running on different platforms (Chromebook, Steam Deck, desktop)]

## Codebase Management
As the project grew from a weekend experiment to a multi-year endeavor, maintaining code quality became crucial:
- Established coding conventions with `.editorconfig` enforcement
- Implemented a testing suite that is run through Jenkins
- Created plugin architecture enabling community contributions without core modifications

[IMAGE STUB: Screenshot of code editor showing ChroMapper's codebase with testing framework and plugin architecture]

# Community Impact and Metrics

ChroMapper has achieved remarkable adoption within the Beat Saber community. Shortly after its first Open Beta release, ChroMapper rapidly became the preferred community editor.

**Community Features:**
- **Multiplayer Editing** - Revolutionary feature allowing collaborative map creation
- **Chroma 2.0 Support** - Advanced lighting effects integration
- **360/90 Degree Mapping** - First to support new, immersive map types
- **Cross-platform Availability** - Democratizing map creation across devices, even devices which cannot run Beat Saber

**Open Source Impact:**
- **330+** stars on GitHub
- **27** contributors to the project
- **10+** community-created plugins
- Active Discord community with **6000+** members
- Comprehensive documentation and tutorials reaching **70000+** views

# Technical Innovation

**Breakthrough Features:**
- **Real-time Collaboration** - Simultaneous multi-user editing support
- **Advanced Performance Optimization** - Complex beatmaps render effortlessly on entry-level hardware
- **Modular Plugin System** - Extensible architecture supporting community innovation

# Project Legacy

ChroMapper represents several years of continuous development and community building. While I don't consider it my perfect work, it stands as a testament to the power of community-driven development and technical innovation in gaming tools.

The project has evolved from addressing personal frustrations to becoming an essential infrastructure component of the Beat Saber ecosystem, enabling thousands of creators to build experiences enjoyed by millions of players worldwide.