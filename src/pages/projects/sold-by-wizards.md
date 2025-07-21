---
layout: "@/layouts/BaseMarkdownLayout.astro"
title: "Sold By Wizards"
subtitle: "Wizard dropshipping game for Ludum Dare 55."

made_with: "unity csharp"

github: "https://github.com/Caeden117/SoldByWizards"
itchdotio: "https://legoandmars.itch.io/sold-by-wizards"
other: "https://ldjam.com/events/ludum-dare/55/sold-by-wizards"
---

# Development Story and Goals

![Screenshot of Sold By Wizard's main tower, with a portal open to another dimension](@/images/projects/sold-by-wizards/soldbywizards.png)

In the 55th Ludum Dare game jam, we returned to our roots. Only three people - myself, Bobbie and Rabbit - participated this time around.

The theme was *summoning*. Like with our previous entry Liver Die, we wanted to hatch a unique and creative take on the theme that set us apart from the other teams participating.

This time around, our minds resorted to dropshipping - the practice of selling items without keeping stock. And so, our game idea was hatched: As a wizard in need to make rent, you summon portals to different dimensions, stealing items to dropship them on a magical online supply store.

# Technology Stack and Refined Development Process

![Screenshot of Sold By Wizard's inventory system open in JetBrains Rider.](@/images/projects/sold-by-wizards/soldbywizards2.png)

**Primary Technologies:**
- **Unity** - Game engine for rapid prototyping and cross-platform deployment
- **C#** - Programming language for game logic and portal mechanics
- **Git** - Version control with improved branching strategy from past jams
- **Unity's Built-in Render Pipeline** - For portal effects and magical aesthetics

**Advanced Systems Implemented:**
- **Portal Rendering System** - Dynamic portal effects that preview other dimensions
- **Inventory Management** - Streamlined dropshipping mechanics with shown prices
- **Magical Economics System** - Supply and demand simulation for interdimensional commerce
- **Advanced Lighting** - Baked lighting on dynamically loaded environments
- **Modular Level System** - Dynamic environment loading with procedural elements and portal integration

**Rationale Behind Technology Choices:**
Having learned from previous jams, we selected a tech stack that prioritized polish over feature complexity. Unity's built-in systems provided the stability we needed for advanced visual effects, while our refined Git workflow allowed for seamless collaboration without the coordination issues of larger teams.

# Technical Challenges and Breakthrough Solutions

**The Most Polished Experience:**
To be honest, this was the most chill game jam project I've participated in. Lunaculture had us struggling to scope out a game for three developers, Liver Die had us learning to split work amongst a large group of people, and Cache Me If You Can had us struggling to complete a game with less people than we had envisioned. This time around, things went by largely without a hitch.

**Efficient Development Pipeline:**
We had our game idea within the first two hours, finished the game loop with half the time to spare, and spent the last half of the game jam polishing and refining the experience we already had. No feature creep, no scope creep, just an extremely polished game loop.

**Technical Implementation Highlights:**
- **Dynamic Asset Loading** - Seamless loading of different dimensional environments with randomized elements
- **Advanced Lighting Techniques** - Experimented with baked lighting on dynamically loaded maps
- **Performance Optimization** - Maintained 60fps on the web even with complex portal rendering

![Screenshot of a level in Sold By Wizards, viewing the same portal as seen from the Wizard's tower from the other side. The Wizard tower is completely hidden, with the only visible portion being through the portal.](@/images/projects/sold-by-wizards/soldbywizards3.png)

**Last-Minute Technical Drama:**
The only panic moment to mention was at the very end; with one hour to submit our game after the deadline, we decided to enable link-time optimization (LTO) in our WebGL build. Little did we know, this ballooned compile times from a few minutes to... about 43 minutes. Suffice to say, we weren't sure we'd be able to submit in time, but we're very thankful that the build finished in time to submit.

# Lessons Learned and Technical Mastery

![Screenshot of another level in Sold By Wizards, showing the beautiful level design in play.](@/images/projects/sold-by-wizards/soldbywizards1.jpg)

**Scope Management Mastery:**
Sold By Wizards has got to be the most polished game jam entry I've ever helped create. Not only is the gameplay solid and refined, we also had the time to play with advanced graphical techniques, from trying out baked lighting on dynamically loaded maps to a portal effect that obscured the wizard tower on the other side.

**Team Efficiency Insights:**
- Smaller teams can be more efficient when everyone is highly engaged
- Clear communication early prevents late-stage integration issues
- Experience from previous jams significantly reduces development overhead
- Focus on core mechanics first, then polish, leads to better overall results

**Technical Growth:**
- Advanced understanding of Unity's rendering pipeline
- Experience with complex visual effects implementation
- Improved optimization techniques for web deployment
- Better understanding of build pipeline configuration and timing

# Project Impact and Jam Results

**Jam Results:**
- **141st Overall**, nearly beating our highest ranked game at the time, Liver Die. 
- **242nd in Fun** - Demonstrating our successful implementation of engaging gameplay
- **35th in Humor** - Reinforcing our successful approach of comedic and lighthearted games

**Commercial Considerations:**
My team is currently considering pursuing Sold By Wizards as a commercial project, and looking into what ideas we might want to incorporate into a fully fledged game. It will certainly be a large commitment, but with how solid the game is as a Ludum Dare entry, I think it's the closest we've ever gotten to a commercially ready product.

**Legacy and Technical Innovation:**
Sold By Wizards represents the culmination of our game jam experience, showcasing advanced technical implementation while maintaining the rapid development pace that makes game jams exciting. The portal technology and modular systems developed for this project have potential applications in larger commercial projects. 